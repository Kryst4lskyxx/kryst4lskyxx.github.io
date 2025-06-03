# 技术博客

一个基于 Next.js 构建的现代化技术博客，支持 Markdown 写作、主题切换、搜索功能和评论系统。

## ✨ 特性

- 🎨 **现代化设计** - 响应式设计，支持深色/浅色主题切换
- 📝 **Markdown 支持** - 支持 Markdown 和 MDX 格式写作
- 🔍 **智能搜索** - 基于 Algolia 的全文搜索功能
- 💬 **评论系统** - 基于 GitHub Discussions 的 Giscus 评论
- 🏷️ **分类标签** - 文章分类和标签管理
- 📊 **访问统计** - 集成百度统计
- 🚀 **静态部署** - 支持 GitHub Pages 部署
- ⚡ **性能优化** - 静态生成，加载速度快

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **内容**: MDX (Markdown + React)
- **主题**: next-themes
- **评论**: Giscus (GitHub Discussions)
- **搜索**: Algolia
- **部署**: GitHub Pages
- **统计**: 百度统计

## 🚀 快速开始

### 环境要求

- Node.js 18+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看博客。

### 构建生产版本

```bash
npm run build
```

## 📝 写作指南

### 创建新文章

1. 在 `content/posts/` 目录下创建新的 `.md` 或 `.mdx` 文件
2. 添加 Front Matter 元数据：

```markdown
---
title: "文章标题"
date: "2024-01-01"
description: "文章描述"
tags: ["标签1", "标签2"]
category: "分类名称"
cover: "封面图片URL（可选）"
---

# 文章内容

这里是文章的正文内容...
```

### Front Matter 字段说明

- `title`: 文章标题（必需）
- `date`: 发布日期（必需）
- `description`: 文章描述（必需）
- `tags`: 标签数组（可选）
- `category`: 分类（可选，默认为"未分类"）
- `cover`: 封面图片URL（可选）

## ⚙️ 配置

### 1. 评论系统配置

编辑 `src/components/Comments.tsx`，替换以下配置：

```tsx
<Giscus
  repo="YOUR_USERNAME/YOUR_REPO"
  repoId="YOUR_REPO_ID"
  category="General"
  categoryId="YOUR_CATEGORY_ID"
  // ... 其他配置
/>
```

获取配置信息：
1. 访问 [giscus.app](https://giscus.app/)
2. 按照指引配置你的 GitHub 仓库
3. 复制生成的配置代码

### 2. 搜索功能配置

1. 注册 [Algolia](https://www.algolia.com/) 账号
2. 创建新的应用和索引
3. 配置搜索功能（需要自行实现索引同步）

### 3. 百度统计配置

编辑 `src/app/layout.tsx`，替换统计代码：

```javascript
hm.src = "https://hm.baidu.com/hm.js?YOUR_BAIDU_ANALYTICS_ID";
```

### 4. 个人信息配置

编辑以下文件中的个人信息：
- `src/app/layout.tsx` - 网站标题和描述
- `src/components/Header.tsx` - 导航栏标题
- `src/components/Footer.tsx` - 页脚信息
- `src/app/about/page.tsx` - 关于页面内容

## 🚀 部署

### GitHub Pages 部署

1. 确保你的仓库名为 `username.github.io` 或在仓库设置中启用 GitHub Pages
2. 推送代码到 `main` 或 `master` 分支
3. GitHub Actions 会自动构建和部署

### 自定义域名

1. 在 `public` 目录下创建 `CNAME` 文件，内容为你的域名
2. 在 `.github/workflows/deploy.yml` 中配置 `cname` 字段
3. 在域名提供商处配置 DNS 记录

## 📁 项目结构

```
├── .github/workflows/    # GitHub Actions 工作流
├── content/posts/        # Markdown 文章目录
├── public/              # 静态资源
├── src/
│   ├── app/            # Next.js App Router 页面
│   ├── components/     # React 组件
│   ├── lib/           # 工具函数和配置
│   └── styles/        # 样式文件
├── next.config.js     # Next.js 配置
├── tailwind.config.ts # Tailwind CSS 配置
└── package.json       # 项目依赖
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🙏 致谢

感谢以下开源项目：
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MDX](https://mdxjs.com/)
- [Giscus](https://giscus.app/)
- [next-themes](https://github.com/pacocoursey/next-themes)
