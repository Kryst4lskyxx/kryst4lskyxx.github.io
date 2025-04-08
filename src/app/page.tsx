/*
 * @Author: krYst4lskYxx 7381802+kryst4lskyxx@user.noreply.gitee.com
 * @Date: 2025-04-08 17:54:15
 * @LastEditors: krYst4lskYxx 7381802+kryst4lskyxx@user.noreply.gitee.com
 * @LastEditTime: 2025-04-08 17:57:40
 * @FilePath: /kryst4lskyxx.github.io/src/app/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <h1 className="text-4xl font-bold mb-8">我的博客</h1>
      <p className="text-lg mb-8">欢迎来到我的个人博客，这里记录了我的技术学习和生活感悟。</p>

      <div className="w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">最新文章</h2>
        <ul className="space-y-6">
          {allPostsData.map(({ id, date, title, description }) => (
            <li key={id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <Link href={`/posts/${id}`} className="block">
                <div className="mb-2">
                  <span className="text-gray-500 text-sm">{date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
