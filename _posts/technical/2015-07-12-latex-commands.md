---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}

## full page images

use mogrify from imagemagick

~~~
mogrify -format pdf input.jpg
~~~


## Online LaTex

- [sharelatex.com: templates](https://www.sharelatex.com/templates/)


## Documentation

links to all HTML and PDF files for packages and guides contained in TeX Live
:   `/usr/local/texlive/2015/doc.html`

### Install

- [tug.org/texlive Quickinstall](https://www.tug.org/texlive/quickinstall.html)
- download `install-tl-unx.tar.gz` from [tug.org/texlive](https://www.tug.org/texlive/acquire-netinstall.html)
- unpack contents
- cd to directory `install-tl-[yyyymmdd]`
- run `sudo install-tl` (make executable: `chmod +x install-tl-[yyyymmdd]`)

### Tables

- [LaTex Table Generator](http://www.tablesgenerator.com/latex_tables)

### Babel

install German support for Babel
:   `sudo dnf install exlive-babel-german`


## `.sty` and `.cls` files

- can be added to `~/texmf/tex/latex/`

search for file
:   `kpsewhich file.sty` or `kpsewhich file.cls`

### install packages

- [multirow](https://www.ctan.org/tex-archive/macros/latex/contrib/multirow) package

- download package as [zip](http://mirrors.ctan.org/macros/latex/contrib/multirow.zip)
- extract to `/multirow` and open terminal
- `latex multirow.ins` will generate `multirow.sty`
- move `/multirow` to `/texmf/tex/latex`
- open terminal in another location
- test if can be found `kpsewhich multirow.sty` should return `/texmf/tex/latex/multirow/multirow.sty`

### Windows

- `C:\Users\[username]\AppData\Roaming\MiKTeX\2.9`

### zip file from ctan.org

- unpack zip file, navigate to directory
- create `.sty` files by running `$ latex datetime2.ins` from terminal
