---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}

## Fedora VM

Firefox
:   Network settings: no proxy  
    

## Install el-get

```
;; So the idea is that you copy/paste this code into your *scratch* buffer,
;; hit C-j, and you have a working el-get.
(url-retrieve
 "https://raw.githubusercontent.com/dimitri/el-get/master/el-get-install.el"
 (lambda (s)
   (goto-char (point-max))
   (eval-print-last-sexp)))
```

Evaluate using `M-x eval-print-last-exp`

https://github.com/dimitri/el-get/

## Install js-comint

`el-get-install js-comint`

https://coderwall.com/p/qvqhkg/livecode-node-js-apps