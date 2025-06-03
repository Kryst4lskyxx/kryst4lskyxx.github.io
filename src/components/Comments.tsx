'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export function Comments() {
  const { theme } = useTheme();

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-6">评论</h3>
      <Giscus
        id="comments"
        repo="Kryst4lskyxx/kryst4lskyxx.github.io" // 需要替换为实际的GitHub仓库
        repoId="R_kgDOOyAPxQ" // 需要替换为实际的仓库ID
        category="Announcements"
        categoryId="DIC_kwDOOyAPxc4Cq_NG" // 需要替换为实际的分类ID
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme === 'dark' ? 'dark' : 'light'}
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
} 