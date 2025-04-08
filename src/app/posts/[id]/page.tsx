import Link from 'next/link';
import { getAllPostIds, getPostData } from '@/lib/posts';

export async function generateStaticParams() {
    const posts = getAllPostIds();
    return posts.map((post) => ({
        id: post.params.id,
    }));
}

export default async function Post({ params }: { params: { id: string } }) {
    const postData = await getPostData(params.id);

    return (
        <div className="max-w-3xl mx-auto p-8">
            <nav className="mb-8">
                <Link href="/" className="text-blue-500 hover:underline">
                    ← 返回首页
                </Link>
            </nav>

            <article className="prose prose-lg dark:prose-invert max-w-none">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">{postData.title}</h1>
                    <div className="text-gray-500">{postData.date}</div>
                </header>

                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </div>
    );
} 