---
layout   : post
category : technical
tagline  :
tags     :
---
{% include JB/setup %}

## Security

disable Bash history
:   `$ set +o history` and `$ set -o history` to enable again

## DNS

check CNAME using `dig`
:   `$ dig bowerth.github.io +nocmd +nostats +noquestion`

## System information

### Fan speed

use `sensors` command of `Lm_sensors` to monitor
:   `$ sensors`

### Battery status

display location of `upower`
:   `$ upower -e`

check status
:   `$ upower -i /org/freedesktop/UPower/devices/battery_BAT0`

```
energy: 46.5964 Wh  
energy-full: 52.2423 Wh  
energy-rate: 16.5406 W  
time to full: 20.5 minutes  
percentage: 89%  
```

using `acpi`
:   `$ acpi -V`  
    `Battery 0: design capacity 6930 mAh, last full capacity 6838 mAh = 98%`

## root

set root password
:   log in as root `$ sudo -s`  
    set password `$ passwd`

## aMule

### aMule CMD

- [wiki.amule.org: FAQ amulecmd](http://wiki.amule.org/wiki/FAQ_amulecmd)

modify parameters in `~/.aMule/amule.conf`

```
[ExternalConnect]
AcceptExternalConnections=1
ECPassword=
```

create password
:   `$ echo -n yourpasswordhere | md5sum | cut -d ' ' -f 1`

start aMule and connect using `amulecmd`
:   `$ amulecmd` (type password)

## Dropbox

[ask.fedoraproject.org: dropbox failed synchronize cache for repo](https://ask.fedoraproject.org/en/question/78130/dropbox-failed-synchronize-cache-for-repo)

modify repo file
:   `/etc/yum.repos.d/dropbox.repo` from `baseurl=http://linux.dropbox.com/fedora/$releasever/` to `baseurl=http://linux.dropbox.com/fedora/22/`

## Docker Cloud Images

- [Download Fedora 23 Cloud: Docker Image](https://getfedora.org/en/cloud/download/docker.html)

## IDEs

- [PyCharm](https://www.jetbrains.com/pycharm)

## Programs

### Google Chrome

- [Edit with Emacs](https://addons.mozilla.org/en-US/firefox/addon/firemacs/)

### Mozilla Firefox

#### Add-ons

- [HTitle](https://addons.mozilla.org/fr/firefox/addon/htitle/)
- [Firemacs](https://addons.mozilla.org/en-US/firefox/addon/firemacs/)

### Thunderbird

install thunderbird
:   `sudo dnf install thunderbird`

#### Add-ons

- [Theme: TT Deep Dark](https://addons.mozilla.org/fr/thunderbird/addon/tt-deepdark)
- [CompactHeader](https://addons.mozilla.org/fr/thunderbird/addon/compactheader)
- [Enigmail](https://addons.mozilla.org/fr/thunderbird/addon/enigmail)
- [gContactSync](https://addons.mozilla.org/fr/thunderbird/addon/gcontactsync/)

#### Composition: plain text and HTML

activate default message composition in HTML (where defaults can be specified, e.g. using themes)
:   `Edit > Preferences > Account Settings > Composition & Addressing > "Compose messages in HTML format"`

force to send messages as plain text
:   `Menu > Preferences > Preferences > Composition > Send Options > "Convert the messages to plain text"`

display of plain text messages
:   `Edit > Preferences > Display > Fonts & Colors > Colors... > [select colors] > "override the colors..." [always]

#### userChrome.css

edit `userChrome.css` in profile folder (create `chrome` folder if doesn't exist)
:   `~/.thunderbird/[userprofile].default/chrome/userChrome.css`

### Skype

- [ask.fedoraproject.org: sticky-how-do-i-install-skype-on-fedora](https://ask.fedoraproject.org/en/question/8738/sticky-how-do-i-install-skype-on-fedora)
- install dependencies `sudo dnf -y install libXv.i686 libXScrnSaver.i686 qt.i686 qt-x11.i686 pulseaudio-libs.i686 pulseaudio-libs-glib2.i686 alsa-plugins-pulseaudio.i686`
- download Fedora RPM from [skype.com/download-skype](http://www.skype.com/en/download-skype/skype-for-linux)
- navigate to download folder and execute `sudo dnf install skype-*.rpm`

- GNOME integration [github.com: chrisss404: gnome-shell-ext-SkypeNotification](https://github.com/chrisss404/gnome-shell-ext-SkypeNotification)

## Encryption

### Passwords

- [keepassx](https://www.keepassx.org/)

install keepassx on Fedora 22
:   `sudo dnf install keepassx`

### GPG

- [gpg cheat sheet](http://irtfweb.ifa.hawaii.edu/~lockhart/gpg/gpg-cs.html)

list keys
:   `gpg --list-keys`

to export a public key into file `public.key`
:   `gpg --export -a "User Name" > public.key`

delete a public key (from your public key ring)
:   `gpg --delete-key "User Name"`

to import a public key
:   `gpg --import [public key file]`

to export a private key
:   `gpg --export-secret-key -a "User Name" > private.key`

to import a private key
:   `gpg --allow-secret-key-import --import private.key`

## Ubuntu

### Flash player

- download .deb file from ppa launchpad
- remove existing flash installations (`flashplayer-installer`, `flash-plugin`)
- close browser
- install using `sudo dpkg -i [package name]`

## Fedora Server

- [getfedora.org: server](https://getfedora.org/server/)

## CentOS 7

adjust screen brightness
:   `$ xrandr --output LVDS1 --brightness 0.7` e.g. for 70%

## Fedora

### Differences to Redhat and CentOS

- [danielmiessler.com: The Difference Between Fedora, Redhat, and CentOS](https://danielmiessler.com/study/fedora_redhat_centos)

### Install Workstation Live Image

- [Fedora 23 Installation Guide](https://docs.fedoraproject.org/en-US/Fedora/23/html/Installation_Guide/)

### install or update Adobe Flash Player

#### Fedora 21

- `$ yum install flash-plugin`

#### Fedora 22

- download .rpm version from https://get.adobe.com/flashplayer/
- `$ sudo dnf remove flash-plugin`
- `$ sudo rpm -i ~/Downloads/flash-plugin-[version]-release.x86_64.rpm`

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

### update Fedora 22 to 23 using DNF system upgrade

- [fedoraproject.org: DNF system upgrade](https://fedoraproject.org/wiki/DNF_system_upgrade)

update your system using the standard updater for your desktop or pkcon or dnf
:   `$ sudo dnf update --refresh`

install Package-x-generic-16.pngdnf-plugin-system-upgrade package:
:   `$ sudo dnf install dnf-plugin-system-upgrade`

download the updated packages
:   `$ sudo dnf system-upgrade download --releasever=23`

trigger the upgrade process
:   `$ sudo dnf system-upgrade reboot`

install unsigned packages
:   add `--nogpgcheck`

### update Fedora 21 to 22 using FedUp

Using a network source is the easiest method of upgrading and will pull in updates while upgrading - eliminating the potential issue if your current system has a newer kernel version than the Fedora release to which you are upgrading.

Start the upgrade prep by executing following command
:   `sudo yum update fedup fedora-release`

If you are upgrading from Fedora 20 to Fedora 21, run the following command
:   `sudo fedup --network 21 --product=[workstation | server| cloud | nonproduct]`

If you are upgrading from Fedora 21 to Fedora 22 or above, run the following command
:   `sudo fedup --network 22`

Once the preparations have completed, check the `/var/log/fedup.log` file if any errors show up in the output from fedup

Source: [FedUp](https://fedoraproject.org/wiki/FedUp)

## Language Support

simplified chinese (non-Unicode)
:   `sudo dnf groupinstall simplifided-chinese-support`

## Wayland

- [wayland.freedesktop.org](https://wayland.freedesktop.org/)

Wayland is intended as a simpler replacement for X, easier to develop and maintain.

## i3 A window tile manager

- [i3wm.org: i3 Reference Card](https://i3wm.org/docs/refcard.html) 
- [blog.hugochinchilla.net: Using Gnome 3 with i3 window manager](http://blog.hugochinchilla.net/2013/03/using-gnome-3-with-i3-window-manager/)

kill GNOME desktop
:   `$ xkill` and click GNOME desktop

## GNOME

log out via the terminal
:   `gnome-session-quit`

- GNOME Tweak Tool: install via package manager
- [makeuseof.com: Make Gnome Shell Usable With These 12 Extensions](http://www.makeuseof.com/tag/make-gnome-shell-usable-12-extensions)

### Terminal

- [GNOME Terminator](http://gnometerminator.blogspot.fr/p/introduction.html)
- [github: zzrough: gs-extensions-drop-down-terminal](https://github.com/zzrough/gs-extensions-drop-down-terminal)

### CSS

- [archlinux: Reducing the titlebar height in GNOME 3.16](https://bbs.archlinux.org/viewtopic.php?id=195883)
- [archlinux: Restore old shell more or less](https://bbs.archlinux.org/viewtopic.php?pid=1518698#p1518698)

Create `~/.config/gtk-3.0/gtk.css` with the following content and restart the shell.

```css
/* .header-bar.default-decoration { */
/*     padding-top: 3px; */
/*     padding-bottom: 3px; */
/*     border: none; */
/*     background-image: linear-gradient(to bottom, */
/*                                       shade(@theme_bg_color, 1.05), */
/*                                       shade(@theme_bg_color, 0.99)); */
/*     box-shadow: inset 0 1px shade(@theme_bg_color, 1.4); */
/* } */

/* .header-bar.default-decoration .button.titlebutton { */
/*     padding-top: 2px; */
/*     padding-bottom: 2px; */
/* } */

# small title bar

.header-bar.default-decoration {
    padding-top: 3px;
    padding-bottom: 3px;
}

.header-bar.default-decoration .button.titlebutton {
    padding-top: 2px;
    padding-bottom: 2px;
}
```

## GNU

### [Screen](http://www.gnu.org/software/screen) 

Screen is a full-screen window manager that multiplexes a physical terminal between several processes, typically interactive shells.

open help
:   `$ C-a ?`

## Disk usage

with gui
:   `$ sudo baobab`

list directories by size
:   `$ sudo du /|sort -gr|more`

## Cache

clean `/var/cache`
:   `sudo dnf clean all`

old releases
:   `yum clean all --releasever=19`

log files
:   `rm -r /var/log/journal/*`

## Environment variables

`/etc` directory
:   global settings (used for `sudo`), otherwise overwritten by files in home directory

`/etc/environment`
:   define `PATH` variable, e.g. texlive path or `http_proxy` for `curl`

`/etc/profile`
:   global environment

`/etc/bashrc`
:   global functions and aliases

### make files

- [eecis.udel.edu: Example Makefile](http://www.eecis.udel.edu/~gibson/classes/181/make.html#make2)

### shell commands, bash files

terminate a process
:   `killall -9 firefox`

#### `ls`

list all files and directories in path
:   `ls $HOME`

#### `find`

find files in path
:   `find $HOME/. -maxdepth 1 -type f`

#### executable script files

make bash file executable
:   `sudo chmod +x file`

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

## PDF commands

convert pdf to text
:   `pdftotext [file]`

reduze PDF file size
:   `convert -density 200x200 -quality 60 -compress jpeg input.pdf output.pdf`

### ToDo

- create ruby module to pick up page source md file, generate pdf and trigger file download with default location and file name
