import Link from 'next/link';
import { Post } from '@/lib/mdx';
import { formatDate, readingTime } from '@/lib/utils';

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {post.cover && (
        <div className="aspect-video bg-gray-200 dark:bg-gray-700">
          {/* 这里可以添加图片组件 */}
          <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
            封面图片
          </div>
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
            {post.category}
          </span>
          <span>•</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>•</span>
          <span>{readingTime(post.content)} 分钟阅读</span>
        </div>
        
        <h2 className="text-xl font-semibold mb-3 line-clamp-2">
          <Link 
            href={`/blog/${post.slug}`}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {post.title}
          </Link>
        </h2>
        
        {post.description && (
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {post.description}
          </p>
        )}
        
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                +{post.tags.length - 3} 更多
              </span>
            )}
          </div>
        )}
        
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          阅读更多
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
} 