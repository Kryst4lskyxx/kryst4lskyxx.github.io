import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { formatDate, readingTime } from '@/lib/utils';
import { MDXComponents } from '@/components/MDXComponents';
import { Comments } from '@/components/Comments';
import { ShareButtons } from '@/components/ShareButtons';
import Link from 'next/link';

interface PostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PostPageProps) {
    const resolvedParams = await params;
    const post = getPostBySlug(resolvedParams.slug);

    if (!post) {
        return {
            title: '文章未找到 - 技术博客',
        };
    }

    return {
        title: `${post.title} - 技术博客`,
        description: post.description,
        keywords: post.tags.join(', '),
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            tags: post.tags,
        },
    };
}

export default async function PostPage({ params }: PostPageProps) {
    const resolvedParams = await params;
    const post = getPostBySlug(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="max-w-4xl mx-auto">
            {/* Post Header */}
            <header className="mb-8">
                <div className="mb-4">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-4"
                    >
                        <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        返回博客
                    </Link>
                </div>

                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

                <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300 mb-6">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                        {post.category}
                    </span>
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>{readingTime(post.content)} 分钟阅读</span>
                </div>

                {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}

                {post.description && (
                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        {post.description}
                    </p>
                )}
            </header>

            {/* Post Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                <MDXRemote
                    source={post.content}
                    components={MDXComponents}
                />
            </div>

            {/* Post Footer */}
            <footer className="border-t border-gray-200 dark:border-gray-700 pt-8">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">分享这篇文章</h3>
                        <ShareButtons title={post.title} />
                    </div>

                    <div className="text-right">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            最后更新于 {formatDate(post.date)}
                        </p>
                    </div>
                </div>

                {/* Comments */}
                <Comments />
            </footer>
        </article>
    );
} 