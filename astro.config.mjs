// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://davidfong9.github.io/',
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'github-dark-high-contrast',
      wrap: true,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
