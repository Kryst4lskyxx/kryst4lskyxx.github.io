import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">技术博客</h3>
            <p className="text-gray-600 dark:text-gray-300">
              分享技术见解与编程经验，记录学习与成长的点点滴滴。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">快速导航</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  博客
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  关于
                </Link>
              </li>
              <li>
                <Link href="/api/rss" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  RSS订阅
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">联系方式</h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <p>Email: contact@example.com</p>
              <p>GitHub: @username</p>
              <p>Twitter: @username</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} 技术博客. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 