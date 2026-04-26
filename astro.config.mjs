// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://davidfong9.github.io/',
  output: 'static',
  integrations: [
    starlight({
      title: '我的技术博客',
      description: '探索技术，分享见解',
      defaultLocale: 'zh-cn',
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: '首页', link: '/' },
        { label: '博客文章', link: '/blog/intro' },
        { label: '关于我', link: '/about' },
      ],
    })
  ],
});
