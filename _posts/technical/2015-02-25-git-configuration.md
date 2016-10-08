---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}

## Commit message code

`[=|+|!] [core|viewable|akka|docs|all]: <Actual message>.`

- `=`` means there are no API changes
- `+` means added funtionality
- `!` means breaking changes (source or binary)

## Platforms

- [Gilab](https://about.gitlab.com)

### Github

- [kbroman.org: github_tutorial](http://kbroman.org/github_tutorial)

get user email address
:   https://api.github.com/users/`[username]`/events/public

## Git workflow

![git file workflow](/assets/graphics/git_file_workflow.svg)

{{ {% ditaa }}%}
+---------+        +-----------+     +------------+      +----------+     +--------+
|         |        |           |     |            |      |          |     |        |
| Ignored |        | Untracked |     | Unmodified |      | Modified |     | Staged |
|         |        |           |     |            |      |          |     |        |
|         | ignore |           | add |            | edit |          | add |        |
|       <----------+-+       +-+------->        +-+-------->      +-+------->      |
|         |        |           |     |            |      |          |     |        |
|         |        |           |     |            |      |          |     |        |
|         |        |           | rm  |            |      |  commit  |     |        |
|         |        |         <-------+-+        <-------------------------+-+      |
|         |        |           |     |            |      |          |     |        |
|         |        |           |     |            |      |          |     |        |
|         |        |           |     |            |      |          |     |        |
|         |        |           |     |            |      |          |     |        |
+---------+        +-----------+     +------------+      +----------+     +--------+
{{ {% endditaa }}%}

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

start `ssh-agent`
:   `$ eval "$(ssh-agent -s)"`

add keypair to `ssh-agent`
:   `$ ssh-add` for keys in standard location `/home/xps13/.ssh/id_rsa`  
    enter passphrase

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
    
undo push
:   `git reset cc4b63b`  
    `git stash`  
    `git push -f origin alpha-0.3.0`  
    `git stash pop`

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
    `*.*~` ignore Emacs backup files  
    finally, `git add .gitignore`

view repo file tree
:   `tree`

## Cloning Repositories

supported cloning protocols
:   - http: `git clone http://server/user/project.git` no authentication  
	- https: `git clone https://user@server/user/project.git` can be made to work with firewall  
	- ssh: `git clone git://server/user/project.git` running on port 9418  
	- file: `git clone file:///myrepos/project` or `git clone /myrepos/project`. Convenient way to manage different versions of large repo  

clone with different name
:   `git clone [repo] [alias name]`

## Command Composition, Storage, Log

show recent commits
:   `git log`

quit log view
:   `q`

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

rewrite the most recent commit message
:   `git commit --amend`

## Branching

when to branch
:   - short lived  
    - feature  
    - release
    
list remote branches
:   `git branch -a`

switch branches
:   `git checkout [branch]` will automatically track remote branch `origin [branch]`

fetch remote branch
:   `git fetch`

remove branch after changing to other branch
:   `git branch -d [branch]`

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

## Resetting

Reset the staging area and the working directory to match the most recent commit
:   `git reset --hard`

In addition to unstaging changes, the --hard flag tells Git to overwrite all changes in the working directory, too. Put another way: this obliterates all uncommitted changes, so make sure you really want to throw away your local developments before using it.

## Submodules

add submodule
:   `git submodule add https://github.com/bowerth/nsoApiBrowser.git inst/nsoApiBrowser`

## Maintenance

- [naleid.com: Finding and Purging Big Files From Git History](http://naleid.com/blog/2012/01/17/finding-and-purging-big-files-from-git-history)

### BFG repo cleaner

- [rtyley.github.io: bfg-repo-cleaner](https://rtyley.github.io/bfg-repo-cleaner)
- [github: rtyley: bfg-repo-cleaner](https://github.com/rtyley/bfg-repo-cleaner)

usage
:   `$ java -jar /home/xps13/Dropbox/Programming/Scala/bfg-1.12.6.jar --strip-blobs-bigger-than 100M ./.git`

## Other resources

- [try.github.io: Got 15 minutes and want to learn Git?](https://try.github.io/levels/1/challenges/1)
- [GitHub Trainig Kit](`https://training.github.com/kit`) and [page source](https://github.com/matthewmccullough/slidedown`)
- [Pro Git book by S. Chacon and B. Straub](http://git-scm.com/book/en/v2/)
- [Become a git guru](https://www.atlassian.com/git/tutorials/)
- [Ry's Git Tutorial](http://rypress.com/tutorials/git/index)
- [GitHub Pages Workflow](http://oli.jp/2011/github-pages-workflow/)
- [A Case of Computational Thinking: The Subtle Effect of Hidden Dependencies on the User Experience of Version Control](http://static.googleusercontent.com/media/research.google.com/en/pubs/archive/42942.pdf)
- [git-annex](https://git-annex.branchable.com/)
- [buildamodule.com: git workflow training video](http://buildamodule.com/video/change-management-and-version-control-deploying-releases-features-and-fixes-with-git-how-to-use-a-scalable-git-branching-model-called-gitflow)
- [evrignaud.github.io: File Integrity Manager](http://evrignaud.github.io/fim/)
