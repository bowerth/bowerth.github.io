---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}

## Import from Microsoft Outlook pst

- [kb.mozillazine.org: Import .pst files](http://kb.mozillazine.org/Import_.pst_files)

install `readpst`
:   `$ sudo dnf install -y libpst`

convert for Thunderbird, see [link](https://www.exratione.com/2013/11/importing-email-from-outlook-on-windows-to-thunderbird-on-ubuntu/)

~~~
cd ~/Downloads
mkdir werth_b
readpst -o ./werth_b -M -u -w -e -b /run/media/xps13/RUGGED/OECD/werth_b.pst
~~~


## External Editor

- [globs.org: External Editor](http://globs.org/articles.php?lng=en&pg=2)
- [os.inf.tu-dresden.de: tbemail.el](http://os.inf.tu-dresden.de/~mp26/emacs.shtml)

### Thunderbird 52.0

- [globs.org Forum](http://globs.org/thread.php?lng=en&pg=3108&fid=1&cat=1)

~~~
Hi, I made a tweak and it seems like working.
Binary: https://github.com/snipsnipsnip/exteditor/releases/download/v1.0.1-unofficial/exteditor_tb52_v101.xpi
Patch: https://github.com/snipsnipsnip/exteditor/commit/4d0f836e4c5b8695df3d59427bd212de234de246
~~~

## Google Task Sync: change background and text color

- [addons.mozilla.org: google-task-sync](https://addons.mozilla.org/en-US/thunderbird/addon/google-tasks-sync)

download and extract contents to folder

go to folder
:   `$ cd /home/xps13/Dropbox/Programming/Thunderbird/google_tasks_sync-0.5.2-tb`

delete current file
:   `$ rm ../google_tasks_sync-0.5.2-tb.xpi`

zip folder contents
:   `$ zip -r ../google_tasks_sync-0.5.2-tb.zip *`

change file extension
:   `$ mv ../google_tasks_sync-0.5.2-tb.zip ../google_tasks_sync-0.5.2-tb.xpi`

install in Thunderbird

### Changes from original

modify `/chrome/skin/google_tasks_sync.css`

- set text `color` to "-moz-field"
- remove `background-color`

~~~
vbox#gt_tasks_sync_taskcontainer, #gt_tasks_sync_reorderingcontainer, vbox#gt_tasks_sync_dummycontainer, vbox#gt_tasks_sync_testingcontainer
{
	overflow: auto;
	color: -moz-field;
	/*background-color: -moz-field;*/
}
~~~
