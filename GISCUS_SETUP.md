# Giscus 评论系统配置指南

本博客使用 Giscus 作为评论系统，它基于 GitHub Discussions 提供评论功能。

## 🚀 快速配置

### 1. 准备 GitHub 仓库

确保您的 GitHub 仓库满足以下要求：
- ✅ 仓库是公开的（Public）
- ✅ 已启用 Discussions 功能
- ✅ 安装了 giscus GitHub App

### 2. 启用 Discussions

1. 进入您的 GitHub 仓库
2. 点击 `Settings` 标签
3. 向下滚动到 `Features` 区域
4. 勾选 `Discussions` 选项

### 3. 安装 giscus GitHub App

1. 访问 [GitHub Apps - giscus](https://github.com/apps/giscus)
2. 点击 `Install` 按钮
3. 选择要安装的仓库（选择您的博客仓库）
4. 完成安装

### 4. 获取配置参数

1. 访问 [giscus.app](https://giscus.app/)
2. 输入您的仓库名称（格式：`username/repository`）
3. 选择页面 ↔️ discussions 映射方式（推荐：`pathname`）
4. 选择 Discussion 分类（推荐：`General` 或 `Announcements`）
5. 复制生成的配置代码

### 5. 更新博客配置

编辑 `src/components/Comments.tsx` 文件：

1. 取消注释 Giscus 相关的 import 语句：
```tsx
import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';
```

2. 取消注释 useTheme hook：
```tsx
const { theme } = useTheme();
```

3. 取消注释 Giscus 组件并替换配置参数：
```tsx
<Giscus
  id="comments"
  repo="YOUR_USERNAME/YOUR_REPO"           // 替换为您的仓库
  repoId="YOUR_REPO_ID"                    // 替换为仓库ID
  category="General"                       // 替换为选择的分类
  categoryId="YOUR_CATEGORY_ID"            // 替换为分类ID
  mapping="pathname"
  term="Welcome to @giscus/react component!"
  reactionsEnabled="1"
  emitMetadata="0"
  inputPosition="top"
  theme={theme === 'dark' ? 'dark' : 'light'}
  lang="zh-CN"
  loading="lazy"
/>
```

4. 删除临时的配置提示界面

## 📝 配置示例

以下是一个完整的配置示例：

```tsx
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
        repo="username/blog-repo"
        repoId="R_kgDOxxxxxx"
        category="General"
        categoryId="DIC_kwDOxxxxxxx"
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
```

## 🔧 故障排除

### 常见问题

1. **"giscus is not installed on this repository"**
   - 解决方案：确保已在 GitHub 上安装 giscus App

2. **"Discussion not found"**
   - 这是正常情况，首次评论时会自动创建 Discussion

3. **403 错误**
   - 检查仓库是否为公开状态
   - 确认 giscus App 有权限访问仓库

4. **404 错误**
   - 检查仓库名称是否正确
   - 确认 Discussions 功能已启用

### 测试配置

配置完成后，您可以：
1. 访问博客文章页面
2. 检查页面底部是否显示评论框
3. 尝试发表一条测试评论
4. 在 GitHub 仓库的 Discussions 中查看是否创建了对应的讨论

## 🎨 自定义主题

Giscus 支持多种主题，您可以在配置中修改 `theme` 属性：

- `light` - 浅色主题
- `dark` - 深色主题
- `preferred_color_scheme` - 跟随系统主题
- `transparent_dark` - 透明深色主题
- 更多主题选项请查看 [giscus 文档](https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#data-theme)

---

配置完成后，您的博客就拥有了功能完整的评论系统！🎉 