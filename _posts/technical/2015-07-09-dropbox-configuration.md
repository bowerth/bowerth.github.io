---
layout   : post
category : technical
tagline  :
tags     :
---
{% include JB/setup %}

## exclude

exclude specific directories
:   `$ dropbox exclude add icioapp2015/data`  
    `$ dropbox exclude add XlsxWriter/.git/objects/pack`

undo excluding
:   `$ dropbox exclude remove icioapp2015/data`

list excluded files
:   `$ dropbox exclude list`

```
[xps13@xps13 icioapp2015]$ cd data 
[xps13@xps13 data]$ dropbox filestatus
.Rhistory:                       up to date
...
couagg69.rda:                    up to date
DATA.ICIOeconCVB.Rdata:          up to date
DATA.ICIOeconFDTTLdisc.Rdata:    up to date
DATA.ICIOeconFDTTLexINVNT.Rdata: up to date
DATA.ICIOeconGRTR.Rdata:         up to date
...
[xps13@xps13 data]$ dropbox exclude add DATA.ICIOeconCVB.Rdata
Excluded: 
data.icioeconcvb.rdata
[xps13@xps13 data]$ dropbox filestatus
.Rhistory:                       up to date
...
couagg69.rda:                    up to date
DATA.ICIOeconFDTTLdisc.Rdata:    up to date
DATA.ICIOeconFDTTLexINVNT.Rdata: up to date
DATA.ICIOeconGRTR.Rdata:         up to date
...
```

# Google Drive

## Linux Command Line Tools

- [www.maketecheasier.com: 4 Unofficial Google Drive Clients for Linux](https://www.maketecheasier.com/google-drive-clients-linux/)
- [github: rakyll: drive](https://github.com/rakyll/drive) now continued at [github: odeke: drive](https://github.com/odeke-em/drive)
- [github: prasmussen: gdrive](https://github.com/prasmussen/gdrive)
- [rclone.org](http://rclone.org/) command line program to sync files and directories to and from
- [www.insynchq.com](https://www.insynchq.com/)

# Microsoft OneDrive

- [github: xybu: onedrive-d-old](https://github.com/xybu/onedrive-d-old)
- [skilion.github.io: onedrive](http://skilion.github.io/onedrive/)
