---
create_time: 1733910455
title: A simple Chinese latex template
categories:
  - Technical blogs
---

```text
layout: #指明用home layout (not required.) vitepress attribute, if it is the homepage, use home.
Title: A simple Chinese Latex template #标题
hide: false #是否不导出当前页, not required
hide_child: false #是否导出子节点, not required 
keywords: #用于搜索和网站seo, not required 
  - learning_note
  - skills
  - vscode
  - latex
categories:
  - skills
```

A simple Chinese latex template, excerpted from Zhihu: https://zhuanlan.zhihu.com/p/496462136

To summarize as follows, you can copy and save it as tex by yourself, remember to create a note.bib by yourself

```text
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
\documentclass[12pt,a4paper]{ **article**}_% Document format_
\usepackage{ **ctex,hyperref**}_% output kanji_
\usepackage{ **times**}_% English use Times New Roman_
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
 **\title**{ **\fontsize**{18pt}{27pt} **\selectfont**_% small quad size, 1.5 times line spacing_
    { **\heiti**_% bold_
        A **\LaTeX** template}}_% Title_
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
 **\author**{ **\fontsize**{12pt}{18pt} **\selectfont**_% small quad size, 1.5 times line spacing_
    { **\fangsong**_% imitation song_
        Evildoer} **\thanks**{To the dormitory boss membrane membrane}\\_% Title bar footnote_
     **\fontsize**{10.5pt}{15.75pt} **\selectfont**_% 5-point font size, 1.5 times line spacing_
    { **\fangsong**_% imitation song_
        (Late stream 985~~~ Misty Coughing Up Blood Academy)}} _% Author's affiliation, "~" for spaces_
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
 **\date**{}_% date (avoid generating dates here)_
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
\usepackage{ **amsmath,amsfonts,amssymb**}_% macro package that creates conditions for formula input_
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
\usepackage{ **graphicx**}_% image insert macro package_
\usepackage{ **subfigure**}_% side-by-side subgraph_
\usepackage{ **float**}_% floating environment to adjust the position of the image_\usepackage[export]{ **adjustbox**}_% to prevent images that are too wide_
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
\usepackage{ **bibentry**}
\usepackage[numbers]{ **natbib**}
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
\usepackage{ **abstract**}_% two-column document, one column summary and keyword macro package_
\renewcommand{ **\abstracttextfont**}{ **\fangsong**}_% The font of the abstract content is imitation song_
\renewcommand{ **\abstractname**}{ **\textbf**{ **extract\quad to**}}_% Change the style of the abstract_
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
\usepackage{ **xcolor**}_% font color macro package_
\newcommand{ **\red**}[1]{ **\textcolor**[rgb]{1.00,0.00,0.00}{#1}}
\newcommand{ **\blue**}[1]{ **\textcolor**[rgb]{0.00,0.00,1.00}{#1}}
\newcommand{ **\green**}[1]{ **\textcolor**[rgb]{0.00,1.00,0.00}{#1}}
\newcommand{ **\darkblue**}[1]
{ **\textcolor**[rgb]{0.00,0.00,0.50}{#1}}
\newcommand{ **\darkgreen**}[1]
{ **\textcolor**[rgb]{0.00,0.37,0.00}{#1}}
\newcommand{ **\darkred**}[1]{ **\textcolor**[rgb]{0.60,0.00,0.00}{#1}}
\newcommand{ **\brown**}[1]{ **\textcolor**[rgb]{0.50,0.30,0.00}{#1}}
\newcommand{ **\purple**}[1]{ **\textcolor**[rgb]{0.50,0.00,0.50}{#1}}_% New directives edited for ease of use_
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
\usepackage{ **url**}_% hyperlink_
\usepackage{ **bm**}_% bold part formula_
\usepackage{ **multirow**}
\usepackage{ **booktabs**}
\usepackage{ **epstopdf**}
\usepackage{ **epsfig**}
\usepackage{ **longtable**}_% long table_
\usepackage{ **supertabular**}_% spreadsheet_
\usepackage{ **algorithm**}
\usepackage{ **algorithmic**}
\usepackage{ **changepage**}_% page_
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
\usepackage{ **enumerate**}_% short number_
\usepackage{ **caption**}_% set title_
 **\captionsetup**[figure]{name= **\fontsize**{10pt}{15pt} **\selectfont** Figure}_% Set image number header_
 **\captionsetup**[table]{name= **\fontsize**{10pt}{15pt} **\selectfont** Table}_% Set table number header_
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
\usepackage{ **indentfirst**}_% Chinese first line indented_
\usepackage[left=2.50cm,right=2.50cm,top=2.80cm,bottom=2.50cm]{ **geometry**}_% margin setting_
\renewcommand{ **\baselinestretch**}{1.5}_% define line spacing (1.5)_
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
\usepackage{ **fancyhdr**} _%Format the full-text header and footer_
 **\pagestyle**{fancy}
 **\hypersetup**{colorlinks=true,linkcolor=black}_% Remove the red box of the reference, change the color_

_%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
 **\begin**{document}_% The following is the body content_
     **\maketitle**_% produces a title, without which the title cannot be displayed_
    _%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_**\lhead**{}_% Left of header is empty_
     **\chead**{}_% The middle of the header is empty_
     **\rhead**{}_% The right side of the header is empty_
     **\lfoot**{}_% Empty left side of footer_
     **\cfoot**{ **\thepage**}_% Footer middle display page number_
     **\rfoot**{}_% Empty right side of footer_
    _%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_
     **\begin**{abstract}
         **\fangsong** In order to be able to put a big mess in the future, I created a template, in order to show the effect of changing careers, and started to ah, right
     **\end**{abstract}
    
**\begin**{adjustwidth}{1.06cm}{1.06cm}
         **\fontsize**{10.5pt}{15.75pt} **\selectfont**{ **\heiti**{keyword:} **\fangsong**{swing big rotten, ah yes yes}}\\
     **\end**{adjustwidth}
    
**\begin**{center}_% Centering_
        { **\textbf**{ **Abstract**}}_% Abstract_
     **\end**{center}
     **\begin**{adjustwidth}{1.06cm}{1.06cm}_% Abstract content_
         **\hspace**{1.5em}Attention！ If you input "dif{}ferent", the computer will output "different", but if you input "dif\{\}ferent", the computer will output "dif{}ferent"
     **\end**{adjustwidth}
     **\newpage**_% Continue from a new page_
     **\section**{ **Swing a stage**}
    
**\section**{ **Swing two stages**}
     **\subsection**{ **Theoretical basis of pendulum**}
         **\subsubsection**{ **Evildoer's Pendulum Theory**}
        Big Ben sends express delivery under the clock, and the top is open and the bottom is sent
         **\subsubsection**{ **Improvement and development of pendulum theory**}
     **\subsection**{ **Practical application of pendulum**}
         **\begin**{enumerate}[1.] _% Number when enumerated_
            \item Ah, yes
             **\begin**{enumerate}[(a)]_% secondary ordinal_
            \item is too spicy
            \item is a good pinch
             **\end**{enumerate}
            \item Ah, yes, yes
            \item Ah, yes, yes, yes **\footnote**{Become a light guardian Mai senpai}_% Footnote_
         **\end**{enumerate}
    
**\section**{ **Three stages of pendulum**}
    The best of a kind
    
**\begin**{equation}_% single formula_
 **C_0=\frac{2V_1\text{arcth}\left[ \frac{\left( L+R_1-R_2 \right) \left( L-R_1-R_2 \right)}{\left( L+R_1+R_2 \right) \left( L-R_1+R_2 \right)} \right] ^{\frac{1}{2}}}{\text{arch}\ left( \frac{L^2-R_{1}^{2}-R_{2}^{2}}{2R_1R_2} \right)}+\frac{2V_2\text{arcth}\left[ \frac{\left( L+R_2-R_1 \right) \left( L-R_1-R_2 \right)}{\left( L+R_1+R_2 \right) \left( L-R_2+R_1 \right)} \right] ^{\frac{1}{2}}}{\text{arch}\left( \frac{L^2-R_{1}^{2}-R_{2}^{2}}{2R_1R_2} \right)}**
 **\end**{equation}

**\begin**{equation}
 **\centering**
 **\begin{split}**_% multiple formulas_**A_0&=\frac{V_2-V_1}{\ln \dfrac{R_{2}^{'}}{R_{1}^{'}}}\\**
 **C_0&=\frac{V_1\ln R_{2}^{'}-V_2\ln R_{1}^{'}}{\ln \dfrac{R_{2}^{'}}{R_{1}^{'}}}**
 **\end{split}**
 **\end**{equation}

**\begin**{align}_% alignment formula_
 **A_0&=3C+6666\\**_% Pay attention to line breaks_
 **&=369**
 **\end**{align}

_%%%%%%%%%%%%%%%%%%%%%%%%%%%%% website gives table %%%%%%%%%%%%%%%%%%%%%%%%%%%%_
 **\begin**{table}[H]_% Insert table_
     **\centering**
     **\begin**{tabular}{|l|l|l|l|l|}
         **\hline**
         **$R_1$** &  **$R_2$** &  **$L$** &  **$V_1$** &  **$V_2$** \\  **\hline**
        1mm & 1mm & 100mm & 2V & 0V \\  **\hline**
     **\end**{tabular}
 **\caption**{ **\fontsize**{10pt}{15pt} **\selectfont** table}
 **\end**{table}
_%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Three-line table_

aaa\cite{ref1}

**\bibliographystyle**{IEEEtran}
 **\bibliography**{note}
 **\end**{document}_% End document editing, nothing can be compiled later_
```