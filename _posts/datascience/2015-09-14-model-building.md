---
layout   : post
category : datascience
tagline  : 
tags     :
draft    : true 
---
{% include JB/setup %}

## IBM CPLEX

location
:   `/opt/ibm/ILOG/CPLEX_Studio125`

copy
:   `$ zip -r ~/Downloads/ibm.zip /opt/ibm`  
    `$ sudo unzip ~/Downloads/ibm.zip -d /opt`

### Examples

navigate to folder containing `Makefile`
:   `/cplex/examples/x86-64_sles10_4.1/static_pic`

`C` example
:   `$ sudo make lpex1`  
	`$ sudo ./lpex1 -r`

`C++` example
:   `$ sudo make ilolpex1`  
	`$ sudo ./ilolpex1 -r`

`Java` example
:   `$ make LPex1.class`  
    `$ sudo java -Djava.library.path=/opt/ibm/ILOG/CPLEX_Studio125/cplex/bin/x86-64_sles10_4.1 \`  
    `            -classpath /opt/ibm/ILOG/CPLEX_Studio125/cplex/lib/cplex.jar: LPex1 -r`

## GLPK (GNU Linear Programming Kit)

- [gnu.org: glpk](http://www.gnu.org/software/glpk)
