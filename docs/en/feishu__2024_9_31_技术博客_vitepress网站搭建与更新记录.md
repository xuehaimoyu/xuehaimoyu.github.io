---
layout: null
title: Vitepress website building and update history
hide: false
hide_child: false
keywords:
  - Vitepress
  - Website building
categories:
  - skills
create_time: 1730368769
---

# Vitepress Blog Building Record

## 2024.11.06

It's being migrated one after another, but it's always a bit of a magical bug, so fix it slowly.

## 2024.11.01

Implemented LIVE2D and comment functions.

The Live2D architecture relies on: https://github.com/oh-my-live2d/oh-my-live2d

The comment system refers to: https://chunge16.github.io/vitepress-blogs/blog/posts/2023/vitepress-plugin-comment-with-giscus

Dependencies: GitHub's Discusssion and Giscus projects.

## 2024.10.30 

Finally, the basic framework was successfully built. It's not easy to use Feishu as the foundation of your blog.

At present, it is mainly dependent on https://github.com/ftyszyx/feishu-vitepress

Export the article, then update the sidebar and translate it into English, translate between Chinese and English, copy the exported assets to the current folder, and update the sidebar in config.mts (ps: a bit stupid, but at least it works)

The construction of the main framework mainly depends on the https://vitepress.yiov.top/

Current implementations include Mathjax rendering, Feishu-like subpage layouts, and automatic deployment every time you push to GitHub.

Follow-up features to be realized:

1. Footprint map.

2. Comment system.

3、live2d。4. Better looking page layout.

At present, the overall blog is still being migrated.