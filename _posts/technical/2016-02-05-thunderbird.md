---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}

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

```
vbox#gt_tasks_sync_taskcontainer, #gt_tasks_sync_reorderingcontainer, vbox#gt_tasks_sync_dummycontainer, vbox#gt_tasks_sync_testingcontainer
{
	overflow: auto;
	color: -moz-field;
	/*background-color: -moz-field;*/
}
```
