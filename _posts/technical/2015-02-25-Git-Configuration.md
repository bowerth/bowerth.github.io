---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}

## Setup Git

attribution for commited content
:   `git config --global user.name "bowerth"`  
    `git config --global user.email "bo.werth@gmail.com"`

add colors to git console
:   `git config --global color.ui auto`

ssh key pair for authenticating
:   `ssh-keygen -t rsa -C "bo.werth@gmail.com"`  
    `-C`: comment for reference  
    will be generated in `~/`  
    `id_rsa`: private part of the key (secret)  
    `id_rsa.pub`: public part of the key (share)

version of git
:   `git --version`

create new repo
:   `git init [reponame]`

create new file
:   `touch [filename.ext]`

status of repo
:   `git status`

add to staging area
:   `git add [filename.ext]`

view repo file tree
:   `tree`

Source: McCullough and Berglund on Matering Git, O'Reilly    

Other resources:

Pro Git book by Scott Chacon and Ben Straub at Apress [http://git-scm.com/book/en/v2/](http://git-scm.com/book/en/v2/)
