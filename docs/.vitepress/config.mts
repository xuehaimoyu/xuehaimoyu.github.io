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
      {text: '日常博客', link: '/feishu__2024_8_26__日常博客'},
      {text: '学习笔记', link: '/feishu__2024_8_27__学习笔记'},
      {text: '技术博客', link: '/feishu__2024_9_31__技术博客'},
      {text: "旅途记录", link: "/feishu__2024_9_31__旅途记录"}

    ],

    sidebar: [
      {
        "text": "日常博客",
        "link": "/feishu__2024_8_26__日常博客",
        "items": [
          {
            "text": "个人博客搭建纪念",
            "link": "/feishu__2024_8_26_日常博客_个人博客搭建纪念"
          }
        ],
        "collapsed": false
      },
      {
        "text": "技术博客",
        "link": "/feishu__2024_9_31__技术博客",
        "items": [
          {
            "text": "Vitepress网站搭建与更新记录",
            "link": "/feishu__2024_9_31_技术博客_vitepress网站搭建与更新记录"
          }
        ],
        "collapsed": false
      },
      {
        "text": "旅途记录",
        "link": "/feishu__2024_9_31__旅途记录",
        "items": [
          {
            "text": "旅途记录",
            "link": "/feishu__2024_9_31_旅途记录_中国"
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
            "link": "/feishu__2024_8_27_学习笔记_论文导读",
            "items": [
              {
                "text": "论文导读",
                "link": "/feishu__2024_9_31_学习笔记_论文导读_prl  volume 133 部分文章导读"
              }
            ],
            "collapsed": false
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
                    "text": "未命名",
                    "link": "/feishu__2024_9_16_学习笔记_论文阅读记录_优化控制_"
                  }
                ],
                "collapsed": false
              }
            ],
            "collapsed": false
          },
          {
            "text": "AI学习",
            "link": "/feishu__2024_9_16_学习笔记_ai学习",
            "items": [
              {
                "text": "强化学习",
                "link": "/feishu__2024_9_16_学习笔记_ai学习_强化学习"
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

