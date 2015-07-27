---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}

## Use

### Navigate

up
:   `k`

down
:   `j`

left
:   `h`

right
:   `l`

### Edit

start edit mode
:   `i`

paste external content
:   `Ctrl + Shift + V`

#### Cut and paste inside vim

- Position the cursor where you want to begin cutting.
- Press v to select characters (or uppercase V to select whole lines).
- Move the cursor to the end of what you want to cut.
- Press d to cut (or y to copy).
- Move to where you would like to paste.
- Press P to paste before the cursor, or p to paste after.

save file
:   `:w`

save file and exit
:   `:x`

suspend the process and get back to shell
:   `Ctrl + Z`

resume (bring to foreground) suspended vim
:   `fg`

## Installation

### Vim pathogen

Manage plugins for vim in `~/.vimrc/bundle` directory

- [github: tpope/vim-pathogen](https://github.com/tpope/vim-pathogen)

```bash
mkdir -p ~/.vim/autoload ~/.vim/bundle && \
curl -LSso ~/.vim/autoload/pathogen.vim https://tpo.pe/pathogen.vim
```

if new `~/.vimrc`: `$ vim ~/.vimrc` and paste in the following super-minimal example:

```vim
execute pathogen#infect()
syntax on
filetype plugin indent on
```

add `vim-addon-manager`
:   `cd ~/.vim/bundle && \`  
    `git clone https://github.com/MarcWeber/vim-addon-manager.git`

