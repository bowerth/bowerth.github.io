---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}


## LineageOS

- [Install LineageOS on Z00D](https://wiki.lineageos.org/devices/Z00D/install)
- [Setup ADB and Fastboot](https://wiki.lineageos.org/adb_fastboot_guide.html#installing-adb-and-fastboot)

### Download 14.1 ROM

- [Builds for Z00D](https://download.lineageos.org/Z00D)
- eg. lineage-14.1-20171013-nightly-Z00D-signed.zip

### Download GApps

- [opengapps.org](http://opengapps.org)
- [Zenfone 2 (ZE500CL) ZOOD](https://wiki.lineageos.org/devices/Z00D)
- Platform: x86
- Android: 7.1
- Variant: nano
- Date: 22 October 2017
- Size: 122.12 MiB

### Download su add-on

- [LineageOS Downloads - Extras](https://download.lineageos.org/extras)
- Name: su (x86)
- Version: 14.1
- File: addonsu-14.1-x86-signed.zip
- Date: 2017-06-21

### enable USB debugging

- Settings > About > Firmware > tap "Version" 7 times
- go back to settings, scroll to "Developer Options"
- enable "USB Debugging"
- connect USB cable
- allow connections on phone from PC
- test access using `adb devices`
- copy lineage, open_gapps and addonsu to phone internal memory

```
adb push lineage-14.1-20171013-nightly-Z00D-signed.zip /sdcard/
adb push open_gapps-x86-7.1-nano-20171022.zip /sdcard/
adb push addonsu-14.1-x86-signed.zip /sdcard/
```

### Unlock Device App

- [Driver & Tools: ZenFone_2_ZE500CL](https://www.asus.com/Phone/ZenFone_2_ZE500CL/HelpDesk_Download/)
- Utilities
- Unlock Device App: Unlock boot loader
- Version: V1.0
- Date: 2016/02/25
- Size: 747.17 KBytes
- direct link [ZE500CL_UnlockTool_0909.apk](http://dlcdnet.asus.com/pub/ASUS/ZenFone/ZE500CL/ZE500CL_UnlockTool_0909.apk)

```
adb install ZE500CL_UnlockTool_0909.apk
```

### Download TWRP Zenfone 2 Z00D

- [Download LP BOOTLOADER/FIRMWARE](http://theflamingskull.com/zenfone2.html)
- [TWRP for Z00D 3.0.2-2 Download](http://theflamingskull.com/downloads/z00d/TRWP-recovery-Z00D-3.0.2-2.img)

```
adb devices
adb reboot bootloader
fastboot devices
fastboot flash recovery TRWP-recovery-Z00D-3.0.2-2.img
adb reboot bootloader
```

- follow [TWRP instructions](https://wiki.lineageos.org/devices/Z00D/install#installing-lineageos-from-recovery)



## `android`

update Android SDK
:   `$ android sdk update`

update project to create `local.properties`
:   `$ android update project -p /path/to/project -t android-23`

## `ant`

- [Error, Reference Project.libraries.jar not found #2](https://github.com/michelou/android-examples/issues/2)

debug
:   `$ ant debug`

release
:   `$ ant release`

## Connect device

- got to "Settings" - "About" and tap build number 7 times
- developer options appear in main settings
- activate "debugging over USB"

check connect status of device
:   `$ cd $ANDROID_HOME/platform-tools/`  
	`$ adb devices`

if device unauthorized, restart `adb-server`
:   `$ adb kill-server`  
	`$ adb start-server`

install without remove
:   `$ adb install -r "bin/FileStorage-debug.apk"`

copy a file to SD card
:   `$ adb push lineage-14.1-20171013-nightly-Z00D-signed.zip /sdcard/`


## Create from HTML, CSS, and JavaScript

### [Apache Cordova](https://cordova.apache.org/)

Cordova wraps your HTML/JavaScript app into a native container which can access the device functions of several platforms. These functions are exposed via a unified JavaScript API, allowing you to easily write one set of code to target nearly every phone or tablet on the market today and publish to their app stores.

### [PhoneGap](http://phonegap.com/)

PhoneGap is the original and most popular distribution of Apache Cordova. 

## Android SDK

### Android SDK setup

after download and extract SDK tools (approx 17 GB)
:   `bash tools/android`

install 32bit libraries
:   `sudo dnf install zlib.i686 libstdc++.i686 libstdc++-devel.i686`

set SDK dir environment variable
:   edit `ANDROID_HOME` in `~/.profile`

### AVDs

- [developer.android.com: Managing AVDs from the Command Line](http://developer.android.com/tools/devices/managing-avds-cmdline.html)

to generate a list of system image targets, use this command
:   `$ android list targets`

create AVD, supplying the target ID as the -t argument name "my_android6.0" and target ID (from `list targets`: 1 or "android-23")
:   `$ android create avd -n my_android6.0 -t 1 --abi "default/armeabi-v7a"`

list avds
:   `$ android list avd`

start AVD (takes 100% of one of four cores)
:   `$ emulator -avd my_android6.0`

### Debug using real device and JDB

list processes
:   `$ cd $ANDROID_HOME/platform-tools/`
	`$ adb jdwp`

forward last process in list to tcp port
:   `$ adb forward tcp:8700 jdwp:13358` 

start debugging using jdb (e.g. in Emacs `M-x jdb`)
:   `$ jdb -attach localhost:8700 -sourcepath /tmp/android`

stop port forwarding
:   `$ adb forward --remove tcp:8700` or `$ adb forward --remove-all`

use bash script to connect
:   `$ cd ~/Dropbox/Programming/Android/`  
	`$ bash jdb-connect.sh`

list and select threads
:   `> threads`  
    `> thread 0xc142056538`  
    `> suspend 0xc142056538`
    `> cont`

list breakpoints
:   `> stop`

load class
:   `> class com.example.macroid.starter.GreetingActivity`

list methods in class
:   `> methods com.example.macroid.starter.GreetingActivity`

set breakpoint
:   `> stop in com.example.macroid.starter.GreetingActivity.save_button()`

clear breakpoint
:   `> clear com.example.macroid.starter.GreetingActivity.save_button()`

### ADB shell operations

connect to interactive shell
:   `adb shell`

navigate and list files
:   `shell@android:/ $ cd /storage/sdcard0/Download/`  
	`shell@android:/ $ ls`

batch command
:   `$ adb shell "ls /storage/sdcard0/Download/"`

### Emulator

- [developer.android.com: Emulator](http://developer.android.com/tools/devices/emulator.html)

### Create new project

create `ant` build file in project directory (name and target are optional)
:   `android create project --name test_project --target 1 --path /home/xps13/Dropbox/GitHub/android-project --package home.xps13.HelloAndroid --activity HelloAndroid`

run if `build.xml` file missing (e.g. created from Eclipse) or `local.properties` file missing
:   `android update project --path . --target android-23 --subprojects`

### Contents of new project

| -- res
| ---- main.xml
| ...
| -- src
| ---- home/xps13/HelloAndroid/HelloAndroid.java

#### `HelloAndroid.java`

- `setContentView(R.layout.main);`

#### `main.xml`

~~~java
<LinearLayout ...>  
  <TextView ... android:text="Hello World, HelloAndroid"  
  />  
</LinearLayout>
~~~

### Example applications

#### Flashlight

location
:   `~/android-sdk-linux/samples/android-23/wearable/Flashlight`
