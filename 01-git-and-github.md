---
title: Git & GitHub
---

# Git & Github

## What is VCS?

Generations:
* 0gen - No VC
* 1gen - File locks
* 2gen - CVCS (Centralized)
* 3gen - DVCS (Distributed)

Purposes?
* allows multiple people to work on a single project in the same time
* integrates work done simultaneously by different team members
* gives access to historical versions of your project

example: Wikipedia history of changes

![](http://courseware.hbs.edu/public/cases/wikipedia/images/exhibit7.jpg)

example: history panel in Photoshop

![](http://simplykellydesigns.com/blog/wp-content/uploads/2011/07/HistoryWindow.jpg)

example: Wordpress rollback post

![](http://new.tinygrab.com/7020c0e8b034a9fc62716a67bbed6de510486c9073.png)

example: Wordpress previous post diff

![](https://i2.wp.com/en.support.files.wordpress.com/2008/12/compare-revisions-2.png)

## Life without VCS

Generation 0
* Without version control - backup.zip 
* One developer - ok.
* Two developers - danger!
* Five developers - madness!

Generation 1 - File Locks

* Each file is locked when it's editing by another person
* Until editing will not be done – file will be not possible to update by another person

Generation 2 - Central VCS (i.e. SVN)

![](http://new.tinygrab.com/7020c0e8b0682abff9a5e19670fffb76ddc6ad6280.png)

problems? weaknesses?

Generation 3 - DVCS

## Centralized vs Distributed

[https://youtu.be/_yQlKEq-Ueg](https://youtu.be/_yQlKEq-Ueg)

Distributed and centralized version control:
* centralized  (example: Subversion)
* distributed (DVSC)  – more modern, runs faster, is less prone to errors, has more features, more complex to understand (example: Mercurial, Git)

**Central VCS**

![](http://new.tinygrab.com/7020c0e8b0682abff9a5e19670fffb76ddc6ad6280.png)

There is just one repository:
* You commit
* They update

**Distributed version control diagram**

![](http://new.tinygrab.com/7020c0e8b0d7c0e942139e52d8c801e7c1bc7b141f.png)

There are multiple repositories:
* You commit (to your local)
* You push (to remote)
* They pull (from remote)
* They update (to their local)

## Git

Git is a:
* essential professional tool
* directory content management system
* tree history storage system
* content tracker

Why Git? because:
* simple
* fast (save time)
* no central repo (work offline, no network needed)
* easy reverts
* branching make life easier
* ideal for development in team

## Setup Git

* MacOs: [http://code.google.com/p/git-osx-installer/downloads/list?can=3](http://code.google.com/p/git-osx-installer/downloads/list?can=3)
* Linux: [http://git-scm.com/download/linux](http://git-scm.com/download/linux)
* Mac: [http://git-scm.com/download/mac](http://git-scm.com/download/mac)
* Win: [http://git-scm.com/download/win](http://git-scm.com/download/win)
* Win: [https://git-for-windows.github.io/](https://git-for-windows.github.io/)
* Win: [https://desktop.github.com](https://desktop.github.com)
* [TortoiseGit](https://tortoisegit.org/)

## Configuring

```
$ git config

$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com

$ git config --list
$ git config user.name
```

## Repository & init empty local repo

Git: Creating an Empty Project

```
# initializes a directory as a Git repository
$ git init
```

Git: Getting a Project

```
# copy a git repository so you can add to it
$ git clone git://github.com/schacon/simplegit.git
```

## Commit & File states overview

![](https://www.devopsschool.com/slides/git/mastering-git/images/the-four-areas.png)

Git: Basic Snapshotting

![](http://git-scm.com/book/en/v2/book/02-git-basics/images/lifecycle.png)

## Staging

`git add` – adds file contents to the staging area 

```
$ git status -s
?? README
?? hello.rb

$ git add README hello.rb
$ git add *.rb

$ git status -s
A  README
A  hello.rb

# edit & save the "README" file

$ git status -s
AM README
A  hello.rb
```

`git status` – adds file contents to the staging area

```
$ git status -s
AM README
A  hello.rb

$ git status -s
M  README
 D hello.rb
```

`git commit` – records a snapshot of the staging area 

```
$ git config --global user.name 'Your Name'
$ git config --global user.email you@somedomain.com

$ git add hello.rb 
$ git status -s
M  hello.rb

$ git commit -m 'my hola mundo changes'
[master 68aa034] my hola mundo changes
 1 files changed, 2 insertions(+), 1 deletions(-)

$ git status
# On branch master
nothing to commit (working directory clean)
```

`git push` – push your new branches and data to a remote repository

```
$ git push github master
Counting objects: 25, done.
Delta compression using up to 2 threads.
Compressing objects: 100% (25/25), done.
Writing objects: 100% (25/25), 2.43 KiB, done.
Total 25 (delta 4), reused 0 (delta 0)
To git@github.com:schacon/hw.git
 * [new branch]      master -> master
```

`git pull` – fetch from a remote repo and try to merge into the current branch

```
$ git fetch github
remote: Counting objects: 4006, done.
remote: Compressing objects: 100% (1322/1322), done.
remote: Total 2783 (delta 1526), reused 2587 (delta 1387)
Receiving objects: 100% (2783/2783), 1.23 MiB | 10 KiB/s, done.
Resolving deltas: 100% (1526/1526), completed with 387 local objects.
From github.com:schacon/hw
   8e29b09..c7c5a10  master     -> github/master
   0709fdc..d4ccf73  c-langs    -> github/c-langs
   6684f82..ae06d2b  java       -> github/java
 * [new branch]      ada        -> github/ada
 * [new branch]      lisp       -> github/lisp
 ```
 
`git remote` – list, add and delete remote repository aliases 

```
$ git remote
origin

$ git remote -v
origin  git@github.com:github/git-reference.git (fetch)
origin  git@github.com:github/git-reference.git (push)
```

## Gitignore

![](https://i.stack.imgur.com/1qVzG.png)

Ignored files are usually build artifacts and machine generated files that can be derived from your repository source or should otherwise not be committed. Some common examples are:
* dependency caches, such as the contents of /node_modules or /packages
* compiled code, such as .o, .pyc, and .class files
* build output directories, such as /bin, /out, or /target
* files generated at runtime, such as .log, .lock, or .tmp
* hidden system files, such as .DS_Store or Thumbs.db
* personal IDE config files, such as .idea/workspace.xml


```
$ echo debug.log >> .gitignore
$ git rm --cached debug.log
rm 'debug.log'
$ git commit -m "Start ignoring debug.log"
```

More: [https://www.atlassian.com/git/tutorials/saving-changes/gitignore](https://www.atlassian.com/git/tutorials/saving-changes/gitignore)

Gitignore templates: [https://github.com/github/gitignore](https://github.com/github/gitignore)

Create useful .gitignore files for your project: [https://www.gitignore.io/](https://www.gitignore.io/)

## Branches (create, push, remove)

![](http://featureflags.io/wp-content/uploads/2018/03/featurebranchingwithout.jpg)

Creating a New Branch

```
$ git branch testing
$ git checkout -b testing
```

Switching Branches

```
$ git checkout testing
$ git checkout master
```

Logs

```
$ git log --oneline --decorate --graph --all
* c2b9e (HEAD, master) made other changes
| * 87ab2 (testing) made a change
|/
* f30ab add feature #32 - ability to add new formats to the
* 34ac2 fixed bug #1328 - stack overflow under certain conditions
* 98ca9 initial commit of my project
```

More: [https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)

## Merging (merge, conflicts, rebase, cherry-pick)

![](https://wac-cdn.atlassian.com/dam/jcr:83323200-3c57-4c29-9b7e-e67e98745427/Branch-1.png?cdnVersion=kw)

```
$ git status
$ git checkout <receiving>
$ git merge <branch name>
```

More: [https://www.atlassian.com/git/tutorials/using-branches/git-merge](https://www.atlassian.com/git/tutorials/using-branches/git-merge)

Conflicts: [https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts)

## Workflow (a daily file circle, gitflow)

![](https://i.redd.it/nm1w0gnf2zh11.png)

## GitHub Overview

[https://github.com](https://github.com)

[https://github.com/itspoma](https://github.com/itspoma)

[https://github.com/cursor-education](https://github.com/cursor-education)

## GitHub filling profile (create Github repo, clone and push)

Create a repo: [https://help.github.com/articles/create-a-repo/](https://help.github.com/articles/create-a-repo/).

![](https://help.github.com/assets/images/help/repository/repo-create.png)

Clone

![](https://help.github.com/assets/images/help/repository/https-url-clone.png)

What is difference between https and ssh?

## Github Pages

[https://pages.github.com/](https://pages.github.com/)

![](https://pages.github.com/images/slideshow/foundation.png)


```
$ cd username.github.io
$ echo "Hello World" > index.html

$ git add --all
$ git commit -m "Initial commit"
$ git push -u origin master
```

More: [https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/)

Example:
* [https://github.com/cursor-education/frontend-materials/](https://github.com/cursor-education/frontend-materials/)
* [https://frontend-materials.cursor.education](https://frontend-materials.cursor.education)

## GitHub Fork & PR (why we need fork, PR for facebook/react)

![](https://image.slidesharecdn.com/princetonjuggitgithub-131023134219-phpapp02/95/princeton-jug-gitgithub-28-638.jpg?cb=1382535789)

More: [https://help.github.com/articles/fork-a-repo/](https://help.github.com/articles/fork-a-repo/)

More: [https://help.github.com/articles/syncing-a-fork/](https://help.github.com/articles/syncing-a-fork/)

More: [https://help.github.com/articles/creating-a-pull-request-from-a-fork/](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)

## Gist

[https://gist.github.com/](https://gist.github.com/)

![](https://i.stack.imgur.com/tN7Nu.jpg)

## Markdown & README.md

![](https://d33wubrfki0l68.cloudfront.net/541d89b49cfeb577c7ba61491899adeac8bdf4d0/2826b/assets/images/dillinger.png)

More: [https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

Online editors:
* [https://dillinger.io/](https://dillinger.io/)
* [https://stackedit.io/](https://stackedit.io/)
