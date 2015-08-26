---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}


### Android SDK setup

after download and extract SDK tools (approx 17 GB)
:   `bash tools/android`

install 32bit libraries
:   `sudo dnf install zlib.i686 libstdc++.i686 libstdc++-devel.i686`



### AVDs

- [developer.android.com: Managing AVDs from the Command Line](http://developer.android.com/tools/devices/managing-avds-cmdline.html)

to generate a list of system image targets, use this command
:   `android list targets`

creat AVD, supplying the target ID as the -t argument name "my_android6.0" and target ID (from `list targets`: 1 or "android-23")
:   `android create avd -n my_android6.0 -t 1 --abi "default/armeabi-v7a"`

start AVD (takes 100% of one of four cores)
:   `emulator -avd my_android6.0`

### Emulator

- [developer.android.com: Emulator](http://developer.android.com/tools/devices/emulator.html)

### Projects

create `ant` build file in project directory (name and target are optional)
:   `android create project --name test_project --target 1 --path /home/xps13/Dropbox/GitHub/android-project --package home.xps13.HelloAndroid --activity HelloAndroid`

run if `build.xml` file missing (e.g. created from Eclipse) or `local.properties` file missing
:   `android update project --path . --target android-23 --subprojects`
