---
layout: null
title: Vitepress网站搭建与更新记录
hide: false
hide_child: false
keywords:
  - Vitepress
  - 网站搭建
categories:
  - skills
create_time: 1730368769
---


# Vitepress博客搭建记录

## 2024.11.13

令人疑惑的bug，貌似有2篇文章翻译成英文之后部分编码错误，只能先拿英文顶着。

## 2024.11.06

陆续迁移中，但总是有点神奇的bug，慢慢修吧。

## 2024.11.01

实现了live2d以及评论功能。

live2d架构依赖于：https://github.com/oh-my-live2d/oh-my-live2d

评论系统则参考：https://chunge16.github.io/vitepress-blogs/blog/posts/2023/vitepress-plugin-comment-with-giscus

依赖于：github的discusssion以及giscus项目。

## 2024.10.30 

终于成功搭建好了基础的框架。想把飞书作为博客基础真是非常的不容易。

目前主要还是依赖https://github.com/ftyszyx/feishu-vitepress

导出文章，然后更新sidebar以及翻译成英文，实现中英互相翻译，复制导出的assets到当前文件夹，并更新config.mts中的sidebar（ps：有点蠢，但至少能用了）

其中主要框架的搭建主要依赖于https://vitepress.yiov.top/

目前的实现功能包括实现mathjax渲染，类似飞书的子页面布局，以及每次push到github上后自动部署。

后续希望实现的功能:

1、足迹地图。

2、评论系统。

3、live2d。

4、更好看的页面布局。

目前整体博客仍在迁移中。

