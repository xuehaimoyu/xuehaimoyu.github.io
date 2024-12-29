---
create_time: 1733910455
title: 一个简单的中文latex模板
categories:
  - 技术博客
---


```text
layout:   #指明用home layout（非必须。vitepress属性，如果是首页就用home.非首页不用填）
title: 一个简单的中文latex模板   #标题
hide: false  #是否不导出当前页，非必须
hide_child: false #是否导出子节点，非必须 
keywords:  #用于搜索和网站seo，非必须 
  - learning_note
  - skills
  - vscode
  - latex
categories:
  - skills
```

一个简单的中文latex模板，摘录自知乎：https://zhuanlan.zhihu.com/p/496462136

总结如下，可自行拷贝并保存为tex，记得自己建立一个note.bib

```text
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
\documentclass[12pt,a4paper]{ **article**}_% 文档格式_
\usepackage{ **ctex,hyperref**}_% 输出汉字_
\usepackage{ **times**}_% 英文使用Times New Roman_
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
 **\title**{ **\fontsize**{18pt}{27pt} **\selectfont**_% 小四字号，1.5倍行距_
    { **\heiti**_% 黑体_
        一种 **\LaTeX** 模板}}_% 题目_
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
 **\author**{ **\fontsize**{12pt}{18pt} **\selectfont**_% 小四字号，1.5倍行距_
    { **\fangsong**_% 仿宋_
        Evildoer} **\thanks**{向寝室大佬膜膜膜}\\_% 标题栏脚注_
     **\fontsize**{10.5pt}{15.75pt} **\selectfont**_% 五号字号，1.5倍行距_
    { **\fangsong**_% 仿宋_
        (末流985~~~雾里咳血学院)}}_% 作者单位，“~”表示空格_
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
 **\date**{}_% 日期（这里避免生成日期）_
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
\usepackage{ **amsmath,amsfonts,amssymb**}_% 为公式输入创造条件的宏包_
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
\usepackage{ **graphicx**}_% 图片插入宏包_
\usepackage{ **subfigure**}_% 并排子图_
\usepackage{ **float**}_% 浮动环境，用于调整图片位置_
\usepackage[export]{ **adjustbox**}_% 防止过宽的图片_
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
\usepackage{ **bibentry**}
\usepackage[numbers]{ **natbib**}
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
\usepackage{ **abstract**}_% 两栏文档，一栏摘要及关键字宏包_
\renewcommand{ **\abstracttextfont**}{ **\fangsong**}_% 摘要内容字体为仿宋_
\renewcommand{ **\abstractname**}{ **\textbf**{ **摘\quad 要**}}_% 更改摘要二字的样式_
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
\usepackage{ **xcolor**}_% 字体颜色宏包_
\newcommand{ **\red**}[1]{ **\textcolor**[rgb]{1.00,0.00,0.00}{#1}}
\newcommand{ **\blue**}[1]{ **\textcolor**[rgb]{0.00,0.00,1.00}{#1}}
\newcommand{ **\green**}[1]{ **\textcolor**[rgb]{0.00,1.00,0.00}{#1}}
\newcommand{ **\darkblue**}[1]
{ **\textcolor**[rgb]{0.00,0.00,0.50}{#1}}
\newcommand{ **\darkgreen**}[1]
{ **\textcolor**[rgb]{0.00,0.37,0.00}{#1}}
\newcommand{ **\darkred**}[1]{ **\textcolor**[rgb]{0.60,0.00,0.00}{#1}}
\newcommand{ **\brown**}[1]{ **\textcolor**[rgb]{0.50,0.30,0.00}{#1}}
\newcommand{ **\purple**}[1]{ **\textcolor**[rgb]{0.50,0.00,0.50}{#1}}_% 为使用方便而编辑的新指令_
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
\usepackage{ **url**}_% 超链接_
\usepackage{ **bm**}_% 加粗部分公式_
\usepackage{ **multirow**}
\usepackage{ **booktabs**}
\usepackage{ **epstopdf**}
\usepackage{ **epsfig**}
\usepackage{ **longtable**}_% 长表格_
\usepackage{ **supertabular**}_% 跨页表格_
\usepackage{ **algorithm**}
\usepackage{ **algorithmic**}
\usepackage{ **changepage**}_% 换页_
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
\usepackage{ **enumerate**}_% 短编号_
\usepackage{ **caption**}_% 设置标题_
 **\captionsetup**[figure]{name= **\fontsize**{10pt}{15pt} **\selectfont** Figure}_% 设置图片编号头_
 **\captionsetup**[table]{name= **\fontsize**{10pt}{15pt} **\selectfont** Table}_% 设置表格编号头_
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
\usepackage{ **indentfirst**}_% 中文首行缩进_
\usepackage[left=2.50cm,right=2.50cm,top=2.80cm,bottom=2.50cm]{ **geometry**}_% 页边距设置_
\renewcommand{ **\baselinestretch**}{1.5}_% 定义行间距（1.5）_
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
\usepackage{ **fancyhdr**} _%设置全文页眉、页脚的格式_
 **\pagestyle**{fancy}
 **\hypersetup**{colorlinks=true,linkcolor=black}_% 去除引用红框，改变颜色_

_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
 **\begin**{document}_% 以下为正文内容_
     **\maketitle**_% 产生标题，没有它无法显示标题_
    _%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
     **\lhead**{}_% 页眉左边设为空_
     **\chead**{}_% 页眉中间设为空_
     **\rhead**{}_% 页眉右边设为空_
     **\lfoot**{}_% 页脚左边设为空_
     **\cfoot**{ **\thepage**}_% 页脚中间显示页码_
     **\rfoot**{}_% 页脚右边设为空_
    _%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
     **\begin**{abstract}
         **\fangsong** 为了以后能摆大烂而创造了一个模板，为了展现转行效果而开始啊对对对对对对对对对对对对对对对
     **\end**{abstract}
    
     **\begin**{adjustwidth}{1.06cm}{1.06cm}
         **\fontsize**{10.5pt}{15.75pt} **\selectfont**{ **\heiti**{关键词：} **\fangsong**{摆大烂、啊对对对}}\\
     **\end**{adjustwidth}
    
     **\begin**{center}_% 居中处理_
        { **\textbf**{ **Abstract**}}_% 英文摘要_
     **\end**{center}
     **\begin**{adjustwidth}{1.06cm}{1.06cm}_% 英文摘要内容_
         **\hspace**{1.5em}Attention！If you input "dif{}ferent", the computer will output "different", but if you input "dif\{\}ferent", the computer will output "dif{}ferent"
     **\end**{adjustwidth}
     **\newpage**_% 从新的一页继续_
     **\section**{ **摆烂一阶段**}
    
     **\section**{ **摆烂二阶段**}
     **\subsection**{ **摆的理论基础**}
         **\subsubsection**{ **Evildoer的摆理论**}
        大本钟下寄快递，上面开摆下面寄
         **\subsubsection**{ **摆理论的完善与发展**}
     **\subsection**{ **摆的实际应用**}
         **\begin**{enumerate}[1.]_% 列举时编号_
            \item 啊对
             **\begin**{enumerate}[(a)]_% 次级序号_
            \item 太对辣
            \item 好对捏
             **\end**{enumerate}
            \item 啊对对
            \item 啊对对对 **\footnote**{变成光守护麻衣学姐}_% 脚注_
         **\end**{enumerate}
    
     **\section**{ **摆烂三阶段**}
    至臻无双
    
 **\begin**{equation}_% 单个公式_
 **C_0=\frac{2V_1\text{arcth}\left[ \frac{\left( L+R_1-R_2 \right) \left( L-R_1-R_2 \right)}{\left( L+R_1+R_2 \right) \left( L-R_1+R_2 \right)} \right] ^{\frac{1}{2}}}{\text{arch}\left( \frac{L^2-R_{1}^{2}-R_{2}^{2}}{2R_1R_2} \right)}+\frac{2V_2\text{arcth}\left[ \frac{\left( L+R_2-R_1 \right) \left( L-R_1-R_2 \right)}{\left( L+R_1+R_2 \right) \left( L-R_2+R_1 \right)} \right] ^{\frac{1}{2}}}{\text{arch}\left( \frac{L^2-R_{1}^{2}-R_{2}^{2}}{2R_1R_2} \right)}**
 **\end**{equation}

 **\begin**{equation}
 **\centering**
 **\begin{split}**_% 多个公式_
 **A_0&=\frac{V_2-V_1}{\ln \dfrac{R_{2}^{'}}{R_{1}^{'}}}\\**
 **C_0&=\frac{V_1\ln R_{2}^{'}-V_2\ln R_{1}^{'}}{\ln \dfrac{R_{2}^{'}}{R_{1}^{'}}}**
 **\end{split}**
 **\end**{equation}

 **\begin**{align}_% 对齐公式_
 **A_0&=3c+6666\\**_% 注意换行_
 **&=369**
 **\end**{align}

_%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 网站给表 %%%%%%%%%%%%%%%%%%%%%%%%%%%%_
 **\begin**{table}[H]_% 插入表格_
     **\centering**
     **\begin**{tabular}{|l|l|l|l|l|}
         **\hline**
         **$R_1$** &  **$R_2$** &  **$L$** &  **$V_1$** &  **$V_2$** \\  **\hline**
        1mm & 1mm & 100mm & 2V & 0V \\  **\hline**
     **\end**{tabular}
 **\caption**{ **\fontsize**{10pt}{15pt} **\selectfont** 表}
 **\end**{table}
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 三线表_

aaa\cite{ref1}

 **\bibliographystyle**{IEEEtran}
 **\bibliography**{note}
 **\end**{document}_% 结束文档编辑，后面写啥都编译不出来_
```

