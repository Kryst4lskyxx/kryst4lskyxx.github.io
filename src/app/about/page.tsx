export const metadata = {
  title: '关于我 - 技术博客',
  description: '了解更多关于博主和这个技术博客的信息',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">关于我</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          欢迎了解更多关于我和这个博客的信息
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">👋 你好，我是博主</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            我是一名热爱技术的开发者，专注于前端和后端开发。通过这个博客，我希望能够分享我在编程路上的经验、学习心得和技术见解。
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            我相信技术的力量能够改变世界，也相信知识分享能够帮助更多的人成长。如果我的文章对你有帮助，那就是我最大的快乐。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              技术栈
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• 前端：React, Vue.js, Next.js, TypeScript</li>
              <li>• 后端：Node.js, Python, Java</li>
              <li>• 数据库：MySQL, PostgreSQL, MongoDB</li>
              <li>• 工具：Git, Docker, AWS</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              兴趣爱好
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• 开源项目贡献</li>
              <li>• 技术文章写作</li>
              <li>• 新技术学习与研究</li>
              <li>• 编程教学与分享</li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4">📝 关于这个博客</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            这个博客使用 Next.js 构建，采用现代化的技术栈，包括：
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
            <li>Next.js 14 - React 全栈框架</li>
            <li>TypeScript - 类型安全的 JavaScript</li>
            <li>Tailwind CSS - 实用优先的 CSS 框架</li>
            <li>MDX - Markdown + React 组件</li>
            <li>Giscus - 基于 GitHub Discussions 的评论系统</li>
            <li>Algolia - 强大的搜索功能</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-300">
            博客支持深色模式、响应式设计，并且完全静态化，部署在 GitHub Pages 上。
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold mb-4">📬 联系我</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            如果你有任何问题、建议或者想要交流技术，欢迎通过以下方式联系我：
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              邮箱
            </a>
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://twitter.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 