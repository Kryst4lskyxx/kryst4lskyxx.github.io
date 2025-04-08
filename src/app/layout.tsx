import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "我的技术博客",
  description: "使用Next.js创建的个人技术博客",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">我的技术博客</Link>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" className="hover:underline">首页</Link>
                </li>
                <li>
                  <Link href="https://github.com/kryst4lskyxx" className="hover:underline" target="_blank">GitHub</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        
        {children}
        
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>© 2024 我的技术博客 - 基于Next.js构建</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
