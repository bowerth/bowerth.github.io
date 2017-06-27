---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}

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
