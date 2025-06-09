# 🍥 Fuwari 博客

基于 [Astro](https://github.com/withastro/astro) 和 [Fuwari](https://github.com/saicaca/fuwari) 主题构建的个人博客。

## ✨ 特性

- 基于 Astro 和 Tailwind CSS 构建
- 流畅的动画和页面转场
- 明暗主题切换
- 可自定义的主题色彩和横幅
- 响应式设计
- 搜索功能
- Markdown 扩展功能
- 目录支持
- RSS 订阅

## 🚀 部署到 GitHub Pages

### 1. 创建 GitHub 仓库

1. 在 GitHub 上创建一个新的仓库
2. 将本地代码推送到 GitHub：

```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

### 2. 配置 GitHub Pages

1. 在 GitHub 仓库中，转到 **Settings** > **Pages**
2. 在 **Source** 部分，选择 **GitHub Actions**

### 3. 更新配置

修改 `astro.config.mjs` 文件：

```javascript
export default defineConfig({
  site: "https://yourusername.github.io", // 替换为您的 GitHub 用户名
  base: "/your-repo-name/", // 如果仓库名不是 yourusername.github.io，需要设置这个
  // ...其他配置
});
```

如果您的仓库名是 `yourusername.github.io`，那么 `base` 应该设置为 `"/"`。

### 4. 自定义博客

编辑 `src/config.ts` 文件来自定义您的博客：

- `siteConfig`: 站点标题、副标题、语言等
- `profileConfig`: 个人资料、头像、链接等
- `navBarConfig`: 导航栏链接

### 5. 添加文章

运行以下命令创建新文章：

```bash
pnpm new-post my-first-post
```

然后在 `src/content/posts/` 目录下编辑生成的 Markdown 文件。

## 🧞 命令

| 命令 | 作用 |
| --- | --- |
| `pnpm install` | 安装依赖 |
| `pnpm dev` | 启动开发服务器 `localhost:4321` |
| `pnpm build` | 构建生产版本到 `./dist/` |
| `pnpm preview` | 本地预览构建结果 |
| `pnpm new-post <filename>` | 创建新文章 |
| `pnpm astro ...` | 运行 Astro CLI 命令 |

## 📝 文章格式

文章的 frontmatter 格式如下：

```yaml
---
title: 我的第一篇博客文章
published: 2023-09-09
description: 这是我的 Astro 博客的第一篇文章。
image: ./cover.jpg
tags: [标签1, 标签2]
category: 前端
draft: false
lang: zh_CN  # 如果文章语言与站点语言不同时设置
---
```

## 🎨 自定义主题

您可以在 `src/config.ts` 中的 `themeColor` 部分调整主题颜色：

```typescript
themeColor: {
  hue: 250, // 主题色调，0-360
  fixed: false, // 是否隐藏主题色选择器
},
```

## �� 许可

本项目基于 MIT 许可证。 