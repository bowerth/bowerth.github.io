---
layout   : post
category : technical
tagline  :
tags     :
---
{% include JB/setup %}

## Ubuntu

### Flash player

- download .deb file from ppa launchpad
- remove existing flash installations (`flashplayer-installer`, `flash-plugin`)
- close browser
- install using `sudo dpkg -i [package name]`

## Fedora

### screen brightness Toshiba

[jamielinux: adjust screen brightness](https://jamielinux.com/blog/cannot-adjust-screen-brightness-on-fedora/)
[forums.fedoraforum.org: Fix for Toshiba laptops with no control of brightness after suspend](http://forums.fedoraforum.org/showthread.php?t=290976)

#### add `acpi_backlight=vendor` in the kernel command line

append to edit grub `GRUB_CMDLINE_LINUX="rd.md=0 [...] rhgb quiet acpi_backlight=vendor"`
:   `sudo nano /etc/default/grub`

backup `grub.cfg`
:   `sudo cp /boot/grub2/grub.cfg /boot/grub2/grub.cfg.backup`

update `grub.cfg`
:   `sudo grub2-mkconfig -o /boot/grub2/grub.cf`

check contents of new `grub.cfg` in editor without root permission
:   `sudo cat /boot/grub2/grub.cfg > ~/Downloads/grub.cfg`

#### place the quoted 99toshiba script (below) in `/etc/pm/sleep.d/` where the content of the script for /etc/pm/sleep.d/99toshiba is:

```
#!/usr/bin/env sh
# /etc/pm/sleep.d/99toshiba

if [ $1 == suspend ]
then
cat /sys/class/backlight/intel_backlight/brightness > /var/run/brightness
elif [ $1 == resume ]
then
echo 3 > /sys/class/backlight/toshiba/brightness
cat /var/run/brightness > /sys/class/backlight/intel_backlight/brightness
fi
```

Also remember to make it runnable to root
:   `chmod 744 /etc/pm/sleep.d/99toshiba`

### update Fedora using FedUp

Using a network source is the easiest method of upgrading and will pull in updates while upgrading - eliminating the potential issue if your current system has a newer kernel version than the Fedora release to which you are upgrading.

Start the upgrade prep by executing following command
:   `sudo yum update fedup fedora-release`

If you are upgrading from Fedora 20 to Fedora 21, run the following command
:   `sudo fedup --network 21 --product=[workstation | server| cloud | nonproduct]`

If you are upgrading from Fedora 21 to Fedora 22 or above, run the following command
:   `sudo fedup --network 22`

Once the preparations have completed, check the `/var/log/fedup.log` file if any errors show up in the output from fedup

Source: [FedUp](https://fedoraproject.org/wiki/FedUp)

## GNOME

log out via the terminal
:   `gnome-session-quit`

## Cache

old releases
:   `yum clean all --releasever=19`

log files
:   `rm -r /var/log/journal/*`

install or update Adobe Flash Player
:   `yum install flash-plugin`

## Environment variables

`/etc` directory
:   global settings (used for `sudo`), otherwise overwritten by files in home directory
    `/etc/environment` define `PATH` variable, e.g. texlive path or `http_proxy` for `curl`
    `/etc/profile` global environment
    `/etc/bashrc` global functions and aliases

### Bash

#### string operations

##### `sed`

- not working [Grymoire: `sed` Introduction](http://www.grymoire.com/Unix/Sed.html)
- [http://web.eecs.utk.edu: Sed/Ed lecture](http://web.eecs.utk.edu/~cs300/Sed/lecture.html)
- [nixCraft: Linux/Unix: Shell Remove Empty Lines](http://www.cyberciti.biz/faq/unix-linux-shell-remove-delete-empty-lines/)

global replace
:   `sed -e 's:\\(:(:g' $path/${file}_temp.md > $path/${file}_temp2.md`

complex expression to replace multiple blank lines with two blank lines, see [stackexchange: How to remove multiple blank lines from a file?](http://unix.stackexchange.com/questions/72739/how-to-remove-multiple-blank-lines-from-a-file)
:   `sed -r ':a; /^\s*$/ {N;ba}; s/( *\n *){2,}/\n\n/'`

combine with `printf`
:   `printf "line one\\nline two\\n" | sed -e 's/.*/( & )/'`

##### `tr`

remove newline
:   `tr '\n' ' ' < input_filename`

remove newline
:   `tr -d '\n' < file`

#### startup files

`~/` home directory
:   `ls -a` show all files in directory
    order of execution
    1. `.bash_profile` private equivalent of `/etc/profile`, source from `.bashrc`
    2. `.bashrc` sources from `/etc/bashrc`
    2. `.bash_login`
    3. `.profile` modify environment variables, e.g `PATH`

create simple http server
:   `cd ~/Downloads/scipy-lectures.github.com-master/ \`
    `&& python -m SimpleHTTPServer`

### Example: proxy settings

- in order to use `yum`, the global environment variable `http_proxy` needs to be defined
- this can be achieved with `sudo su`, `http_proxy=http://wsg-proxy.oecd.org:80`, `export http_proxy`

## grep

return all files with a specific extension
:   `ls -al | grep .git`

return all occasions with "PATH"
:   `grep -i "PATH" .*`

search files in path recursively, only print filename
:   `grep -rl "gh-training-logo" [path]`

remove all files with a specific pattern
:   `rm sample*.log`

change theme for specific window
:   `xprop -f _GTK_THEME_VARIANT 8u -set _GTK_THEME_VARIANT dark`

convert pdf to text
:   `pdftotext [file]`

### ToDo

- create ruby module to pick up page source md file, generate pdf and trigger file download with default location and file name
