# 我的技术博客

这是一个使用Next.js构建的个人技术博客，部署在GitHub Pages上。

## 技术栈

- Next.js 14
- TypeScript
- Tailwind CSS
- GitHub Pages

## 功能

- 基于Markdown的博客文章
- 响应式设计
- 通过GitHub Actions自动部署

## 本地开发

1. 克隆仓库
   ```bash
   git clone https://github.com/kryst4lskyxx/kryst4lskyxx.github.io.git
   cd kryst4lskyxx.github.io
   ```

2. 安装依赖
   ```bash
   npm install
   ```

3. 启动开发服务器
   ```bash
   npm run dev
   ```

4. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 添加新文章

1. 在 `src/content/posts` 目录中创建一个新的 `.md` 文件
2. 文件开头添加元数据:
   ```markdown
   ---
   title: '文章标题'
   date: '2024-04-08'
   description: '文章简短描述'
   ---
   ```
3. 在元数据后添加文章内容（Markdown格式）

## 部署

当代码推送到主分支（main 或 master）时，GitHub Actions将自动构建并部署到GitHub Pages。

您也可以手动触发部署：
1. 转到GitHub仓库的Actions选项卡
2. 选择"Deploy to GitHub Pages"工作流
3. 点击"Run workflow"

## 许可证

MIT
