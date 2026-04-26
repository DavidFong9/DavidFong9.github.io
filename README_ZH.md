# 个人博客 - 使用说明

## 项目信息

这是一个基于 [Astro](https://astro.build/) 和 [Starlight](https://starlight.astro.build/) 构建的个人静态博客，采用深色科技风设计。

## 本地开发

```bash
# 进入项目目录
cd blog

# 安装依赖（首次）
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:4321/ 查看效果

## 添加博客文章

1. 在 `src/content/docs/` 目录下创建新的 `.mdx` 文件
2. 文件开头必须包含以下 frontmatter：

```yaml
---
title: 文章标题
description: 文章描述
sidebar:
  label: 显示在侧边栏的名称
  order: 排序序号
---

文章内容...
```

3. 在 `astro.config.mjs` 的 `sidebar` 配置中添加链接

## 项目结构

```
blog/
├── src/
│   ├── content/
│   │   └── docs/          # 所有文档内容
│   │       ├── index.mdx  # 首页
│   │       ├── about.mdx  # 关于页面
│   │       └── blog/      # 博客文章目录
│   ├── styles/
│   │   └── custom.css     # 自定义样式
│   └── content.config.ts  # 内容配置
├── public/                 # 静态资源
├── astro.config.mjs        # Astro 配置
└── package.json
```

## 自定义样式

编辑 `src/styles/custom.css` 来修改主题样式：
- 修改颜色变量调整配色
- 添加自定义 CSS 实现特殊效果

## 部署到 GitHub Pages

### 第一步：将代码推送到 GitHub

1. 初始化 git 仓库（如果还没有）
   ```bash
   git init
   ```

2. 添加远程仓库
   ```bash
   git remote add origin https://github.com/DavidFong9/fangh750.github.io.git
   ```

3. 提交并推送代码
   ```bash
   git add .
   git commit -m "Initial commit: add personal blog"
   git branch -M main
   git push -u origin main
   ```

### 第二步：配置 GitHub Pages

1. 访问你的仓库 https://github.com/DavidFong9/fangh750.github.io
2. 进入 **Settings** → **Pages**
3. 在 **Build and deployment** 下：
   - **Source**: 选择 `GitHub Actions`
4. 保存后，推送的代码会自动触发部署

### 第三步：查看部署状态

1. 进入仓库的 **Actions** 标签页
2. 等待 workflow 完成运行（约 2-3 分钟）
3. 完成后访问 https://davidfong9.github.io/ 查看你的网站

## 后续更新

每次添加或修改内容后：

```bash
git add .
git commit -m "描述你的更改"
git push
```

GitHub Actions 会自动重新部署，几分钟后网站就会更新。

## 常用命令

```bash
npm run dev      # 启动开发服务器
npm run build    # 构建生产版本
npm run preview  # 预览构建结果
```

## 有用的链接

- [Astro 文档](https://docs.astro.build/)
- [Starlight 文档](https://starlight.astro.build/)
- [MDX 语法](https://mdxjs.com/docs/)
