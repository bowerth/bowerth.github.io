---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}

## Installation

### Fedora 22

- `sudo dnf install emacs emacs-ess`

## Commands

- [github: mastering emacs in one year guide](https://github.com/redguardtoo/mastering-emacs-in-one-year-guide)

check emacs version
:   `M-x emacs-version`

### Major Modes

#### `Shell` Mode

execute region
:   `C-M-x`

execute script
:   `C-c C-x`

### Mail

#### SMTP account configuration

edit user mail address
:   `(custom-set-variables '(user-mail-address "bo.werth@gmail.com") )`

#### Edit modes

- [github: gmail-mode](https://github.com/Malabarba/gmail-mode)
- [github: ham-mode](https://github.com/Malabarba/ham-mode)
- [gmail-mode browser integration](http://www.widecodes.com/CSVjeqVeVq/composing-gmail-messages-in-text-editor-complete-with-gmail-links.html)
- [chrome extension: Edit with Emacs](https://chrome.google.com/webstore/detail/edit-with-emacs/ljobjlafonikaiipfkggjbhkghgicgoh?hl=en)

edit Gmail message with Emacs (after installing Edit with Emacs and editing the Chrome shortcuts)
:   `Ctrl + Shift + E`

when done editing, export back to Gmail
:   `C-x #`

#### Secure authentication

- [emacswiki: safe email authentication](http://www.emacswiki.org/emacs/GnusEncryptedAuthInfo)
- [emacswiki: EasyPG](http://www.emacswiki.org/emacs/EasyPG)

### Buffer

convert buffer format `DOS` / `UNIX`
:   `C-x RET f` or `M-x set-buffer-file-coding-system`  
    format examples: `dos`, `unix`, `utf-8-unix`

### Dired

new folder in `dired` mode
:   `+`

### File encoding

save file with new encoding, e.g. `utf-8`
:   `C-x C-m c <encoding> RET C-x C-w RET`

file conversion with iconv
:   R command `iconvlist()` provides an alphabetical list of the supported encodings

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

### Java

- [Java Development Environment for Emacs (JDEE)](http://emacswiki.org/emacs/JavaDevelopmentEnvironment)
- [Installation](http://jdee.sourceforge.net/install.html#install-binary)
- [JDEE user guide](http://jdee.sourceforge.net/jdedoc/html/jde-ug/jde-ug.html)
