---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}


## Wrapping text

wrap paragraph to column width
:   `M-q`

unfill paragraph: set fill-columnn to a really large number, and fill
:   `C-u 10000 C-x f M-x fill-individual-paragraphs`


## Themes

- [match with intellij: solarized dark](https://github.com/daraliu/intellij-solarized-dark-emacs)

## Install

- [nicolas-petton.fr: GNU Emacs](http://nicolas-petton.fr/ressources/emacs-website)

install Fedora 22
:   `$ sudo dnf install emacs emacs-ess`

## Keyboard Macros

`F3`
:   Start defining a keyboard macro (kmacro-start-macro-or-insert-counter). 

`F4`
:   If a keyboard macro is being defined, end the definition; otherwise, execute the most recent keyboard macro (kmacro-end-or-call-macro). 

`C-x C-k n`
:   Give a command name (for the duration of the Emacs session) to the most recently defined keyboard macro (kmacro-name-last-macro). 

`C-x C-k b`
:   Bind the most recently defined keyboard macro to a key sequence (for the duration of the session) (kmacro-bind-to-key). 

M-x insert-kbd-macro
:   Insert in the buffer a keyboard macro’s definition, as Lisp code. 

add keybinding
:   `(global-set-key (kbd "C-x C-\\") 'next-line)`

## Java

### JDEE

- [Java Development Environment for Emacs (JDEE)](http://emacswiki.org/emacs/JavaDevelopmentEnvironment)
- [Installation](http://jdee.sourceforge.net/install.html#install-binary)
- [JDEE user guide](http://jdee.sourceforge.net/jdedoc/html/jde-ug/jde-ug.html)

### Malabar mode

- [github: m0smith: malabar-mode](https://github.com/m0smith/malabar-mode)

## [Spacemacs](http://spacemacs.org/)

- [Spacemacs documentation](https://github.com/syl20bnr/spacemacs/blob/master/doc/DOCUMENTATION.org)
- [github: syl20bnr: spacemacs](https://github.com/syl20bnr/spacemacs)

### Update

create new branch from `develop`
:   `git checkout develop`  
    `git branch -b trial_merge`

pull upstream in rebase mode
:   `git pull upstream develop --rebase`

- see if merge conflicts can be solved, then perform same procedure on `develop` branch
- if necessary, install ensime manually (search at [stable.melpa.org](https://stable.melpa.org/#/) and extract to `~/emacs/spacemacs/.emacs.d/elpa`)
- update packages again

### Commands

maximize and center buffer
:   `M-m  W M`

hide modeline
:   `M-m  t m t`

show load path(s)
:   `M-m h d v load-path`

push to load path
:   `(push "/some/path/" load-path)`

remove links to `.emacs` and `.emacs.d`
:   `$ git clone git@github.com:syl20bnr/spacemacs.git ~/Downloads/.emacs.d`
    `$ rm ~/.emacs && rm ~/.emacs.d`  
    `$ ln -s ~/Downloads/.emacs.d ~/`

restore configuration
:   `$ ln -s ~/Dropbox/Programming/emacs/.emacs ~/.emacs`
    `$ ln -s ~/Dropbox/Programming/emacs/.emacs.d ~/`

using `.spacemacs`
:   `$ ln -s ~/Dropbox/Programming/emacs/.spacemacs ~/.spacemacs`

[algernon's emacs configuration](https://github.com/algernon/emacs.d)
:   `$ git clone git@github.com:algernon/emacs.d.git`

### layers

#### `packages.el`

~~~
(setq mylayer-packages
      '(
        ;; Get the package from MELPA, ELPA, etc.
        some-package
        (some-package :location elpa)

        ;; A local package
        (some-package :location local)

        ;; A package recipe
        (some-package :location (recipe
                                 :fetcher github
                                 :repo "some/repo"))

        ;; An excluded package
        (some-package :excluded t)
        ))
~~~

#### Private

- ESS, polymode, funk [github.com: fernandomayer: spacemacs](https://github.com/fernandomayer/spacemacs)

#### [Latex layer](https://github.com/syl20bnr/spacemacs/tree/master/layers/%2Blang/latex)

create bibtex references
:   `M-x tex-bibtex-file` will run `$ bibtex main` in project folder containing `main.aux` and `main.bib`

#### [Scala layer](https://github.com/syl20bnr/spacemacs/tree/master/layers/%2Blang/scala)

- [Spacemacs for the Scala developer](https://fedragon.github.io/spacemacs-as-scala-ide/)

| Keybinding  | Function                     |
| ----------- | ---------------------------- |
| `M-m g g`   | go to definition             |
| `M-m i i`   | inspect type at point        |
| `M-m r f`   | format code                  |
| `M-m r i`   | organize imports             |
| `M-m r r`   | rename a symbol project wide |
| `M-m s b`   | send buffer to REPL          |
| `M-m s r`   | send region of code to REPL  |
| `M-m t r`   | run quick tests              |

- [Spacemacs clojure](https://github.com/syl20bnr/spacemacs/tree/master/layers/%2Blang/clojure)
- [Spacemacs go](https://github.com/syl20bnr/spacemacs/tree/master/layers/%2Blang/go)

`funcs.el`

~~~
+;; https://github.com/bhauman/lein-figwheel/wiki/Running-figwheel-with-Emacs-Inferior-Clojure-Interaction-Mode
+(defun clojure/figwheel-repl ()
+  (interactive)
+  (run-clojure "lein figwheel"))
+;; (add-hook 'clojure-mode-hook #'inf-clojure-minor-mode) 
~~~

#### [C/C++ layer](https://github.com/syl20bnr/spacemacs/tree/master/layers/%2Blang/c-c%2B%2B)

| Key Binding | Description                                                            |
| ----------- | ---------------------------------------------------------------------- |
| `M-m g a`   | open matching file (e.g. switch between .cpp and .h)                   |
| `M-g A`     | open matching file in another window (e.g. switch between .cpp and .h) |
| `M-m D`     | disaster: disassemble c/c++ code                                       |
| `M-m r`     | srefactor: refactor thing at point.                                    |

#### [Python layer](https://github.com/syl20bnr/spacemacs/tree/master/layers/%2Blang/python)

Send code to inferior process commands:

| Key Binding | Description                                     |
| ----------- | ------------------------------------------------|
| `M-m s b`   | send buffer and keep code buffer focused        |
| `M-m s B`   | send buffer and switch to REPL in insert mode   |
| `M-m s f`   | send function and keep code buffer focused      |
| `M-m s F`   | send function and switch to REPL in insert mode |
| `M-m s i`   | start inferior REPL process                     |
| `M-m s r`   | send region and keep code buffer focused        |
| `M-m s R`   | send region and switch to REPL in insert mode   |
| `CTRL+j`    | next item in REPL history                       |
| `CTRL+k`    | previous item in REPL history                   |

** Running Python Script in shell
To run a Python script like you would in the shell press `M-m c c`
to start the Python script in comint mode. This is useful when working with
multiple Python files since the REPL does not reload changes made in other
modules.

| Key Binding | Description                                                               |
| ----------- | ------------------------------------------------------------------------- |
| `M-m c c`   | Execute current file in a comint shell                                    |
| `M-m c C`   | Execute current file in a comint shell and switch to it in =insert state= |

*Note:* With the universal argument `SPC u` you can enter a new
compilation command.

** Testing
Test commands start with `m t`:

| No Debug  | Description                                              |
| --------- | -------------------------------------------------------- |
| `M-m t a` | launch all tests of the project                          |
| `M-m t b` | launch all tests of the current buffer (same as module)  |
| `M-m t m` | launch all tests of the current module                   |
| `M-m t s` | launch all tests of the current suite (only with =nose=) |
| `M-m t t` | launch the current test (function)                       |

| Debug     | Description                                                            |
| --------- | ---------------------------------------------------------------------- |
| `M-m t A` | launch all tests of the project in debug mode                          |
| `M-m t B` | launch all tests of the current buffer (module) in debug mode          |
| `M-m t M` | launch all tests of the current module in debug mode                   |
| `M-m t S` | launch all tests of the current suite in debug mode (only with =nose=) |
| `M-m t T` | launch the current test (function) in debug mode                       |

** Refactoring

| Key Binding | Description                                                                  |
| ----------- | ---------------------------------------------------------------------------- |
| `M-m r i`   | remove unused imports with [[https://github.com/myint/autoflake][autoflake]] |

** Other Python commands

| Key Binding | Description                                                                               |
| ----------- | ----------------------------------------------------------------------------------------- |
| `M-m =`     | Reformat the buffer according to PEP8 using  [[https://github.com/google/yapf][YAPF]]     |
| `M-m d b`   | toggle a breakpoint                                                                       |
| `M-m g g`   | go to definition using =anaconda-mode-find-definitions= (`C-o` to jump back)              |
| `M-m g a`   | go to assignment using =anaconda-mode-find-assignments= (`C-o` to jump back)              |
| `M-m g u`   | navigate between usages with =anaconda-mode-find-references=                              |
| `M-m h d`   | look for documentation using =helm-pydoc=                                                 |
| `M-m h h`   | quick documentation using anaconda                                                        |
| `M-m h H`   | open documentation in =firefox= using [[https://github.com/tsgates/pylookup][pylookup]]   |
| `M-m v s`   | activate a virtual environment with [[https://github.com/yyuu/pyenv][pyenv]]              |
| `M-m v u`   | deactivate a virtual environment with [[https://github.com/yyuu/pyenv][pyenv]]            |
| `M-m V`     | activate a virtual environment with  [[https://github.com/jorgenschaefer/pyvenv][pyvenv]] |

### fonts

#### [Source Code Pro](https://github.com/adobe-fonts/source-code-pro)

install Fedora 23
:   `sudo dnf install -y adobe-source-code-pro-fonts`

### window modes

- [eyebrowse layer](https://github.com/syl20bnr/spacemacs/tree/master/layers/%2Bwindow-management/eyebrowse)

## Commands

- [github: mastering emacs in one year guide](https://github.com/redguardtoo/mastering-emacs-in-one-year-guide)

### Environment Variables

display
:   `(getenv "SPARK_HOME")`

## Major Modes

list keybindings for a certain mode
:   `C-h m` or `M-x describe-mode` (minor modes: `M-x describe-minor-mode`)

check emacs version
:   `M-x emacs-version`

highlight phrase (`hi-black-hb` works well)
:   `M-x highlight-phrase`

### elfeed

- [github: skeeto: elfeed](https://github.com/skeeto/elfeed)
- [github: remyhonig: elfeed-org](https://github.com/remyhonig/elfeed-org)
- [github: algernon: elfeed-goodies](https://github.com/algernon/elfeed-goodies)

commands
:   `C-x w` show feeds  
    `g` or `G` update  
    `n` next, `p` previous, `b` open in browser, `q` quit

### Org Mode

- [orgmode.org](http://orgmode.org/org.html)

no TOC
:   `#+OPTIONS: toc:nil`

use css stylesheet
:   `#+HTML_HEAD: <link rel="stylesheet" type="text/css" href="./static/style.css" />`

#### org-scrum

this adds [emacs-scrum](https://github.com/ianxm/emacs-scrum) to spacemacs

- add repo [org-scrum](https://github.com/myspacemacs/org-scrum) to `/.emacs.d/layers/+emacs/org-scrum`
- copy [scrum-template.org](https://github.com/myspacemacs/org-scrum/blob/master/scrum-template.org)
- make modifications
- update all: `M-m o r`

#### org-reveal

- change value `org-enable-reveal-js-support` in `/.emacs.d/layers/+emacs/org/config.el` from `nil` to `t`
- create folder for presentations, e.g. `mkdir slides`
- clone repo [reveal.js](https://github.com/hakimel/reveal.js/) into `/slides/reveal.js`
- save [Readme.org](https://raw.githubusercontent.com/yjwen/org-reveal/master/Readme.org) in new file, e.g. `/slides/Readme.org`
- open `/slides/Readme.org` in spacemacs
- `M-x load-library [Ret] ox-reveal [Ret]`
- `C-c C-e R R` to render `/slides/Readme.html`
- open in browser (preview with `s` only currently only working in Chrome)

#### Org OPML

- [github: edavis: org-opml](https://github.com/edavis/org-opml)

install
:   `$ cd ~/.emacs.d/lisp`  
  `$ git clone git@github.com:edavis/org-opml.git`

modify `~/.emacs`
:   `(add-to-list 'load-path "~/.emacs.d/lisp/org-opml")`  
    `(load-library "org-opml")`

copy python script
:   `$ ln -s ~/.emacs.d/lisp/org-opml/opml2org.py`

#### Org Spreadsheet

- [orgmode.org: Org as a spreadsheet system: a short introduction](http://orgmode.org/worg/org-tutorials/org-spreadsheet-intro.html)
- [orgmode.org: orgcard](http://orgmode.org/orgcard.txt)

show grid
:   `C-c }`

activate formula debugging mode
:   `C-c {`

add column left
:   `M-S <right>` (`M-S` = `Alt` + `Shift`)

remove column
:   `M-S <left>`

add row above
:   `M-S <down>`

delete current row
:   `M-S <up>`

insert a horizontal line below current row
:  `C-c -` or `org-table-insert-hline`

permanently calculate column sum
:   e.g. `:=vsum(@2..@-1)` where `@` is the last line or `:=vsum(@I..@II)` making use of horizontal lines

re-apply all stored equations to entire table
:   `C-u C-c *`

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

~~~lisp
(org-babel-do-load-languages
 'org-babel-load-languages
 '((ditaa . t))) ; this line activates ditaa
~~~

#### Links

- [nickjudd.com: Notes on an Emacs workflow for academic documents](http://nickjudd.com/blog/2016/02/13/emacs-notes/)
- [orgmode manual: External Links](orgmode.org/manual/External-links.html)

## Emacs Server

start daemon
:   `$ emacs --daemon`

open file in client
:   `$ emacsclient /path/to/file`

exit client
:   `C-x C-c`

## frequently used commands

delete Emacs backup files
:   `$ rm $(find . -name '*.*~')`

count words
:   `M-=`

toggle auto-fill-mode
:   `M-x auto-fill-mode`

type latex characters such as `⇒` using `\Rightarrow`
:   `M-x set-input-method RET tex` or use [latex-input](https://github.com/clarkgrubb/latex-input)

### Yaml

- [github: yoshiki: yaml-mode](https://github.com/yoshiki/yaml-mode)

## ENSIME

- [ensime.github.io: emacs](http://ensime.github.io/editors/emacs/)
- [troikatech.com: ENSIME and Emacs as a Scala IDE](http://www.troikatech.com/blog/2014/11/26/ensime-and-emacs-as-a-scala-ide)
- [youtube: ENSIME debugger preview](https://youtu.be/v7-G6vD42z8)

### ensime-emacs

- [github: ensime: ensime-emacs](https://github.com/ensime/ensime-emacs)

#### `ensime-startup`

specifies `sbt.version`
:   `(ensime-write-to-file buildpropsfile "sbt.version=0.13.11\n")`

`ensime-update` in scala layer `error: eof expected but ';' found. scalaBinaryVersion := "2.11"`
:   in `/.emacs.d/elpa/ensime-[version]/` remove `ensime-startup.elc` and enter empty line between
`scalaVersion := \"_scala_version_\"` and `scalaBinaryVersion := \"_scala_binary_version_\"`

#### `ensime-server-update`

to be executed in case ensime cannot be started with the message `Could not find or load main class org.ensime.server.Server`


### Windows

run ENSIME under Windows
:   [ensime/bin/server.bat](https://github.com/charlietanksley/dotfiles/blob/master/.emacs.d/packages/ensime/bin/server.bat)

remove stored classpath snapshots after update of activator distribution (e.g. from 1.3.6 to 1.3.7)
:   `$ ~/.emacs.d/ensime`

### Usage

- [Editing](http://ensime.github.io/editors/emacs/editing)
- [Navigating](http://ensime.github.io/editors/emacs/navigating)

cycle through code completion
:   `M-/`

check inferenced type (Ensime-Inspector)
:   `C-c C-v i`  
    for symbols use `C-c C-v r`

move inside project
:   `M-.` and `M-*`

launche `sbt` console
:   `C-c C-v s`

go to test file
:   `C-c C-t t`

if ensime opens / creates a "Spec" test file (and doesn't find existing "Test" files in src/test location), modify `ensime-goto-test-config-defaults`: swap `Spec` with `Test` in `:test-class-suffixes` (in `ensime-vars.el`)

run tests
:   all tests `C-c C-b T` (if in a test file, only this test will be run)  
    only one unit test `C-c C-b o`, see [sbt Testing](http://www.scala-sbt.org/0.13/docs/Testing.html)  
    testQuick `C-c C-b t`

interrupting `~compile`
:   `M-x send-invisible RET C-q j RET`


### scala-mode2

- [github: hvesalai: scala-mode2](https://github.com/hvesalai/scala-mode2)

### sbt-mode

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

select whole buffer
:   `C-x h`

#### using giter8 templates

- [github: AmirHooshangi: Template](https://github.com/AmirHooshangi/Template)

install `template` package
:   `M-x package-install RET template RET`

add line to `.emacs`
:   `(require 'template)`

### Dired Mode

- [gnu.org: Dired Manual](http://www.gnu.org/software/emacs/manual/html_node/emacs/Dired.html)
- [ergoemacs.org: Dired Tutorial](http://ergoemacs.org/emacs/file_management.html)

copy names of marked files
:   `w`

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
- `M-x skewer-repl` or `C-c C-z` to open REPL into the browser

Other commands:

- `C-M-x` Evaluate the top-level form around the point
- `C-c C-k` Load the current buffer

#### Passing external files using `simple-httpd`

- [libraries.io: emacs: simple-httpd](https://libraries.io/emacs/simple-httpd/1.4.2)

### JavaScript Mode

install el-get
:   copy/paste this code into your `scratch` buffer and evaluate using `M-x eval-print-last-exp`

~~~
(url-retrieve  
 "https://raw.githubusercontent.com/dimitri/el-get/master/el-get-install.el"  
 (lambda (s)  
   (goto-char (point-max))  
   (eval-print-last-sexp)))
~~~

Source: [github.com:dimitri/el-get.git](https://github.com/dimitri/el-get/)

install js-comint
:   `el-get-install js-comint`

Source: [livecode nodejs apps on coderwall](https://coderwall.com/p/qvqhkg/livecode-node-js-apps)

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

### Android Mode

- [github: remvee: android-mode](https://github.com/remvee/android-mode)
- [Tips on Android Development Using Emacs](http://gregorygrubbs.com/development/tips-on-android-development-using-emacs/)
- [android.googlesource.com: `android.el`](https://android.googlesource.com/platform/sdk/+/eclair-release/files/android.el)

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

start shell mode
:   `M-x shell`

start additional shell
:   `C-u M-x shell` enter name `Ret`

execute region
:   `C-M-x` or `M-x append-to-buffer RET`

execute script
:   `C-c C-x`

### W3M web browser

- [w3 Manual](http://w3m.sourceforge.net/MANUAL)
- [Beat of the Geek: The Awesome of Web Browsing With Emacs](http://beatofthegeek.com/2014/02/the-awesome-of-web-browsing-with-emacs.html)
- [Beat of the Geek: My Setup for Using Emacs as Web Browser](http://beatofthegeek.com/2014/02/my-setup-for-using-emacs-as-web-browser.html)

Navigation
:   We can use standard Emacs controls for moving cursor (C-n, C-p, C-f, C-b) as well as Vim’s (g,h,j,k). Vim’s controls are really handy when you need to move cursor with one hand.

Jumping to links
:   Tab will go you to next link. `Shift-Tab` to previous

Visiting different tabs
:   w3m has tabs like system. You can easily change tabs (buffers) with Emacs’ standard `C-x b` or use `C-c C-n` for next tab and `C-c C-p` for previous tab.

Open link in new tab
:   Just entering `G` will do the job. It will prompt for a url with the url under cursor as default.

Open link in same tab/buffer
:   `g` works similar to `G` but opens url in current tab only.

Go to previous page
:   `B` will act as ‘Back’ button of standard browsers

Toggle visibility of image under cursor
:   `t` shows or hides an image under cursor

Toggle visibility of all images on page
:   `T`

Download url under point
:   `d`

Move to next form field
:   `]`

Move to previous form field
:   `[`

access the help buffer
:   `C-h m`

### Mail

begin composing mail `compose-mail`
:   `C-x m`

attach file (mml-attach-file)
:   `C-c C-a`

send the message `message-send`
:   `C-c C-s`

send the message and bury the buffer `message-send-and-exit` 
:   `C-c C-c`

#### SMTP account configuration

edit user mail address
:   `(custom-set-variables '(user-mail-address "bo.werth@gmail.com") )`

#### Edit modes

- [github: gmail-mode](https://github.com/Malabarba/gmail-mode)
- [github: ham-mode](https://github.com/Malabarba/ham-mode)
- [gmail-mode browser integration](http://www.widecodes.com/CSVjeqVeVq/composing-gmail-messages-in-text-editor-complete-with-gmail-links.html)

#### Google Chrome integration

- [chrome extension: Edit with Emacs](https://chrome.google.com/webstore/detail/edit-with-emacs/ljobjlafonikaiipfkggjbhkghgicgoh?hl=en)

edit Gmail message with Emacs (after installing Edit with Emacs and editing the Chrome shortcuts)
:   `Ctrl + Shift + E`

when done editing, export back to Gmail
:   `C-x #`


## mu4e

- [github.com: djcb: mu-releases](https://github.com/djcb/mu-releases)

### Install Fedora 26

- [djcbsoftware: Installation](http://www.djcbsoftware.nl/code/mu/mu4e/Installation.html)

rebuild index
:   `mu index --rebuild`

### Usage

- [www.djcbsoftware.nl: Mu4e User Manual](http://www.djcbsoftware.nl/code/mu/mu4e/index.html)

start mu4e
:   `M-m a M`

synchronize emails and index mu4e
:   `U`

go to inbox
:   `j INBOX` or `j-i`

reply message
:   `R`

delete message
:   `D x y`

close header view
:   `q` or `z`

- [mu4e Keybindings](http://www.djcbsoftware.nl/code/mu/mu4e/Keybindings.html#Keybindings)

show keybindings in mu4e
:   `M-m ?`

| Topic       |       Key       | Description                                     |
|:------------|:---------------:|:------------------------------------------------|
| General     |                 |                                                 |
|             |      n, p       | view the next, previous message                 |
|             |      ], [       | move to the next, previous unread message       |
|             |        y        | select the message view (if it's visible)       |
|             |       RET       | open the message at point in the message view   |
| Searching   |                 |                                                 |
|             |        s        | search                                          |
|             |        S        | edit last query                                 |
|             |        /        | narrow the search                               |
|             |        b        | search bookmark                                 |
|             |        B        | edit bookmark before search                     |
|             |        j        | jump to maildir                                 |
|             | M-left, M-right | previous query, next query                      |
|             |        O        | change sort order                               |
|             |        P        | toggle threading                                |
|             |        Q        | toggle full-search                              |
|             |        V        | toggle skip-duplicates                          |
|             |        W        | toggle include-related                          |
| Marking     |                 |                                                 |
|             |        d        | mark for moving to the trash folder             |
|             |        =        | mark for removing trash flag ('untrash')        |
|             |     DEL, D      | mark for complete deletion                      |
|             |        m        | mark for moving to another maildir folder       |
|             |        r        | mark for refiling                               |
|             |      +, -       | mark for flagging/unflagging                    |
|             |      ?, !       | mark message as unread, read                    |
|             |        u        | unmark message at point                         |
|             |        U        | unmark *all* messages                           |
|             |        %        | mark based on a regular expression              |
|             |      T, t       | mark whole thread, subthread                    |
|             |   [insert], *   | mark for 'something' (decide later)             |
|             |        #        | resolve deferred 'something' marks              |
|             |        x        | execute actions for the marked messages         |
| Composition |                 |                                                 |
|             |     R, F, C     | reply/forward/compose                           |
|             |        E        | edit (only allowed for draft messages)          |
| Misc        |                 |                                                 |
|             |        ;        | switch focus                                    |
|             |        a        | execute some custom action on a header          |
|             |     &#124;      | pipe message through shell command              |
|             |    C-+, C--     | increase / decrease the number of headers shown |
|             |        H        | get help                                        |
|             |      C-S-u      | update mail & reindex                           |
|             |        q        | leave the headers buffer                        |


### `config.el`

~~~
(setq mu4e-headers-skip-duplicates t)

(setq mu4e-get-mail-command "offlineimap")

(setq mu4e-maildir "~/Maildir")

(setq mu4e-drafts-folder
      (lambda (msg)
        ;; the 'and msg' is to handle the case where msg is nil
        (if (and msg
                 (mu4e-message-contact-field-matches msg :from "bo.werth@gmail.com"))
            "/Personal/[Google Mail].Drafts"
          "/Personal/[Google Mail].Drafts")))

(setq mu4e-sent-folder
      (lambda (msg)
        ;; the 'and msg' is to handle the case where msg is nil
        (if (and msg
                 (mu4e-message-contact-field-matches msg :from "bo.werth@gmail.com"))
            "/Personal/[Google Mail].Sent Mail"
          "/Personal/[Google Mail].Sent Mail")))


(setq mu4e-trash-folder
      (lambda (msg)
        ;; the 'and msg' is to handle the case where msg is nil
        (if (and msg
                 (mu4e-message-contact-field-matches msg :to "bo.werth@gmail.com"))
            "/Personal/[Google Mail].Trash"
          "/Personal/[Google Mail].Trash")))

(setq mu4e-maildir-shortcuts
    '( ("/Personal/INBOX"                     . ?i)
       ("/Personal/[Google Mail].Sent Mail"   . ?s)))
~~~

### `.offlineimaprc`

~~~
[general]
accounts = Gmail
maxsyncaccounts = 3

[Account Gmail]
localrepository = Local
remoterepository = Remote

[Repository Local]
type = Maildir
localfolders = ~/Maildir/Personal

[Repository Remote]
type = IMAP
remotehost = imap.gmail.com
remoteuser = bo.werth@gmail.com
remotepass = ********
ssl = yes
maxconnections = 1
realdelete = no
sslcacertfile = /etc/ssl/certs/ca-bundle.crt
folderfilter = lambda folder: folder in ['INBOX', 'INBOX/Starred', '[Google Mail]/Sent Mail']
~~~

### mbsync vs offlineimap

- [Bloerg: Syncing mails with mbsync (instead of OfflineIMAP)](https://bloerg.net/2013/10/09/syncing-mails-with-mbsync-instead-of-offlineimap.html)
- [Migrating from offlineimap to mbsync for mu4e](http://pragmaticemacs.com/emacs/migrating-from-offlineimap-to-mbsync-for-mu4e/)

start isync
:   `isync -w`

show mbsync manual
:   `man mbsync`

perform sync
:   `mbsync -V gmail`

create symbolic link
:   `ln -s ~/mbsync/.mbsyncrc ~/`

delete mu index and re-index
:   `rm -rf ~/.mu`  
    `mu index`

## Wanderlust

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

~~~lisp
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
~~~

#### Secure authentication

- [emacswiki: safe email authentication](http://www.emacswiki.org/emacs/GnusEncryptedAuthInfo)
- [emacswiki: EasyPG](http://www.emacswiki.org/emacs/EasyPG)

### Processing

installation
:   `M-x package-install RET processing-mode`

- [github: ptrv: processing2-emacs](https://github.com/ptrv/processing2-emacs)

## helm

- [tuhdo.github.io: helm-intro](http://tuhdo.github.io/helm-intro.html)
- [github: emacs-helm: helm](https://github.com/emacs-helm/helm)
- [github: emacs-helm: helm wiki](https://github.com/emacs-helm/helm/wiki)

install
:   `M-x list-packages` and select **helm** 

### helm-ls-git

- [github: emacs-helm: helm-ls-git](https://github.com/emacs-helm/helm-ls-git)

## god-mode

- [github: chrisdone: god-mode](https://github.com/chrisdone/god-mode)

helm integration
:   `M-x package-install RET helm-projectile`

usage
:   `M-x helm-projectile` or `C-c p h`

helm-projectile is capable of opening multiple files by marking the files with `C-SPC` or mark all files with `M-a`. Then, press `RET`, all the selected files will be opened.

## Run in terminal

no window mode
:   `emacs -nw` or `emacs --no-window-system`

close
:   `C-x C-c`

start as daemon - 
:   `emacs --daemon` and then using `emacsclient -t`

try to connect to a runnning emacs daemon - if none is running, it will startup a new one, and then connect using the current terminal window
:   `emacsclient -nw -c -a ""` or ``emacsclient -nw --create-frame --alternate-editor ""`

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

## Resources

### Books

- [Mickey Petersen: Mastering Emacs - mastering the world's best text editor](https://www.masteringemacs.org/)

### Links

- [Endless Parentheses Concise ramblings on Emacs productivity.](http://endlessparentheses.com/)
