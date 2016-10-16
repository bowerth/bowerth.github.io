---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}

## 1and1

- [1and1.fr: login](https://www.1and1.fr/login)

### Define `A` address for github pages

*Paramètres DNS* Modifiez les paramètres DNS de votre domaine

![1and1 dns a ip address](/assets/images/screenshots/1and1-dns-a-ip-address.png)

create `CNAME` file in user page repository root directory (`master` branch of `bowerth.github.io` repo)
:   `$ touch CNAME`  
    `$ echo "rdata.work" > CNAME`

### Create subdomain `dki.rdata.work`

![1and1 subdomain](/assets/images/screenshots/1and1-subdomain.png)

create `CNAME` file in project page repository root directory (`gh-pages` branch of `dki` repo)
:   `$ touch CNAME`  
    `$ echo "dki.rdata.work" > CNAME`

different from shown in the screenshot, *do not* set an A record for a subdomain - instead select `CNAME` and point to `bowerth.github.io`
