---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}

## Commands

### General

convert buffer format `DOS` / `UNIX`
:   `C-x RET f` or `M-x set-buffer-file-coding-system`  
    format examples: `dos`, `unix`, `utf-8-unix`

file conversion with iconv
:   R command `iconvlist()` provides an alphabetical list of the supported encodings

new folder in `dired` mode
:   `+`

### ESS

extend column width of R-process [link stat.ethz.ch](https://stat.ethz.ch/pipermail/ess-help/2009-July/005455.html)
:   `ess-execute-screen-options` or `C-c w`

## `.emacs` configuration

### JavaScript

install el-get
:   copy/paste this code into your `scratch` buffer and evaluate using `M-x eval-print-last-exp`

```
(url-retrieve  
 "https://raw.githubusercontent.com/dimitri/el-get/master/el-get-install.el"  
 (lambda (s)  
   (goto-char (point-max))  
   (eval-print-last-sexp)))
```

Source: [github.com:dimitri/el-get.git](https://github.com/dimitri/el-get/)

install js-comint
:   `el-get-install js-comint`

Source: [livecode nodejs apps on coderwall](https://coderwall.com/p/qvqhkg/livecode-node-js-apps)
