---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}

## External IDE Integration

### JetBrains

- [confluence.jetbrains.com: Using Emacs as an external editor](https://confluence.jetbrains.com/display/PYH/Using+Emacs+as+an+external+editor)

## Debug

The GUD (Grand Unified Debugger) library provides an Emacs interface to a wide variety of symbolic debuggers. It can run the GNU Debugger (GDB), as well as DBX, SDB, XDB, Perl’s debugging mode, the Python debugger PDB, and the Java Debugger JDB.

- [gnu.org: Running Debuggers Under Emacs](https://www.gnu.org/software/emacs/manual/html_node/emacs/Debuggers.html)

`M-x gdb`
:   Run GDB as a subprocess, and interact with it via an IDE-like Emacs interface

`M-x jdb`
:   Run the Java debugger

## MELPA

- [How to use Emacs package manager](http://tuhdo.github.io/emacs-tutor3.html)

## Major Modes

list keybindings for a certain mode
:   `C-h m` or `M-x describe-mode` (minor modes: `M-x describe-minor-mode`)

### Scala

#### scala-mode2

- [github: hvesalai: scala-mode2](https://github.com/hvesalai/scala-mode2)

install `scala-mode2`
:   `M-x package-install RET scala-mode2`

#### sbt-mode

An emacs mode for interacting with sbt, scala console (aka REPL) and sbt projects.

- [github: hvesalai: sbt-mode](https://github.com/hvesalai/sbt-mode)

install `sbt-mode`
:   `M-x package-install RET sbt-mode`

start sbt
:   `M-x sbt-start`

sbt command history
:   `M-x comint-previous-input` or `M-p`

jump back to the last line
:   `M->`

start scala console from within sbt
:   `console`

send region from other buffer
:   `M-x sbt-send-region`

### Buffer Mode

convert buffer format `DOS` / `UNIX`
:   `C-x RET f` or `M-x set-buffer-file-coding-system`  
    format examples: `dos`, `unix`, `utf-8-unix`

### Dired Mode

- [gnu.org: Dired Manual](http://www.gnu.org/software/emacs/manual/html_node/emacs/Dired.html)
- [ergoemacs.org: Dired Tutorial](http://ergoemacs.org/emacs/file_management.html)

new folder in `dired` mode
:   `+`

flag file for deletion (dired-flag-file-deletion).
:   `d`

remove the deletion flag (dired-unmark).
:   `u`

move point to previous line and remove the deletion flag on that line (dired-unmark-backward).
:   `DEL`

Delete files flagged for deletion (dired-do-flagged-delete).
:   `x`

### File encoding

save file with new encoding, e.g. `utf-8`
:   `C-x C-m c <encoding> RET C-x C-w RET`

file conversion with iconv
:   R command `iconvlist()` provides an alphabetical list of the supported encodings

### ESS Mode

extend column width of R-process [link stat.ethz.ch](https://stat.ethz.ch/pipermail/ess-help/2009-July/005455.html)
:   `ess-execute-screen-options` or `C-c w`

## `.emacs` configuration

### Skewer Mode

- [github: skeeto: skewer-mode](https://github.com/skeeto/skewer-mode)
- [nullprogram.com: Skewer -- Emacs Live Browser Interaction](http://nullprogram.com/blog/2012/10/31)
- [emacs.stackexchange.com: how-to-use-skewer-mode](http://emacs.stackexchange.com/questions/2376/how-to-use-skewer-mode)
- [github: skeeto: emacs-web-server](https://github.com/skeeto/emacs-web-server)

#### Usage

- open javascript file
- `M-x js2-mode`
- `M-x skewer-mode`
- `M-x run-skewer`
- open browser at `http://127.0.0.1:8080/skewer/demo`
- select blocks of JS buffer and evaluate with `C-x C-e`

#### Passing external files using `simple-httpd`

- [libraries.io: emacs: simple-httpd](https://libraries.io/emacs/simple-httpd/1.4.2)

### JavaScript Mode

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

### Java Mode

- [Java Development Environment for Emacs (JDEE)](http://emacswiki.org/emacs/JavaDevelopmentEnvironment)
- [Installation](http://jdee.sourceforge.net/install.html#install-binary)
- [JDEE user guide](http://jdee.sourceforge.net/jdedoc/html/jde-ug/jde-ug.html)

### Ruby REPL

- [github: nonsqeuitur: inf-ruby](https://github.com/nonsequitur/inf-ruby)

#### Usage

start inf-ruby
:   `M-x inf-ruby`

set minor mode for buffer
:   `M-x inf-ruby-minor-mode`

send region from buffer to inf-ruby
:   `C-c C-r`

#### inf-ruby minor mode keybindings

`M-x describe-function [RET] inf-ruby-minor-mode [RET]`

| key     | binding                    |
| ------- | -------------------------- |
| C-c     | Prefix Command             |
| C-x     | Prefix Command             |
| ESC     | Prefix Command             |
|         |                            |
| C-c C-b | ruby-send-block            |
| C-c C-l | ruby-load-file             |
| C-c C-r | ruby-send-region           |
| C-c C-s | inf-ruby                   |
| C-c C-x | ruby-send-definition       |
| C-c C-z | ruby-switch-to-inf         |
| C-c ESC | Prefix Command             |
|         |                            |
| C-x C-e | ruby-send-last-sexp        |
|         |                            |
| C-M-x   | ruby-send-definition       |
|         |                            |
| C-c M-b | ruby-send-block-and-go     |
| C-c M-r | ruby-send-region-and-go    |
| C-c M-x | ruby-send-definition-and-go|

### Org Mode

- [orgmode.org](http://orgmode.org/org.html)

use css stylesheet
:   `#+HTML_HEAD: <link rel="stylesheet" type="text/css" href="./static/style.css" />`

#### HTML export commands

org-html-export-to-html
:   `C-c C-e h h`

Export as an HTML file. For an Org file myfile.org, the HTML file will be myfile.html. The file will be overwritten without warning. C-c C-e h o Export as an HTML file and immediately open it with a browser.

org-html-export-as-html
:    `C-c C-e h H`

Export to a temporary buffer. Do not create a file.

#### ditaa

- [orgmode.org: ditaa](http://orgmode.org/worg/org-contrib/babel/languages/ob-doc-ditaa.html)

Activate evaluation of `ditaa` source code blocks by adding ditaa to org-babel-load-languages.

```lisp
(org-babel-do-load-languages
 'org-babel-load-languages
 '((ditaa . t))) ; this line activates ditaa
```

#### Links

- [orgmode manual: External Links](orgmode.org/manual/External-links.html)

### Android Mode

- [github: remvee: android-mode](https://github.com/remvee/android-mode)
- [Tips on Android Development Using Emacs](http://gregorygrubbs.com/development/tips-on-android-development-using-emacs/)

#### modify `~/.emacs`

set path to Android SDK
:   `(setq android-mode-sdk-dir "~/android-sdk-linux/")`

specify default AVD (after creation)
:   `(setq android-mode-avd "my_android6.0")`

| Key binding | Function               |
| ----------- | ---------------------- |
| C-c C-c c   | android-ant-compile    |
| C-c C-c d   | android-start-ddms     |
| C-c C-c e   | android-start-emulator |
| C-c C-c i   | android-ant-install    |
| C-c C-c l   | android-logcat         |
| C-c C-c r   | android-ant-reinstall  |
| C-c C-c u   | android-ant-uninstall  |

#### example "android-project" 

activate `android-mode`
:   `M-x android-mode`

open project `build.xml`
:   `C-f ~/Dropbox/GitHub/android-project/build.xml`

`android-ant-debug`
:   creates `/bin/<your_project_name>-debug.apk`

`android-build-install`
:   install to device previously started from external shell using `emulator -avd my_android6.0`

#### C/C++

- [C/C++ Development Environment for Emacs](http://tuhdo.github.io/c-ide.html)

#### CC Mode

- [emacswiki.org: CC Mode](http://www.emacswiki.org/emacs/CcMode)

CC Mode is a powerful package that provides modes for editing C and C-like (C++, Java, Objective C, CORBA IDL, etc.) files. For much more information (including an InfoMode manual), see the CC Mode homepage: [cc-mode.sourceforge.net](http://cc-mode.sourceforge.net/)

- [sourceforge Download](http://cc-mode.sourceforge.net/release.php)

compile CC Mode from a running Emacs session
:   `M-0 M-x byte-recompile-directory RET /path/to/cc-mode RET`

To test that you have things set up correctly, visit a C file and then type
:   `M-x c-version RET`

- [C Plus Plus Mode](http://www.emacswiki.org/emacs/CPlusPlusMode)

### Rectangles

- [gnu.org: emacs manual: Rectangles](http://www.gnu.org/software/emacs/manual/html_node/emacs/Rectangles.html)

`C-x r k`
Kill the text of the region-rectangle, saving its contents as the “last killed rectangle” (kill-rectangle).

`C-x r M-w`
Save the text of the region-rectangle as the “last killed rectangle” (copy-rectangle-as-kill).

`C-x r d`
Delete the text of the region-rectangle (delete-rectangle).

`C-x r y`
Yank the last killed rectangle with its upper left corner at point (yank-rectangle).

`C-x r o`
Insert blank space to fill the space of the region-rectangle (open-rectangle). This pushes the previous contents of the region-rectangle to the right.

`C-x r N`
Insert line numbers along the left edge of the region-rectangle (rectangle-number-lines). This pushes the previous contents of the region-rectangle to the right.

`C-x r c`
Clear the region-rectangle by replacing all of its contents with spaces (clear-rectangle).

`M-x delete-whitespace-rectangle`
Delete whitespace in each of the lines on the specified rectangle, starting from the left edge column of the rectangle.

`C-x r t string RET`
Replace rectangle contents with string on each line (string-rectangle).

`M-x string-insert-rectangle RET string RET`
Insert string on each line of the rectangle.

`C-x SPC`
Toggle Rectangle Mark mode (rectangle-mark-mode). When this mode is active, the region-rectangle is highlighted and can be shrunk/grown, and the standard kill and yank commands operate on it.

### CSV Mode `csv-mode.el`

- [emacswiki.org: Csv Mode](http://emacswiki.org/emacs/CsvMode)
- [elpa.gnu.org: csv-mode](https://elpa.gnu.org/packages/csv-mode.html)

In CSV mode, the following commands are available:

sort lexicographically and numerically on a specified field or column
:   `C-c C-s ('csv-sort-fields')` and `C-c C-n ('csv-sort-numeric-fields')`

reverse the order
:   `C-c C-r ('csv-reverse-region')`

kill and yank fields or columns
:   `C-c C-k ('csv-kill-fields')` and `C-c C-y ('csv-yank-fields')`

aligns fields into columns
:   `C-c C-a ('csv-align-fields')`

unalign previously aligned fields
:   `C-c C-u ('csv-unalign-fields')`

interchange rows and columns
:   `C-c C-t ('csv-transpose')`

### `Shell` Mode

execute region
:   `C-M-x`

execute script
:   `C-c C-x`

toggle auto-fill-mode
:   `M-x auto-fill-mode`

### W3M web browser

- [w3 Manual](http://w3m.sourceforge.net/MANUAL)
- [Beat of the Geek: The Awesome of Web Browsing With Emacs](http://beatofthegeek.com/2014/02/the-awesome-of-web-browsing-with-emacs.html)
- [Beat of the Geek: My Setup for Using Emacs as Web Browser](http://beatofthegeek.com/2014/02/my-setup-for-using-emacs-as-web-browser.html)

### Mail

#### Wanderlust

- [wanderlust manual](http://www.gohome.org/wl/doc/wl_toc.html)
- [github: wanderlust: wanderlust install](https://github.com/wanderlust/wanderlust/blob/master/INSTALL)

Waderlust requires the following three configuration files:

- `~/.wl` Wanderlust Configuration (loaded at startup)
- `~/.folders` Folder Book
- `~/.addresses` Address Book (optional)

Each sample file (dot.addresses, dot.folders, dot.wl) exists on `samples/en/` directory. Please refer to them. To get full information, please read Info file.

##### Folder Definition

###### IMAP Folder

A folder to access e-mails via IMAP4rev1 protocol (RFC 2060).

Format
:   ``%' mailbox [`:' username [`/' authenticate-type]][`@' hostname][`:' port][`!']`


- [wanderlust.github.io: wl-docs](http://wanderlust.github.io/wl-docs/wl.html#Folder-Definition)

format for `~/.folders`

```lisp
#
# Lines begin with ‘#’ are comment.
# Empty lines are ignored
#
# folder name  "folder nickname"
# (nicknames are not necessary)
#
%inbox  "Inbox"
+trash  "Trash"
+draft  "Drafts"
%#mh/Backup@my.imap.example.com "Sent"
# Folder Group
Emacsen{
    %#mh/spool/wl            "Wanderlust ML"
    %#mh/spool/elips         "ELIPS ML"
    %#mh/spool/apel-ja       "APEL Japanese ML"
    %#mh/spool/xemacs-beta   "XEmacs beta"
    -fj.news.reader.gnus@other.nntp.example.com "Gnus Net news"
    *-fj.editor.xemacs,-fj.editor.mule,-fj.editor.emacs "fj's Emacsen"
}
#
# If folder name ends with ‘/’, that means an ‘access group’,
# all subfolders automatically included in one folder group.
#
%#mh/expire@localhost /
# All MH folders are included in one folder group.
+ /
```

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

### Processing

installation
:   `M-x package-install RET processing-mode`

- [github: ptrv: processing2-emacs](https://github.com/ptrv/processing2-emacs)

## Emacs installation

### Fedora 22

- `sudo dnf install emacs emacs-ess`

## Commands

- [github: mastering emacs in one year guide](https://github.com/redguardtoo/mastering-emacs-in-one-year-guide)

check emacs version
:   `M-x emacs-version`

highlight phrase (`hi-black-hb` works well)
:   `M-x highlight-phrase`
