![Git image](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png)


# Git

Git commands in terminal.

## git init
initializes a local as a repository-
```sh
$ git init C:/Users/juan/workspace/neolad-202510/.git/
```
### ls-a
show visible and hidden and folder  in given path.
```sh
$ ls-a 
/  ../  .git/  staff/
```
## git remote add origin repo-address

sets the origin repository for the local one.
```sh
$ git remote add origin https://github.com/jota23climb/neoland-202510
```
## git pull 
pulls all the changes from remote (origin) repository.
```sh
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=orgin/<branch> main
```
## git braunch -a
shows the all braunches in the repository.
```sh
$ git branch -a
  remotes/orgin/HEAD -> orgin/main
  remotes/orgin/main
  ```
  ## git switch branch-name

  ```sh
  $ git switch main
branch 'main' set up to track 'orgin/main'.
Already on 'main'
```
## git branch
Shows the local braunches.
```sh
$ git branch
* main
```
## git status
Show the status of files in local repo.
```sh
$ git status
On branch main
Your branch is up to date with 'orgin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        staff/

nothing added to commit but untracked files present (use "git add" to track)
```
## git add content-name
Adds content to staging.

```sh
$ git add staff
```
## git config setting

configure setting in local git.

```sh
$ git config user.email "juanortizcc1991@gmail.com"
$ git config user.name "juan ortiz"
```



