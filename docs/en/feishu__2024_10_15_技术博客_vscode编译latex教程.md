---
layout: null
title: VScode compilation latex tutorial
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

# VScode compilation latex tutorial

## Introduction

Overleaf is a great platform for writing LaTeX, but due to the limited compilation time, it is difficult to complete large articles in a free time, so it is important to compile LaTex locally.

## STEP1

Download vscode and texlive

Note that TexLive takes a long time to install, and there are many installation tutorials on the Internet.

## STEP2

Install the latex plug-in Latexworkshop on vscode

(extensions there)

If you have an AI plug-in installed, such as Codegeex or Copilot, you can also autocomplete LaTeX.

## STEP3

Open the settings.json, if you're lazy, copy it directly, otherwise copy the part of Latex into it, pay attention to the format

```json
{
    _//------------------------------LaTeX Configuration ----------------------------------_
       _// Set whether it compiles automatically_
       "latex-workshop.latex.autoBuild.run":"never",
       _//Right-click menu_
       "latex-workshop.showContextMenu":true,
       _//Autocomplete commands and environments from the packages used_
       "latex-workshop.intellisense.package.enabled": true,
       _//Set the setting of whether bubbles pop up when compilation errors_"latex-workshop.message.error.show": false,
       "latex-workshop.message.warning.show": false,
       _// Compiler Tools and Commands_
       "latex-workshop.latex.tools": [
           {
               "name": "xelatex",
               "command": "xelatex",
               "args": [
                   "-synctex=1",
                   "-interaction=nonstopmode",
                   "-file-line-error",
                   "-shell-escape", _//new option_
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
                   "-shell-escape", _//new option_
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
              "-shell-escape", _//new option_
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
                "-interaction=nonstopmode","-file-line-error",
                "-shell-escape", _// This command line is generally not in the Latex Workshop settings on the Internet, so the direct recipe will report an error_
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
       _// Used to configure the compilation chain_
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
                   "xelatex","bibtex",
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
       _//File cleanup. This property must be an array of strings_
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
       _// Set to onFaild to clear secondary files after build failures_
       "latex-workshop.latex.autoClean.run": "onFailed",
       _// Compile the combination using the last recipe_
    "latex-workshop.latex.recipe.default": "lastUsed",
       _//Preview the compiled PDF file with SumatraPDF_
       _// Set up VScode to view the generated pdf file internally_
       "latex-workshop.view.pdf.viewer": "tab",
       _// PDF viewer for [View on PDF] link on \ref_
    "latex-workshop.view.pdf.ref.viewer": "auto",
    "editor.wordWrap": "on",
    "editor.renderControlCharacters": false,
    "Codegeex.Comment.LanguagePreference": "Chinese",
    "Codegeex.Explanation.LanguagePreference": "Chinese","Codegeex.SidebarUI.LanguagePreference": "Chinese",
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

After that, let's have fun writing latex!