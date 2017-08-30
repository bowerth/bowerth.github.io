---
layout   : post
category : technical
tagline  :
tags     :
---
{% include JB/setup %}

## Convert EPUB to PDF

- [www.epubconverter.com](https://www.epubconverter.com)


## Markdown and Epub

- [GitHub: mdepub](https://github.com/bkidwell/mdepub)
- Calibre: export text with markdown formatting

## Wine configuration

### Pacman

#### Multilib

- [archlinux: Multilib](https://wiki.archlinux.org/index.php/Multilib)

### Adobe Digital Editions 4.0

- [WineHQ: Adobe Digital Editions 4.0](https://appdb.winehq.org/objectManager.php?sClass=version&iId=30928)

check version of wine (>= 1.7.33)
:   `wine --version`

check winetricks version (>= 20141125)
:   `winetricks -V`

install winetricks if required
:   ~~~
    wget winetricks.googlecode.com/svn/trunk/src/winetricks
    sudo cp -f winetricks /usr/bin
    sudo chmod 555 /usr/bin/winetricks
    ~~~

install WINEPREFIX + 32bit-environment
:   `export WINEPREFIX=~/.wine32a` or similar, e.g. ~/.wine32b

check if you can open a GUI-window
:   `WINEARCH=win32 winecfg`

install `cabextract`
:   `sudo dnf install cabextract`

install corefonts
:   `winetricks -q corefonts dotnet40`

download + install ADE-4.xx (actual version?) in your browser: from www.adobe.com/de/solutions/ebook/digital-editions/download.html
:   `wine ~/Downloads/ADE_4.0_Installer.exe`

start wine
:   `wine "/home/z930/.wine32a/drive_c/Program Files/Adobe/Adobe Digital Editions 4.0/DigitalEditions.exe"`

## DRM tools

- [GitHub: apprenticeharper v6.2.1](https://github.com/apprenticeharper/DeDRM_tools/releases/tag/v6.2.1)
- outdated [GitHub: DeDRM eBook tools](https://github.com/psyrendust/dedrm-ebook-tools)
- [Calibre Plubin Readme](https://raw.githubusercontent.com/psyrendust/dedrm-ebook-tools/master/DeDRM_calibre_plugin/DeDRM_plugin_ReadMe.txt)


### Installation - Linux Systems Only

Instructions for installing Wine, Kindle for PC, Adobe Digital Editions, Python and PyCrypto

1. First download the software you're going to to have to install.
  a. Kindle for PC from http://www.amazon.com/gp/kindle/pc/downloada/
  b. Adobe Digital Editions 1.7.x from http://helpx.adobe.com/digital-editions/kb/cant-install-digital-editions.html
     (Adobe Digital Editions 2.x doesn't work with Wine.)
  c. ActivePython 2.7.X for Windows (x86) from http://www.activestate.com/activepython/downloads
  d. PyCrypto 2.1 for 32bit Windows and Python 2.7 from http://www.voidspace.org.uk/python/modules.shtml#pycrypto
       (PyCrypto downloads as a zip file. You will need to unzip it.)
 2. Install Wine for 32-bit x86.  (e.g. on Ubuntu, Open the Ubuntu Software Center, search for Wine, and install "Wine Windows Program Loader".)
 3. Run "Configure Wine", which will set up the default 'wineprefix'
 4. Run winetricks, select the default wineprefix and install component vcrun2008
 5. Run the mis-named "Uninstall Wine Software", which also allows installation of software.
 6. Install Kindle for PC. Accept all defaults and register with your Amazon Account.
 7. Install Adobe Digital Editions. Accept all defaults and register with your Adobe ID.
 8. Install ActiveState Python 2.7.x. Accept all defaults.
 9. Install PyCrypto 2.1. Accept all defaults.

#### Instructions for getting Kindle for PC and Adobe Digital Editions default decryption keys

If everything has been installed in wine as above, the keys will be retrieve automatically.

If you have a more complex wine installation, you may enter the appropriate WINEPREFIX in the configuration dialogs for Kindle for PC and Adobe Digital Editions. You can also test that you have entered the WINEPREFIX correctly by trying to add the default keys to the preferences by clicking on the green plus button in the configuration dialogs.

#### Retrieve Adobe key file

- [Python 2.7 Installation file](http://www.activestate.com/activepython/downloads)
- [Python 2.7 32-bit download link](http://www.activestate.com/activepython/downloads/thank-you?dl=http://downloads.activestate.com/ActivePython/releases/2.7.8.10/ActivePython-2.7.8.10-win32-x86.msi)
- [PyCrypto Installation file](http://www.voidspace.org.uk/python/modules.shtml#pycrypto)
- [PyCrypto 2.6 for 32-bit Python 2.7 download link](http://www.voidspace.org.uk/downloads/pycrypto26/pycrypto-2.6.win32-py2.7.exe)

install python
:   `wine msiexec /i ~/Downloads/ActivePython-2.7.8.10-win32-x86.msi`

install pycrypto
:   `wine ~/Downloads/pycrypto-2.6.win32-py2.7.exe`

- [GitHub: adobekey.pyw](https://github.com/psyrendust/dedrm-ebook-tools/blob/master/Other_Tools/DRM_Key_Scripts/Adobe_Digital_Editions/adobekey.pyw)

download and copy script

~~~
wget https://raw.githubusercontent.com/psyrendust/dedrm-ebook-tools/master/Other_Tools/DRM_Key_Scripts/Adobe_Digital_Editions/adobekey.pyw
cp adobekey.pyw "/home/z930/.wine32a/drive_c/Program Files/Adobe/adobekey.pyw"
wine python "/home/z930/.wine32a/drive_c/Program Files/Adobe/adobekey.pyw" 
cp "/home/z930/.wine32a/drive_c/Program Files/Adobe/adobekey_1.der" adobekey_1.der
~~~

- [Gregory Summer: DRM](http://gregsumner.blogspot.fr/2009/12/decrypting-epub-drm.html)
