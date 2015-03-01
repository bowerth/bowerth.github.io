---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}

return all files with a specific extension
:   `ls -al | grep .git`

remove all files with a specific pattern
:   `rm sample*.log`

change theme for specific window
:   `xprop -f _GTK_THEME_VARIANT 8u -set _GTK_THEME_VARIANT dark`

## Pandoc

Navigate to containing folder
:   `cd ~/Dropbox/GitHub/jekyll/bowerth.github.io/_drafts/`

HTML with CSS:
:   `pandoc --standalone -c style.css --from markdown --to html -o file.html file.md`

PDF with standard size
:   `pandoc --variable=geometry:a4paper file.md -o file.pdf`  
	Example  
	`cd ~/Dropbox/GitHub/jekyll/bowerth.github.io \`
	`&& pandoc --variable=geometry:a4paper _drafts/Motivation-Boston-Consulting-Group.md -o ~/Downloads/motivation.pdf`

PDF with custom size and margins
:   `pandoc -V geometry:paperwidth=4in -V geometry:paperheight=6in -V geometry:margin=.5in file.md -o file.pdf`

## ToDo

- create ruby module to pick up page source md file, generate pdf and trigger file download with default location and file name
