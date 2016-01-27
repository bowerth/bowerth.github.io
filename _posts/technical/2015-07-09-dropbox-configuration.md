---
layout   : post
category : technical
tagline  :
tags     :
---
{% include JB/setup %}

## exclude

exclude specific files
:   `$ dropbox exclude add DATA.ICIOeconCVB.Rdata`

undo excluding
:   `$ dropbox exclude remove DATA.ICIOeconCVB.Rdata`

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
