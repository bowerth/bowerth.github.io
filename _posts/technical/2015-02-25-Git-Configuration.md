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
:   `touch [filename]`

status of repo
:   `git status`

add to staging area
:   `git add [filename]`

add untracked files, e.g. after renaming
:   `git add . -A`

set file back to untracked state
:   `git rm [filename]`

ignore files permanently
:   `touch .gitignore`  
	edit contents:  
	`*.log` ignore file extension in root folder  
	`**/*.log` ignore file extension in all subfolders  
	`target` ignore folder  
	finally, `git add .gitignore`

![git file workflow](/assets/graphics/git_file_workflow.svg)

view repo file tree
:   `tree`

## Cloning Repositories

supported cloning protocols
:   - ssh: `git clone ssh://user@server:user/project.git` or `git clone user@server:user/project.git`  
	- http: `git clone http://server/user/project.git` no authentication  
	- https: `git clone https://user@server/user/project.git` can be made to work with firewall  
	- git: `git clone git://server/user/project.git` running on port 9418  
	- file: `git clone file:///myrepos/project` or `git clone /myrepos/project`. Convenient way to manage different versions of large repo  

clone with different name
:   `git clone [repo] [alias name]`

## Command Composition, Storage And Hashesm04 Command Composition, Storage And Hashesmand Composition, Storage And Hashes

Source: McCullough and Berglund on Matering Git, O'Reilly    

Other resources:

Pro Git book by Scott Chacon and Ben Straub at Apress [http://git-scm.com/book/en/v2/](http://git-scm.com/book/en/v2/)
