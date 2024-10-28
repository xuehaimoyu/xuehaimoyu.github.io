import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My personal website",
  description: "A VitePress Personal Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xuehaimoyu' }
    ]
  },
  markdown: {
    config: (md) => {
      md.use(mathjax3)
    }
  },
  locales: {
    root: {
      label: '中文',
      lang: '中文'
    },
    fr: {
      label: 'English',
      lang: 'en', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      //link: '/en/guide' // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的

      // 其余 locale 特定属性...
    }
  }
})

