---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}

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

### `.sty` and `.cls` files

can be added to `~/texmf/tex/latex/`

### zip file from ctan.org

- unpack zip file, navigate to directory
- create `.sty` files by running `$ latex datetime2.ins` from terminal
