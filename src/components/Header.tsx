'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { SearchBox } from './SearchBox';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              技术博客
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                首页
              </Link>
              <Link href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                博客
              </Link>
              <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                关于
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <SearchBox />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
} 