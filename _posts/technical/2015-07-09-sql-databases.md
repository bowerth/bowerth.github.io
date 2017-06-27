---
layout   : post
category : technical
tagline  :
tags     :
---
{% include JB/setup %}

## mariadb 10.2 RC

configure repo for MariaDB `/etc/yum.repos.d/MariaDB.repo`

~~~
# MariaDB 10.2 Fedora repository list - created 2017-04-27 11:45 UTC
# http://downloads.mariadb.org/mariadb/repositories/
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/10.2/fedora25-amd64
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck=1
~~~

update

~~~
sudo dnf update -y --best --allowerasing
sudo dnf install -y MariaDB-server
systemctl start mariadb.service
mysql_secure_installation
# start on boot:
# systemctl enable mariadb
~~~

load data

~~~
mysql -u root -p
~~~

~~~
CREATE DATABASE dalia;
~~~

exit the MySQL shell promt `CTRL+D`

import the dump file

~~~
mysql -u root -p dalia < mysql_dump
~~~

check if data has been loaded correctly

~~~
mysql -u root -p dalia
SHOW TABLES;
~~~

| Tables in dalia |
|:----------------|
| clicks          |
| publishers      |
| users           |


create a "root" user that can connect from anywhere

~~~
GRANT ALL PRIVILEGES ON *.* TO 'root'@'192.168.100.%' IDENTIFIED BY 'my-new-password' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON *.* TO 'root'@'127.0.0.1' IDENTIFIED BY 'jQy2ZB' WITH GRANT OPTION;
~~~


## SQL Server in Linux

Bulk copying SQL Server Data from Linux and UNIX

- open source alternative: [freebcp](http://linux.die.net/man/1/freebcp)

### Prerequisits

- [blog.nhaslam.com](http://blog.nhaslam.com/tag/fedora/): `unixODBC-2.3.0`

### Installation Microsoft sqlncli on Fedora

- [Microsoft SQL Server ODBC Driver 1.0 for Linux](http://www.microsoft.com/en-us/download/details.aspx?id=28160)

#### Extract the Microsoft SQL Server ODBC Driver 1.0 for Linux package:

Navigate to the directory where you downloaded the sqlncli archive and extract it

- `cd ~/Downloads/`
- `tar xvf sqlncli-11.0.1790.0.tar.gz`

        version of unixODBC: 2.3.2-4.fc20

#### Install the unixODBC 2.3.0 Driver Manager:

- Make sure that you have root permissions.
- Remove any older installed version of unixODBC (for example, unixODBC 2.2.11): yum remove unixODBC
- Change to the sqlncli-11.0.1790.0 directory, where you can run build_dm.sh to install the unixODBC Driver Manager:
- `cd ./sqlncli-11.0.1790.0`
- `./build_dm.sh --help`
- You can install the driver manager by executing the following command:
- `./build_dm.sh`
- Note: you can also download the driver manager manually at http://www.unixodbc.org/ and use the downloaded archive locally:
- `./build_dm.sh --download-url=file://unixODBC-2.3.0.tar.gz`
- Type "YES" to proceed with unpacking the files. This part of the process can take up to five minutes to complete.
- After the script stops running, follow the instructions on the screen to install the unixODBC Driver Manager.

#### Install the Microsoft SQL Server ODBC Driver 1.0 for Linux:

- Make sure that you have root permissions.
- Change to the sqlncli-11.0.1790.0 directory, where you can run install.sh to install the driver:
- `cd ./sqlncli-11.0.1790.0`
- `./install.sh --help`
- (Optional) You may want to make a backup of odbcinst.ini. The driver installation will update odbcinst.ini. odbcinst.ini contains the list of drivers that are registered with the unixODBC Driver Manager. Execute the following command to discover the location of odbcinst.ini on your computer:
- `odbc_config --odbcinstini`
- Before you install the driver, you may run a verify step to check if your computer has the required software to support the Microsoft SQL Server ODBC Driver 1.0 for Linux:
- `./install.sh verify`
- When you are ready to install the Microsoft SQL Server ODBC Driver 1.0 for Linux, run the install script:
- `./install.sh install`
- After reviewing the license agreement, type "YES" to continue with the installation.
- Verify that Microsoft SQL Server ODBC Driver 1.0 for Linux was registered successfully:
- `odbcinst -q -d -n "SQL Server Native Client 11.0"`

### Kerberos Credentials

- [www.easysoft.com](http://www.easysoft.com/products/data_access/odbc-sql-server-driver/kerberos.html)
- [Setting up Trusted Connections from Linux to MS Sql Server](http://lists.ibiblio.org/pipermail/freetds/2012q3/027978.html)

modify /etc/krb5.conf

[libdefaults] 
default_realm = MAIN.OECD.ORG 
dns_lookup_realm = false
dns_lookup_kdc = false
ticket_lifetime = 24h 
renew_lifetime = 7d 
forwardable = yes 

[realms] 
MAIN.OECD.ORG = { 
kdc = MAIN.OECD.ORG
admin_server = MAIN.OECD.ORG
default_domain = MAIN.OECD.ORG 
} 

[domain_realm] 
.main.oecd.org = MAIN.OECD.ORG
main.oecd.org = MAIN.OECD.ORG

[appdefaults]
pam = {
   debug = false
   ticket_lifetime = 36000
   renew_lifetime = 36000
   forwardable = true
   krb4_convert = false
}

### Usage

- [easysoft](http://www.easysoft.com/products/data_access/odbc-sql-server-driver/bulk-copy.html)
- test query: `./bcp AdventureWorks.Sales.Currency out /tmp/Currency.dat \
    -U mydomain\\myuser -P mypassword -S VS-GEN-SQL-3\\sqlexpress`

### Optional

- [Installation npm](https://www.npmjs.com/package/bcp)
- [FreeTDS](http://www.freetds.org/userguide/install.htm)

