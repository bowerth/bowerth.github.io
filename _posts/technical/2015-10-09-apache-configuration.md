---
layout   : post
category : technical
tagline  :
tags     :
---
{% include JB/setup %}

## Committing

- [Guide for new committers](http://www.apache.org/dev/new-committers-guide)

## Apache httpd2

### Configure

location of log files
:   `$ sudo su`  
    `$ cd /var/log/httpd`

location of config file
:   `/etc/httpd/conf/httpd.conf`

re-read config file
:   `$ sudo apachectl -k restart`
