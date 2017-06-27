---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}


## Clone rstudio

~~~
cd ~/src/R
git clone git@github.com:rstudio/rstudio
cd rstudio
~~~


## MIT Build Instructions

- [Installing RStudio from Source](http://web.mit.edu/r/current/RStudio/INSTALL)

from the root of the RStudio tree create a build directory and then change to it:

~~~
mkdir build
cd build
~~~

configure the build using cmake as appropriate, e.g.

~~~
cmake .. -DRSTUDIO_TARGET=Server -DCMAKE_BUILD_TYPE=Release
~~~

install

~~~
sudo make install
~~~

afterwards, make sure that folders are not looked for the user account

~~~
sudo chown -R xps13 ~/src/R/rstudio/src/gwt
~~~


## Local Development Workflow

- [Development Workflow](https://github.com/rstudio/rstudio/wiki/RStudio-Development)

dependencies:

~~~
cd dependencies/common && bash install-common
~~~

compile:

~~~
cd src/build-cpp-Desktop-Default/ 
make clean
make -j4
~~~

modify `conf/rserver-dev.conf` to disactivate user authentication:

~~~
# always authenticate users (defaults to no-auth if not running as root)
auth-none=1
~~~

start server:

~~~
cd src/build-cpp-Desktop-Default/ && bash rserver-dev
~~~


## Vagrant Development

- comment line 42 in `provision-primary-user.sh`

~~~
# perform overlay config
# ./provision-primary-overlay.sh
~~~

- install vagrant from https://www.vagrantup.com/downloads.html

~~~
sudo rpm -i ~/Downloads/vagrant_1.9.4_x86_64.rpm 
service libvirtd restart
cd ~/src/R/rstudio
vagrant up --debug
vagrant ssh
~~~

if java 8 missing:

~~~
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
sudo update-java-alternatives -s java-8-oracle
~~~

build the UI:

~~~
cd ~/rstudio/src/gwt/ && ant-draft
~~~

see https://pbil.univ-lyon1.fr/CRAN/bin/windows/base/NEWS.R-3.4.0patched.html: "The deprecated styles member of the R_CMethodDef and R_FortranMethodDef structures has been removed."

comment line 62 in `src/cpp/r/RRoutines.cpp`:

~~~
void registerAll()
{
   // c methods
   R_CMethodDef* pCMethods = NULL;
   if (s_cMethods.size() > 0)
   {
      R_CMethodDef nullMethodDef ;
      nullMethodDef.name = NULL ;
      nullMethodDef.fun = NULL ;
      nullMethodDef.numArgs = 0 ;
      nullMethodDef.types = NULL;
      s_cMethods.push_back(nullMethodDef);
      pCMethods = &s_cMethods[0];
   }
   // nullMethodDef.styles = NULL;
...
~~~

link shared library `libicui18n.so.55`, `libicuuc.so.55`:

~~~
ldconfig -p | grep libicu*
sudo ln -s /usr/lib/x86_64-linux-gnu/libicui18n.so.52 /usr/lib/x86_64-linux-gnu/libicui18n.so.55
sudo ln -s /usr/lib/x86_64-linux-gnu/libicuuc.so.52 /usr/lib/x86_64-linux-gnu/libicuuc.so.55
~~~

build RStudio

~~~
cd ~/rstudio-build
make
~~~

run the server

~~~
cd ~/rstudio-build && bash rserver-dev
~~~

open RStudio server on your host by going to http://localhost:8787/

install previous / multiple versions of R (3.4 not supporting plot output of RStudio)
https://support.rstudio.com/hc/en-us/articles/215488098-Installing-multiple-versions-of-R

~~~
wget https://cran.r-project.org/src/base/R-3/R-3.3.3.tar.gz
tar -xvf R-3.3.3.tar.gz
cd R-3.3.3
./configure --prefix=/home/vagrant/R/x86_64-pc-linux-gnu-library/3.3 --enable-R-shlib --with-blas --with-lapack
make
make install
~~~

modify `conf/rserver-dev.conf` to select R version:

~~~
# set which r from config
# rsession-which-r=/usr/bin/R
rsession-which-r=/home/vagrant/R/x86_64-pc-linux-gnu-library/3.3/bin/R
~~~

- restart RStudio Server
- restart session

~~~
3 May 2017 01:25:12 [rsession-vagrant] ERROR system error 37 (No locks available); OCCURRED AT: virtual rstudio::core::Error rstudio::core::LinkBasedFileLock::acquire(const rstudio::core::FilePath&) /home/vagrant/rstudio/src/cpp/core/file_lock/LinkBasedFileLock.cpp:302; LOGGED FROM: int rstudio::r::session::RReadConsole(const char*, CONSOLE_BUFFER_CHAR*, int, int) /home/vagrant/rstudio/src/cpp/r/session/RSession.cpp:718
13 May 2017 01:25:12 [rsession-vagrant] ERROR R SUICIDE: ERROR system error 37 (No locks available); OCCURRED AT: virtual rstudio::core::Error rstudio::core::LinkBasedFileLock::acquire(const rstudio::core::FilePath&) /home/vagrant/rstudio/src/cpp/core/file_lock/LinkBasedFileLock.cpp:302; LOGGED FROM: void {anonymous}::rSuicide(const string&) /home/vagrant/rstudio/src/cpp/session/SessionMain.cpp:2479
~~~

stopping vagrant:

~~~
vagrant halt
~~~


## GWT

Google Web Toolkit (GWT) is a development toolkit for building and optimizing complex browser-based applications. GWT is used by many products at Google, including Google AdWords and Orkut.

GWT is open source, completely free, and used by thousands of developers around the world. It is licensed under the Apache License version 2.0.


## Download

- [download gwt sdk](http://www.gwtproject.org/download.html)

## webAppCreator

- [gwtproject: doc: webAppCreator](http://www.gwtproject.org/doc/latest/RefCommandLineTools.html#webAppCreator)

## Links

- [tutorialspoint.com: Learn GWT](http://www.tutorialspoint.com/gwt/)


## GWT Hacks

### Logo

`src/org/rstudio/studio/client/application/ui/impl/WebApplicationHeader.java`

~~~
// large logo
logoLarge_ = new Image(new ImageResource2x(ThemeResources.INSTANCE.rstudio2x()));
((ImageElement)logoLarge_.getElement().cast()).setAlt("RStudio");
logoLarge_.getElement().getStyle().setBorderWidth(0, Unit.PX);

// small logo
logoSmall_ = new Image(new ImageResource2x(ThemeResources.INSTANCE.rstudio_small2x()));
((ImageElement)logoSmall_.getElement().cast()).setAlt("RStudio");
logoSmall_.getElement().getStyle().setBorderWidth(0, Unit.PX);
~~~

`src/org/rstudio/core/client/theme/res/ThemeResources.java`

~~~
@Source("rstudio_2x.png")
ImageResource rstudio2x();

@Source("rstudio_small_2x.png")
ImageResource rstudio_small2x();
~~~

- `/client/src/org/rstudio/core/client/theme/res/rstudio_2x.png`
- `/client/src/org/rstudio/core/client/theme/res/rstudio_small_2x.png`

### Menu

`/client/src/org/rstudio/studio/client/workbench/commands/Commands.java`

~~~
// oecd
public abstract AppCommand oecdMru0();
public abstract AppCommand oecdMru1();
~~~

`/client/src/org/rstudio/studio/client/application/ui/GlobalToolbar.java`

~~~
// oecd menu
ToolbarPopupMenu oecdMenu = new ToolbarPopupMenu();
oecdMenu.addItem(commands_.oecdMru0().createMenuItem(false));
oecdMenu.addItem(commands_.oecdMru1().createMenuItem(false));
addLeftSeparator();
ToolbarButton oecdButton = new ToolbarButton(
     "OECD", CoreResources.INSTANCE.iconEmpty(), oecdMenu);
addLeftWidget(oecdButton);
~~~
