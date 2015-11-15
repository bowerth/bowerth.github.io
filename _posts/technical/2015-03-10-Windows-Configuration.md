---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}

list members of Windows group
:   `net group STANPUB_Reader /domain`

## Default Programs

### Sublime as default editor

- Open regedit (Win+R, type "regedit", select OK).
- Navigate to HKEY_CLASSES_ROOT\Applications\sublime_text.exe\shell\open\command
- Verify that the path is accurate, correct it if it is not. Exit regedit.
- Open task manager via Ctrl+Alt+Del (or Ctrl+Shift+Esc for later versions of Windows), kill explorer.exe, go to run (Win+R) and type "explorer.exe" (or skip this step and simply reboot).
- Now attempt the same thing, right click a text file, open with, navigate to sublime, and it should now appear in the list of available applications.

## Python webserver

SimpleHTTPServer
:   `python -m SimpleHTTPServer 8000`
