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

page-up, down
:   ``

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

## Plugins

### Drawit

#### Keyboard commands
`left`
:   move and draw left
`right`
:   move and draw right, inserting lines/space as needed
`up`
:   move and draw up, inserting lines/space as needed
`down`
:    move and draw down, inserting lines/space as needed
`s-left`
:     move left
`s-right`
:    move right, inserting lines/space as needed
`s-up`
:    move up, inserting lines/space as needed
`s-down`
:     move down, inserting lines/space as needed
`space`
:   toggle into and out of erase mode
`>`
:   draw -> arrow
`<`
:   draw <- arrow
`^`
:   draw ^  arrow
`v`
:   draw v  arrow
`pgdn`
:    replace with a \, move down and right, and insert a \
`end`
:     replace with a /, move down and left,  and insert a /
`pgup`
:    replace with a /, move upand right, and insert a /
`home`
:    replace with a \, move upand left,  and insert a \
`\>`
:   draw fat -> arrow
`\<`
:   draw fat <- arrow
`\^`
:   draw fat ^ arrow
`\v`
:   draw fat v arrow
`\a`
:   draw arrow based on corners of visual-block
`\b`
:   draw box using visual-block selected region
`\e`
:   draw an ellipse inside visual-block
`\f`
:   fill a figure with some character
`\h`
:   create a canvas for \a \b \e \l
`\l`
:   draw line based on corners of visual block
`\s`
:   adds spaces to canvas
`leftmouse`
:    select visual block
`s-leftmouse`
:    drag and draw with current brush (register)
`\ra ... \rz`
:   replace text with given brush/register
`\pa` 
:   ...like \ra ... \rz, except that blanks are considered to be transparent 

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

