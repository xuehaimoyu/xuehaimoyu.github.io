---
layout: null
title: VScode编译latex教程
hide: false
hide_child: false
keywords:
  - learning_note
  - skills
  - vscode
  - latex
categories:
  - skills
create_time: 1731638470
---


# VScode编译latex教程

## 前言

overleaf是一个很棒的latex编写平台，但由于编译时间受限，对于大篇幅的文章很难在免费时间内完成，因此，在i本地进行latex编译是十分重要的。

## STEP1

下载vscode和texlive

注意texlive安装时间较长，安装教程网上较多。

## STEP2

在vscode安装latex插件：Latexworkshop

（extensions那里）

如果有安装ai插件，如codegeex或copilot等，同样能对latex进行自动补全。

## STEP3

打开settings.json ,懒的话直接抄吧，不然把latex的部分复制进去就行，注意格式

```json
{
    _//------------------------------LaTeX 配置----------------------------------_
       _// 设置是否自动编译_
       "latex-workshop.latex.autoBuild.run":"never",
       _//右键菜单_
       "latex-workshop.showContextMenu":true,
       _//从使用的包中自动补全命令和环境_
       "latex-workshop.intellisense.package.enabled": true,
       _//编译出错时设置是否弹出气泡设置_
       "latex-workshop.message.error.show": false,
       "latex-workshop.message.warning.show": false,
       _// 编译工具和命令_
       "latex-workshop.latex.tools": [
           {
               "name": "xelatex",
               "command": "xelatex",
               "args": [
                   "-synctex=1",
                   "-interaction=nonstopmode",
                   "-file-line-error",
                   "-shell-escape",_//新加入的选项_
                   "%DOCFILE%"
               ]
           },
           {
               "name": "pdflatex",
               "command": "pdflatex",
               "args": [
                   "-synctex=1",
                   "-interaction=nonstopmode",
                   "-file-line-error",
                   "-shell-escape",_//新加入的选项_
                   "%DOCFILE%"
               ]
           },
           

           {
            "name": "latexmk",
            "command": "latexmk",
            "args": [
              "-synctex=1",
              "-interaction=nonstopmode",
              "-file-line-error",
              "-shell-escape",_//新加入的选项_
              "-pdf",
              "-outdir=%OUTDIR%",
              "%DOC%"
            ],
            "env": {}
          },

          {
            "name": "lualatex",
            "command": "lualatex",
            "args": [
                "-synctex=1",
                "-interaction=nonstopmode",
                
                "-file-line-error",
                "-shell-escape",_//这个命令行在网上的Latex Workshop设置里一般没有，所以直接recipe会报错_
                "%DOCFILE%"
            ]
            },

           {
               "name": "bibtex",
               "command": "bibtex",
               "args": [
                   "%DOCFILE%"
               ]
           }
       ],
       _// 用于配置编译链_
       "latex-workshop.latex.recipes": [
        {
            "name": "PDFLaTeX",
            "tools": [
                "pdflatex"
            ]
        },
        {
            "name": "LuaLaTeX",
            "tools": [
                "lualatex"
            ]
        },
           {
               "name": "XeLaTeX",
               "tools": [
                   "xelatex"
               ]
           },
           {
               "name": "BibTeX",
               "tools": [
                   "bibtex"
               ]
           },
           {
               "name": "LaTeXmk",
               "tools": [
                   "latexmk"
               ]
           },
           {
               "name": "xelatex -> bibtex -> xelatex*2",
               "tools": [
                   "xelatex",
                   "bibtex",
                   "xelatex",
                   "xelatex"
               ]
           },
           {
               "name": "pdflatex -> bibtex -> pdflatex*2",
               "tools": [
                   "pdflatex",
                   "bibtex",
                   "pdflatex",
                   "pdflatex"
               ]
           }
       ],
       _//文件清理。此属性必须是字符串数组_
       "latex-workshop.latex.clean.fileTypes": [
           "*.aux",
           "*.bbl",
           "*.blg",
           "*.idx",
           "*.ind",
           "*.lof",
           "*.lot",
           "*.out",
           "*.toc",
           "*.acn",
           "*.acr",
           "*.alg",
           "*.glg",
           "*.glo",
           "*.gls",
           "*.ist",
           "*.fls",
           "*.log",
           "*.fdb_latexmk"
       ],
       _//设置为onFaild 在构建失败后清除辅助文件_
       "latex-workshop.latex.autoClean.run": "onFailed",
       _// 使用上次的recipe编译组合_
    "latex-workshop.latex.recipe.default": "lastUsed",
       _//使用 SumatraPDF 预览编译好的PDF文件_
       _// 设置VScode内部查看生成的pdf文件_
       "latex-workshop.view.pdf.viewer": "tab",
       _// PDF查看器用于在\ref上的[View on PDF]链接_
    "latex-workshop.view.pdf.ref.viewer": "auto",
    "editor.wordWrap": "on",
    "editor.renderControlCharacters": false,
    "Codegeex.Comment.LanguagePreference": "中文",
    "Codegeex.Explanation.LanguagePreference": "中文",
    "Codegeex.SidebarUI.LanguagePreference": "中文",
    "workbench.colorTheme": "Quiet Light",
    "Codegeex.Privacy": false,
    "editor.codeActionsOnSave": {

    },
    "Codegeex.License": "",
    "editor.unicodeHighlight.nonBasicASCII": false,
    "testing.coverageBarThresholds": {
        
        "red": 0,
        "yellow": 60,
        "green": 90
    }
 }
```

之后就愉快的写latex吧！

