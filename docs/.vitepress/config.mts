import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "个人博客",
  description: "一个记录生活与学习笔记的平台",
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {text: '学习笔记', link: '/feishu__2024_8_27__学习笔记'}
    ],

    sidebar: [
      {
        text: '学习笔记',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        "text": "首页",
        "link": "/feishu__2024_8_26__首页",
        "items": [
          {
            "text": "测试子页面",
            "link": "/feishu__2024_8_26_首页_测试子页面"
          }
        ],
        "collapsed": false
      },
      {
        "text": "学习笔记",
        "link": "/feishu__2024_8_27__学习笔记",
        "items": [
          {
            "text": "论文导读",
            "link": "/feishu__2024_8_27_学习笔记_论文导读"
          },
          {
            "text": "论文阅读记录",
            "link": "/feishu__2024_8_27_学习笔记_论文阅读记录",
            "items": [
              {
                "text": "量子计算",
                "link": "/feishu__2024_8_27_学习笔记_论文阅读记录_量子计算",
                "items": [
                  {
                    "text": "Optimal simulation of Deutsch gates and the Fredkin gate",
                    "link": "/feishu__2024_8_27_学习笔记_论文阅读记录_量子计算_optimal simulation of deutsch gates and the fredkin gate"
                  },
                  {
                    "text": "Fast Multiqubit Gates through Simultaneous Two-Qubit Gates",
                    "link": "/feishu__2024_8_28_学习笔记_论文阅读记录_量子计算_fast multiqubit gates through simultaneous two-qubit gates"
                  },
                  {
                    "text": "变分量子KAN",
                    "link": "/feishu__2024_9_6_学习笔记_论文阅读记录_量子计算_变分量子kan"
                  },
                  {
                    "text": "无监督学习检测量子纠缠",
                    "link": "/feishu__2024_9_8_学习笔记_论文阅读记录_量子计算_无监督学习检测量子纠缠"
                  }
                ],
                "collapsed": false
              },
              {
                "text": "优化控制",
                "link": "/feishu__2024_9_16_学习笔记_论文阅读记录_优化控制",
                "items": [
                  {
                    "text": "变分量子KAN",
                    "link": "/feishu__2024_9_16_学习笔记_论文阅读记录_优化控制_"
                  }
                ],
                "collapsed": false
              }
            ],
            "collapsed": false
          },
          {
            "text": "AI基本范式学习",
            "link": "/feishu__2024_9_16_学习笔记_ai基本范式学习",
            "items": [
              {
                "text": "强化学习",
                "link": "/feishu__2024_9_16_学习笔记_ai基本范式学习_强化学习"
              }
            ],
            "collapsed": false
          }
        ],
        "collapsed": false
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
    en: {
      label: 'English',
      lang: 'en', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      //link: '/en/guide' // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的

      // 其余 locale 特定属性...
    }
  },
    ignoreDeadLinks: true
})

