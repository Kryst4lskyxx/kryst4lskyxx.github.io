import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { format } from 'date-fns';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export interface PostData {
    id: string;
    title: string;
    date: string;
    description: string;
    contentHtml: string;
}

export function getSortedPostsData() {
    // 获取 /posts 目录下的所有文件名
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // 移除文件名的 ".md" 后缀，获取 id
        const id = fileName.replace(/\.md$/, '');

        // 将 markdown 文件读取为字符串
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // 使用 gray-matter 解析文章元数据
        const matterResult = matter(fileContents);

        // 合并数据与 id
        return {
            id,
            ...(matterResult.data as { date: string; title: string; description: string }),
        };
    });

    // 按日期排序
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export async function getPostData(id: string): Promise<PostData> {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // 使用 gray-matter 解析文章元数据
    const matterResult = matter(fileContents);

    // 使用 remark 将 markdown 转换为 HTML 字符串
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // 格式化日期
    const formattedDate = format(new Date(matterResult.data.date), 'yyyy-MM-dd');

    // 合并数据与 id 和内容
    return {
        id,
        contentHtml,
        ...(matterResult.data as { date: string; title: string; description: string }),
        date: formattedDate,
    };
} 