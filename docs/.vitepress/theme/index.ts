/* .vitepress/theme/index.ts */
//import Mycomponent from "./components/Mycomponent.vue"
import DefaultTheme from 'vitepress/theme'
import { loadOml2d } from 'oh-my-live2d';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';

export default {
  extends: DefaultTheme,

  //enhanceApp({app}) { 
    // 注册全局组件
  //  app.component('Mycomponent' , Mycomponent)
  //},
  async enhanceApp() {
    if (!import.meta.env.SSR) {
      const { loadOml2d } = await import('oh-my-live2d');
      loadOml2d({
        statusBar: {
          loadingIcon: 'icon-loading'
        },
        menus: {
          items: [
            {
              id: 'Rest',
              icon: 'icon-rest', 
              title: '休息',
              onClick(oml2d): void {
              }
            },
            {
              id: 'SwitchModel',
              icon: 'icon-switch', 
              title: '切换模型',
              onClick(oml2d): void {
                void oml2d.loadNextModel();// actions ...
              }
            },
            {
              id: 'About',
              icon: 'icon-about', 
              title: '关于',
            }
          ]
        },
        dockedPosition: "right",
        mobileDisplay: true,
        models: [
          {
            name: 'shizuku',
            path: "https://model.oml2d.com/shizuku/shizuku.model.json",
            scale: 0.2,
            volume: 0,
            position: [70, 70],
            stageStyle: {
            "height": 370,
            "width": 400
            }
          },
          {
            name: 'senko',
            path: "https://model.oml2d.com/shizuku_pajama/index.json",
            scale: 0.2,
            volume: 0,
            position: [40, 10],
            stageStyle: {
            "height": 350,
            "width": 330
            }
          },
          {
            name: 'cat-black',
            path: "https://model.oml2d.com/cat-black/model.json",
            scale: 0.15,
            position: [0, 20],
            stageStyle: {
            "height": 350
            }
          }
        ],
      });
    }
  },
  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();
    
    // Obtain configuration from: https://giscus.app/
    giscusTalk({
        repo: 'xuehaimoyu/xuehaimoyu.github.io', 
        repoId: 'R_kgDONGxwdw',   
        category: 'General', // default: `General` 
        categoryId: 'DIC_kwDONGxwd84Cj3_5', 
        mapping: 'pathname', // default: `pathname`
        inputPosition: 'top', // default: `top`
        lang: 'zh-CN', // default: ``
        lightTheme: 'light', // default: `light`
        darkTheme: 'transparent_dark', // default: `transparent_dark`
        // ...
    }, {
        frontmatter, route
    },
        // Whether to activate the comment area on all pages.
        // The default is true, which means enabled, this parameter can be ignored;
        // If it is false, it means it is not enabled.
        // You can use `comment: true` preface to enable it separately on the page.
        true
    );
}
}