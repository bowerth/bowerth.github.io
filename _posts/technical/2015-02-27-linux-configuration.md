---
layout   : post
category : technical
tagline  :
tags     :
---
{% include JB/setup %}


## RPM files

extract example

~~~
cd ~/Downloads
mkdir mariadb
mkdir mariadb/10.2
cd mariadb/10.2
rpm2cpio ../../MariaDB-devel-10.2.8-1.fc26.x86_64.rpm | cpio -idmv
~~~


## GNU parallel

- [GNU parallel project page](http://savannah.gnu.org/projects/parallel/)

## USB

display list of devices
:   `lsusb`


## clean dnf database

- [Auto Remove Command](http://dnf.readthedocs.io/en/latest/command_ref.html?highlight=autoremove#auto-remove-command)

`@@commandline` packages can be removed using `dnf autoremove` command

list packages
:   `sudo dnf list autoremove`

remove listed packages
:   `sudo dnf autoremove`

if script is preventing package from removal
:   `sudo dnf --setopt=tsflags=noscripts remove gnome-tweak-tool`


## Mendeley Desktop

- [mendeley-rpm](https://github.com/hmaarrfk/mendeley-rpm/releases)


### Dependencies

- `qt5-qtwebengine`

### Installation

- download latest version from releases
- run `sudo rpm -ivh mendeleydesktop-*.rpm`


## File manager

### nemo

add shortcut to open terminal

- search for "terminal" in `~/.gnome2/accels/nemo`
- insert e.g. `F4` as shortcut

## Fonts

### Font Manager

GUI to import and manage user fonts

install
:   `dnf install -y font-manager`


## flatpak

list installed runtimes and applications do
:   `flatpak list`

~~~
org.gnome.Games/x86_64/master           system,current
org.gnome.Games.Locale/x86_64/master    system,runtime
org.gnome.Platform.Locale/x86_64/3.20   system,runtime
org.gnome.Platform.Locale/x86_64/master system,runtime
org.gnome.Platform/x86_64/3.20          system,runtime
org.gnome.Platform/x86_64/master        system,runtime
~~~

uninstall a runtime or application named `name`
:   `flatpak uninstall name`

~~~
$ flatpak uninstall Games
$ flatpak uninstall org.gnome.Platform//3.20
$ flatpak uninstall org.gnome.Platform//master
~~~

## Screencast

### Vokoscreen

- [kohaupt-online.de/hp/](http://www.kohaupt-online.de/hp/)
- [github.com: vkohaupt: vokoscreen](https://github.com/vkohaupt/vokoscreen)

### OpenShot

- [openshotvideo.com](http://www.openshotvideo.com/)
- [appimage.org](http://appimage.org/)

install
:   `$ mkdir ~/AppImage`  
    `$ cd ~/AppImage`  
    `$ chmod +x OpenShot-v2.2.0-x86_64.AppImage`  
    `$ ./OpenShot-v2.2.0-x86_64.AppImage`

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

~~~
energy: 46.5964 Wh  
energy-full: 52.2423 Wh  
energy-rate: 16.5406 W  
time to full: 20.5 minutes  
percentage: 89%  
~~~

using `acpi`
:   `$ acpi -V`  
    `Battery 0: design capacity 6930 mAh, last full capacity 6838 mAh = 98%`

## root

set root password
:   log in as root `$ sudo -s`  
    set password `$ passwd`

## [Nix](http://nixos.org/nix/) The Purely Functional Package Manager

download and run install script
:   `$ curl https://nixos.org/nix/install | sh`

reload `~/.bash_profile`
:   `$ source ~/.bash_profile`

## aMule

### aMule CMD

- [wiki.amule.org: FAQ amulecmd](http://wiki.amule.org/wiki/FAQ_amulecmd)

modify parameters in `~/.aMule/amule.conf`

~~~
[ExternalConnect]
AcceptExternalConnections=1
ECPassword=
~~~

create password
:   `$ echo -n yourpasswordhere | md5sum | cut -d ' ' -f 1`

start aMule and connect using `amulecmd`
:   `$ amulecmd` (type password)

## C* (cmus)

- [github: cmus](https://github.com/cmus)

### install dependencies

- `libmad-devel`
- `libcue  |   libcue-devel    |   OK`
- `libpulse    |   pulseaudio-libs-devel   |   OK`
- `pulseaudio  |   pulseaudio-devel    |   OK`
- `samplerate  |   libsamplerate-devel |   OK`
- `libavformat, libavcodec |   ffmpeg-devel    |   OK`
- `opusfile    |   opusfile-devel  |   OK`

### additional output plugins:

- `alsa`
- `jack`
- `libroar`

start
:   `/home/xps13/cmus/bin/cmus`

exit
:   `:quit <Enter>`

list installed output plugins
:   `$ cmus --plugins`

set output device ("no output plugin detected")
:   `:set output_plugin=pulse`

### add files

open file browser
:   `5`

add file/folder
:   `a`

open library view
:   `2`

### create desktop entry

create `~/.local/share/applications/cmus.desktop` with contents:

~~~
[Desktop Entry]
Encoding=UTF-8
Version=1.0
Type=Application
Display=true
Exec=cmus-remote -f %f
Terminal=false
Name=cmus-remote
Comment=Music player cmus-remote control
~~~

## Dropbox

[ask.fedoraproject.org: dropbox failed synchronize cache for repo](https://ask.fedoraproject.org/en/question/78130/dropbox-failed-synchronize-cache-for-repo)

modify repo file
:   `/etc/yum.repos.d/dropbox.repo` from `baseurl=http://linux.dropbox.com/fedora/$releasever/` to `baseurl=http://linux.dropbox.com/fedora/22/`

## Docker Cloud Images

- [Download Fedora 23 Cloud: Docker Image](https://getfedora.org/en/cloud/download/docker.html)

## Programs

### uchardet

identify the encoding of a file
:   `$ uchardet [textfile]`

### [Feednix](http://feednix-jarkore.rhcloud.com/)

Feednix is s simple ncurses-based console client for Feedly

- [github: Jarkore: feednix](https://github.com/Jarkore/Feednix/)

#### Fedora 23

install dependencies
:   `$ sudo dnf install -y dh-autoreconf ncurses-devel jsoncpp-devel libcurl-devel`

configure, make, install
:   `$ ./configure && make && sudo make install`

copy configuration file
:   `$ cp config.json ~/.config/feednix/`

create symbolic link in `/etc/xdg` folder
:   `$ sudo ln -s ~/.config/feednix /etc/xdg/feednix`

enter developer token
:   `...:feedlydev`

start program
:   `$ /usr/bin/feednix` or simply `$ feednix`

#### commands

add new feed
:   `a`

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

### ALSA

- [wiki.archlinux.org: ALSA](https://wiki.archlinux.org/index.php/Advanced_Linux_Sound_Architecture)
- [fedoraproject.org: wiki: how to debug sound problems](https://fedoraproject.org/wiki/How_to_debug_sound_problems)
- [manpages.ubuntu.com: amixer](http://manpages.ubuntu.com/manpages/wily/man1/amixer.1.html)

create report with detailed information about sound hardware
:   `$ alsa-info.sh --no-upload`

use GUI
:   `$ alsamixer -c 1`

get parameter of binary controls
:   `$ amixer -c 0 get 'Headphone Jack'`

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

to encrypt a single file, use command gpg as follows
:   `gpg -c filename`


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

### User management

add an existing user to existing group
:   `$ sudo usermod -a -G hadoop xps13`

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

~~~
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
~~~

Also remember to make it runnable to root
:   `chmod 744 /etc/pm/sleep.d/99toshiba`

### update Fedora 25 to 26  using DNF system upgrade

- needed to install `gnome-tweak-tool` from [GNOME/gnome-tweak-tool](https://github.com/GNOME/gnome-tweak-tool)

~~~
sudo dnf system-upgrade download -y --releasever=26 --allowerasing
dnf system-upgrade reboot
dnf clean packages
~~~


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

~~~css
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
~~~

## GNU

### [Screen](http://www.gnu.org/software/screen) 

Screen is a full-screen window manager that multiplexes a physical terminal between several processes, typically interactive shells.

open help
:   `$ C-a ?`

## Disk usage

with gui
:   `$ sudo baobab`

list directories by size
:   `$ sudo du /|sort -gr|more` for root folder  
    `$ du .|sort -gr|more` for current folder

list files by size
:   `$ find . -type f -exec du --human {} + | sort --human --reverse | head`

list files recursively by partial string
:   `$ find -iname "*hsfclmap*"`

check for incomplete files
:   `$ find -iname "*.tmp"`

## Cache

start as root
:   `sudo baobab`

clean `/var/cache` (large PackageKit folder)
:   `sudo dnf clean all`

using PackageKit console client
:   `sudo pkcon refresh force -c -1`

large `/var/cache/PackageKit`: modify `/etc/PackageKit/PackageKit.conf`
:   `# Keep the packages after they have been downloaded`  
    `#KeepCache=false`  
    run `pkcon refresh force -c -1`

delete PackageKit metadata manually
:   `sudo rm -r /var/cache/PackageKit/25/*`

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

### shell commands, bash files

terminate a process
:   `killall -9 firefox`

#### `find`

list all files recursively with specific extension
:   `$ find . -type f -name "*.epub"`

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

[Limit grep context to N characters on line](http://unix.stackexchange.com/questions/163726/limit-grep-context-to-n-characters-on-line)
:   `N=10; grep -roP ".{0,$N}time.{0,$N}" TariffLineSdmx.xml`

return all files with a specific extension
:   `ls -al | grep .git`

return all occasions with "PATH"
:   `grep -i "PATH" .*`

search for term in subfolder
:   `grep -i ".jParProperties" R/*`

search files in path recursively, only print filename
:   `grep -rl "gh-training-logo" [path]`

remove all files with a specific pattern
:   `rm sample*.log`

change theme for specific window
:   `xprop -f _GTK_THEME_VARIANT 8u -set _GTK_THEME_VARIANT dark`

## PDF

- [Tools for PDF modification on Fedora, by Ryan Lerch](https://fedoramagazine.org/pdf-modification-tools-fedora/)

### jpdftweak

- [jpdftweak.sourceforge.net](http://jpdftweak.sourceforge.net)

Can be used to modify bookmarks (i.e. "Outline" in Evince). The format of a bookmark file in csv format is as follows:

~~~
1;O;1 Scala Language Basics;32 FitH 758
1;O;2 Basics of Object-Orientation and Software Development;82 FitH 758
1;O;3 Details of Object-Orientation in Scala;112 FitH 758
...
~~~

### pdftk

separate into pages
:   `pdftk document.pdf burst`

### pdftotext

convert pdf to text
:   `pdftotext [file]`

search resulting file for RegExp
:   `grep '^[0-9][ ][A-Z].*' scala-toc.txt`

reduze PDF file size
:   `convert -density 200x200 -quality 60 -compress jpeg input.pdf output.pdf`

### qpdf

decrypt
:   `qpdf --password=[...] --decrypt [sourcefile] [destfile]`

combine pages
:   `qpdf --empty --pages "02_Main.pdf" 1-6 "03_Main.pdf" 1-8 -- "out.pdf"`

### PDFMtEd

- [github: Glutanimate:PDFMtEd](https://github.com/Glutanimate/PDFMtEd)

install dependencies Fedora 23
:   `$ sudo dnf install -y yad perl-Image-ExifTool qpdf`

clone repository
:   `$ git clone git@github.com:Glutanimate/PDFMtEd.git`

edit file (*reports error on save and does not recognize existing metadata*)
:   `$ ./pdfmted-editor "/home/xps13/Documents/Mendeley Desktop/Bergeron - 2003 - Essentials of XBRL, Financial Reporting in the 21st Century.pdf"`

### ToDo

- create ruby module to pick up page source md file, generate pdf and trigger file download with default location and file name

## Maintenance

large `/var/log/journal`: modify `/etc/systemd/journald.conf`
:   set `SystemMaxUse=1M`  
    `sudo systemctl restart systemd-journald`  
    set `SystemMaxUse=200M`  
    `sudo systemctl restart systemd-journald`  

## Links

- [The Linux Command Line - William E. Shotts, Jr.](https://courseweb.pitt.edu/bbcswebdav/institution/Pitt%20Online/MLIS_Pitt_Online/LIS%202600/Intro%20Module/LIS_2600_%20M1_Shotts%202009.pdf)
