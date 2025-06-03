import { getPostsByCategory, getAllCategories } from '@/lib/mdx';
import { BlogCard } from '@/components/BlogCard';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
    params: Promise<{
        category: string;
    }>;
}

export async function generateStaticParams() {
    const categories = getAllCategories();
    return categories.map((category) => ({
        category: encodeURIComponent(category),
    }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
    const resolvedParams = await params;
    const category = decodeURIComponent(resolvedParams.category);

    return {
        title: `${category} - 技术博客`,
        description: `浏览${category}分类下的所有文章`,
    };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const resolvedParams = await params;
    const category = decodeURIComponent(resolvedParams.category);
    const posts = getPostsByCategory(category);

    if (posts.length === 0) {
        notFound();
    }

    return (
        <div className="max-w-6xl mx-auto">
            <div className="mb-8">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-4"
                >
                    <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    返回博客
                </Link>

                <h1 className="text-4xl font-bold mb-4">{category}</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                    共找到 {posts.length} 篇相关文章
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>
        </div>
    );
} 