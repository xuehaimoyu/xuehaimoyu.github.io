import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "个人博客",
  description: "一个记录生活与学习笔记的平台",
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
              },
            },
          },
        },
      },
    },
    nav: [
      { text: 'Home', link: '/' },
      {text: '日常博客', link: '/feishu__2024_8_26__日常博客'},
      {text: '学习笔记', link: '/feishu__2024_8_27__学习笔记'},
      {text: '技术博客', link: '/feishu__2024_9_31__技术博客'},
      {text: "旅途记录", link: "/feishu__2024_9_31__旅途记录"}

    ],

    sidebar:[
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
          },
          {
            "text": "偏微分方程求解总结",
            "link": "/feishu__2024_10_1_技术博客_偏微分方程求解总结"
          },
          {
            "text": "VScode编译latex教程",
            "link": "/feishu__2024_10_15_技术博客_vscode编译latex教程"
          },
          {
            "text": "一个简单的中文latex模板",
            "link": "/feishu__2024_11_11_技术博客_一个简单的中文latex模板"
          }
        ],
        "collapsed": false
      },
      {
        "text": "旅途记录",
        "link": "/feishu__2024_9_31__旅途记录",
        "items": [
          {
            "text": "中国",
            "link": "/feishu__2024_9_31_旅途记录_中国",
            "items": [
              {
                "text": "上海",
                "link": "/feishu__2024_10_1_旅途记录_中国_上海",
                "items": [
                  {
                    "text": "外滩 陆家嘴",
                    "link": "/feishu__2024_10_1_旅途记录_中国_上海_外滩 陆家嘴"
                  },
                  {
                    "text": "临港 滴水湖 东海",
                    "link": "/feishu__2024_10_1_旅途记录_中国_上海_临港 滴水湖 东海"
                  }
                ],
                "collapsed": false
              },
              {
                "text": "云南",
                "link": "/feishu__2024_10_1_旅途记录_中国_云南"
              },
              {
                "text": "北京",
                "link": "/feishu__2024_10_1_旅途记录_中国_北京",
                "items": [
                  {
                    "text": "北行一",
                    "link": "/feishu__2024_10_27_旅途记录_中国_北京_北行一"
                  }
                ],
                "collapsed": false
              },
              {
                "text": "广东",
                "link": "/feishu__2024_10_1_旅途记录_中国_广东",
                "items": [
                  {
                    "text": "深圳",
                    "link": "/feishu__2024_10_8_旅途记录_中国_广东_深圳"
                  }
                ],
                "collapsed": false
              },
              {
                "text": "四川",
                "link": "/feishu__2024_10_1_旅途记录_中国_四川"
              },
              {
                "text": "浙江",
                "link": "/feishu__2024_10_14_旅途记录_中国_浙江",
                "items": [
                  {
                    "text": "绍兴",
                    "link": "/feishu__2024_10_14_旅途记录_中国_浙江_绍兴"
                  }
                ],
                "collapsed": false
              }
            ],
            "collapsed": false
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
                "text": "PRL Volume 133 部分文章导读",
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
                  },
                  {
                    "text": "各向异性不变性和量子相关的分布",
                    "link": "/feishu__2024_10_5_学习笔记_论文阅读记录_量子计算_各向异性不变性和量子相关的分布论文阅读"
                  },
                  {
                    "text": "通用三量子位量子门的实现",
                    "link": "/feishu__2024_10_22_学习笔记_论文阅读记录_量子计算_通用三量子位量子门的实现"
                  }
                ],
                "collapsed": false
              },
              {
                "text": "优化控制",
                "link": "/feishu__2024_9_16_学习笔记_论文阅读记录_优化控制",
                "items": [
                  {
                    "text": "随机博弈分散式表q-learning的样本复杂度",
                    "link": "/feishu__2024_9_16_学习笔记_论文阅读记录_优化控制_随机博弈分散式表q-learning的样本复杂度"
                  }
                ],
                "collapsed": false
              },
              {
                "text": "AI学习",
                "link": "/feishu__2024_10_28_学习笔记_论文阅读记录_ai学习",
                "items": [
                  {
                    "text": "KAN",
                    "link": "/feishu__2024_10_28_学习笔记_论文阅读记录_ai学习_kan"
                  }
                ],
                "collapsed": false
              }
            ],
            "collapsed": false
          },
          {
            "text": "学习笔记整理",
            "link": "/feishu__2024_10_1_学习笔记_学习笔记整理",
            "items": [
              {
                "text": "名词词典及解释",
                "link": "/feishu__2024_10_5_学习笔记_学习笔记整理_名词词典"
              },
              {
                "text": "量子理论",
                "link": "/feishu__2024_10_7_学习笔记_学习笔记整理_量子理论",
                "items": [
                  {
                    "text": "部分高等量子力学学习笔记",
                    "link": "/feishu__2024_10_7_学习笔记_学习笔记整理_量子理论_部分高等量子力学学习笔记（更新中）"
                  },
                  {
                    "text": "初等量子力学学习笔记",
                    "link": "/feishu__2024_10_28_学习笔记_学习笔记整理_量子理论_初等量子力学学习笔记(更新中）"
                  }
                ],
                "collapsed": false
              },
              {
                "text": "AI学习",
                "link": "/feishu__2024_9_16_学习笔记_学习笔记整理_ai学习",
                "items": [
                  {
                    "text": "强化学习",
                    "link": "/feishu__2024_9_16_学习笔记_学习笔记整理_ai学习_强化学习"
                  },
                  {
                    "text": "序列神经网络",
                    "link": "/feishu__2024_10_29_学习笔记_学习笔记整理_ai学习_序列神经网络"
                  }
                ],
                "collapsed": false
              },
              {
                "text": "量子计算",
                "link": "/feishu__2024_10_20_学习笔记_学习笔记整理_量子计算",
                "items": [
                  {
                    "text": "三比特门分解整理",
                    "link": "/feishu__2024_10_20_学习笔记_学习笔记整理_量子计算_三比特门分解整理"
                  }
                ],
                "collapsed": false
              }
            ],
            "collapsed": false
          }
        ],
        "collapsed": false
      }
    ]
  ,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xuehaimoyu' }
    ],
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
    },
    
  },
  ignoreDeadLinks: true,
  
})

