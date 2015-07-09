---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}

## GUI

http://sourceforge.net/projects/gitextensions/

## Setup Git

account
:   http://github.com/cis-itn-oecd/  
    alternative: bitbucket.com  
    `git config --global http.proxy wsg-proxy.oecd.org:80`  
    `git config --global https.proxy wsg-proxy.oecd.org:80`  
    `git config --global http.sslverify false`

attribution for commited content
:   `git config --global user.name "bowerth"`  
    `git config --global user.email "bo.werth@gmail.com"`

add colors to git console
:   `git config --global color.ui auto`

increase Git’s HTTP buffer
:   `git config --global http.postBuffer 2M`

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

add and commit together (only for tracked files)
:   `git commit -a -m'[message]'`

push repo to remote, e.g. github
:   create repo on github  
    `git remote add origin git@github.com:bowerth/sdmxBrowser.git`  
    `git push -u origin master`
    
change remote URI
:   `git remote set-url origin https://github.com/bowerth/stanApi.git`

nuke last commit and never see it again
:   `git reset --hard HEAD~1`

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

## Command Composition, Storage, Log

show recent commits
:   `git log`

show last 3 commits
:   `git log HEAD^^^..HEAD`

show last 3 commits with details (patch)
:   `git log HEAD^^^..HEAD -p`

show specific previous commits with details (patch)
:   `git log HEAD~6..HEAD~4 -p`

show recent commits in compressed view
:   `git log --pretty=oneline`

show commits around specific hash
:   `git log [hash]`

show two commits before specific hash
:   `git log [hash]^^..[hash]`

show n commits before specific hash
:   `git log [hash]~[n]..[hash]`

show details for last commit
:   `git show`

## Branching

when to branch
:   - short lived  
    - feature  
    - release
    
list remote branches
:   `git branch -a`

## Merging

open files with merge conflict in sublime
:   `git diff --name-only | uniq | xargs sublime_text`

accept own or foreign changes globally
:   `git merge --strategy-option theirs`

file-based accept own or foreign changes
:   `git checkout --theirs path/to/the/conflicted_file`

Source
:   McCullough and Berglund on Matering Git, O'Reilly  
	[matthewmccullough](`https://github.com/matthewmccullough`)  
	[github-cheat-sheet](`https://github.com/matthewmccullough/github-cheat-sheet`)

## Other resources

- [GitHub Trainig Kit](`https://training.github.com/kit`) and [page source](https://github.com/matthewmccullough/slidedown`)
- [Pro Git book by S. Chacon and B. Straub](http://git-scm.com/book/en/v2/)
- [Become a git guru](https://www.atlassian.com/git/tutorials/)
- [Ry's Git Tutorial](http://rypress.com/tutorials/git/index)
- [GitHub Pages Workflow](http://oli.jp/2011/github-pages-workflow/)