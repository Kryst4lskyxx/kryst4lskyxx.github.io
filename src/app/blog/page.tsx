import { getAllPosts, getAllCategories } from '@/lib/mdx';
import { BlogCard } from '@/components/BlogCard';
import Link from 'next/link';

export const metadata = {
  title: '博客文章 - 技术博客',
  description: '浏览所有技术文章和编程经验分享',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">博客文章</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          浏览所有技术文章和编程经验分享
        </p>
      </div>

      {/* Categories Filter */}
      {categories.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">按分类筛选</h2>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/blog"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              全部
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog/category/${encodeURIComponent(category)}`}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Posts Grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📝</div>
          <h2 className="text-2xl font-semibold mb-2">暂无文章</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            还没有发布任何文章，开始写作你的第一篇技术博客吧！
          </p>
        </div>
      )}

      {/* Stats */}
      <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {posts.length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">篇文章</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {categories.length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">个分类</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {posts.reduce((total, post) => total + post.tags.length, 0)}
            </div>
            <div className="text-gray-600 dark:text-gray-300">个标签</div>
          </div>
        </div>
      </div>
    </div>
  );
} 