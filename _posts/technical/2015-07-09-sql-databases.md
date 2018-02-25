---
layout   : post
category : technical
tagline  :
tags     :
---
{% include JB/setup %}


## PostgreSQL

### Software Resources

- [Linux downloads (Red Hat family)](https://www.postgresql.org/download/linux/redhat/)
- [PostGIS Downloads](http://postgis.net/source/)
- [Git PostGIS](https://git.osgeo.org/gogs/postgis/)


install F26
:   `sudo dnf install https://download.postgresql.org/pub/repos/yum/9.6/fedora/fedora-26-x86_64/pgdg-fedora96-9.6-3.noarch.rpm`

install the client packages
:   `sudo dnf install postgresql96`

install the server packages
:   `dnf install postgresql96-server`

initialize database
:   `/usr/pgsql-9.6/bin/postgresql96-setup initdb`

set password for user `postgres`

~~~
sudo -u postgres psql postgres
\password postgres
~~~

modify `pg_hba.conf`, change `peer` and `ident` to `md5`
:   `sudo nano /var/lib/pgsql/9.6/data/pg_hba.conf`

start database server
:   `systemctl start postgresql-9.6`

stop database server
:   `systemctl stop postgresql-9.6`

check if running
:   `ps axf | grep postgres`

database server status
:   `systemctl status postgresql-9.6`

active connections
:   `netstat -na | grep 5432`

restart database server
:   `systemctl restart postgresql-9.6`

quit console
:   `\q`


### scala-exercises: app

create a user called `scalaexercises_dev_user`
:   `sudo -u postgres psql -c "CREATE USER scalaexercises_dev_user WITH PASSWORD '[PASS]';"`

create a db called `scalaexercises_dev` and grant all privileges on it to `scalaexercises_dev_user`

~~~
sudo -u postgres createdb scalaexercises_dev
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE scalaexercises_dev TO scalaexercises_dev_user;"
~~~

### scala-exercises: tests

create a user called `scalaexercises_user`
:   `sudo -u postgres psql -c "CREATE USER scalaexercises_user WITH PASSWORD '[PASS]';"`

create a db called `scalaexercises_test` and grant all privileges on it to `scalaexercises_user`

~~~
psql -c "create database scalaexercises_test;" -U postgres
sudo -u postgres createdb scalaexercises_test
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE scalaexercises_test TO scalaexercises_user;"
~~~


## mariadb 10.2 RC

configure repo for MariaDB `/etc/yum.repos.d/MariaDB.repo`

~~~
# MariaDB 10.2 Fedora repository list - created 2017-04-27 11:45 UTC
# http://downloads.mariadb.org/mariadb/repositories/
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/10.2/fedora/26/x86_64
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

compile Connector/C

~~~
cd ~/src/unix
git clone git@github.com:MariaDB/mariadb-connector-c.git
cd mariadb-connector-c
cmake ../mariadb-connector-c -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr/local
make
sudo make install
~~~

remove MariaDB

~~~
sudo rm -r /usr/local/include/mariadb
sudo rm -r /usr/local/lib/mariadb
sudo rm /usr/local/bin/mariadb_config
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


delete database

~~~
DROP DATABASE dalia;
~~~

define connection groups in `~/.my.cnf`

~~~
[boerseduesseldorf]
database=boerseduesseldorf
user=root
password=PASS
~~~



### Connect from Java / Scala

~~~
import java.sql.Connection
import java.sql.DriverManager
import org.mariadb.jdbc.{Driver, MariaDbDataSource}

val connection =
      DriverManager.getConnection("jdbc:mariadb://localhost:3306/boerseduesseldorf?user=root&password=Password")

// create table
val stmt = connection.createStatement
stmt.executeUpdate("CREATE TABLE test (date date not null primary key, value float not null)")
~~~

run in console: get column types

~~~
DESCRIBE test;

+-------+-------+------+-----+---------+-------+
| Field | Type  | Null | Key | Default | Extra |
+-------+-------+------+-----+---------+-------+
| date  | date  | NO   | PRI | NULL    |       |
| value | float | NO   |     | NULL    |       |
+-------+-------+------+-----+---------+-------+
~~~

contents of `file.sql`

~~~
2016-03-01	32.4
2016-03-02	33.5
~~~

- `	` corresponds to `\t`

~~~
LOAD DATA LOCAL INFILE 'file.sql' INTO TABLE test FIELDS TERMINATED BY '\t';

Query OK, 2 rows affected (0.01 sec)                 
Records: 2  Deleted: 0  Skipped: 0  Warnings: 0
~~~

show result

~~~
SELECT * FROM test;

+------------+-------+
| date       | value |
+------------+-------+
| 2016-03-01 |  32.4 |
| 2016-03-02 |  33.5 |
+------------+-------+
~~~

`WHERE` clause on `date` column

~~~
SELECT * FROM fonds WHERE date > '2017-01-01';

+--------+------------+-------+
| wkn    | date       | value |
+--------+------------+-------+
| 940637 | 2017-02-10 | 49.83 |
| 940637 | 2017-02-09 |  49.9 |
| 940637 | 2017-02-08 | 49.82 |
| 940637 | 2017-02-07 | 49.84 |
| 940637 | 2017-02-06 | 49.72 |
| ...    | ...        | ...   |
+--------+------------+-------+
~~~

other useful commands

~~~
SELECT DISTINCT(wkn) FROM fonds;
SELECT * FROM fonds LIMIT 10;
SELECT * FROM fonds WHERE wkn = "603364" ORDER BY -date LIMIT 10;
DELETE FROM fonds;
SELECT COUNT(*) FROM fonds;
~~~

count after loading all values

~~~
SELECT COUNT(*) FROM (SELECT DISTINCT(wkn) FROM fonds) AS t;

+----------+
| COUNT(*) |
+----------+
|     2033 |
+----------+
1 row in set (2.56 sec)
~~~

create index for faster querying (time reduced from 2.56 sec to 0.00 sec)

~~~
CREATE INDEX wknidx ON fonds (wkn);
SELECT COUNT(*) FROM (SELECT DISTINCT(wkn) FROM fonds) AS t;

+----------+
| COUNT(*) |
+----------+
|     2033 |
+----------+
1 row in set (0.00 sec)
~~~


## Microsoft SQL Server in Linux

### Docker

- [](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker)

~~~
docker pull microsoft/mssql-server-linux
docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=<YourStrong!Passw0rd>' -e 'MSSQL_PID=Developer' -p 1401:1433 --name sqlcontainer1 -d microsoft/mssql-server-linux
# view Docker containers
docker ps -a
# stop
docker stop [CONTAIER]
# remove
docker rm [CONTAINER]
~~~

change password

~~~
docker exec -it sqlcontainer1 /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P '<YourStrong!Passw0rd>' -Q 'ALTER LOGIN SA WITH PASSWORD="<YourNewStrong!Passw0rd>"'
~~~

connect

~~~
docker exec -it sqlcontainer1 "bash"
/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P '<YourPassword>'
~~~

create and query data

~~~
CREATE DATABASE TestDB
SELECT Name from sys.Databases
GO
~~~

create new table and insert rows

~~~
CREATE TABLE Inventory (id INT, name NVARCHAR(50), quantity INT)
INSERT INTO Inventory VALUES (1, 'banana', 150); INSERT INTO Inventory VALUES (2, 'orange', 154);
GO
~~~

select data

~~~
SELECT * FROM Inventory WHERE quantity > 152;
GO
~~~

exit

~~~
QUIT
~~~

connect to container from outside

- requires `sqlcmd`

add RHEL 7 repo

~~~
sudo curl -o /etc/yum.repos.d/msprod.repo https://packages.microsoft.com/config/rhel/7/prod.repo
sudo dnf update
sudo dnf install -y mssql-tools
sudo dnf install -y unixODBC-devel
~~~

update `mssql-tools`

~~~
sudo dnf check-update
sudo dnf update mssql-tools
~~~

modify `PATH` in `~/.profile`

~~~
export PATH="$PATH:/opt/mssql-tools/bin"
~~~

cennect using `sqlcmd` specifying host and port

~~~
sqlcmd -S localhost,1401 -U SA -P '<YourPassword>'
~~~


### Local Install

- [Install SQL Server and create a database on Red Hat](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-red-hat)
- openssl problematic Fedora 27

add RHEL 7 repo

~~~
sudo curl -o /etc/yum.repos.d/mssql-server.repo https://packages.microsoft.com/config/rhel/7/mssql-server.repo
sudo dnf update
# sudo dnf install -y compat-openssl10
~~~

local install

~~~
cd ~/Downloads
mkdir mssql
cd mssql
wget https://packages.microsoft.com/rhel/7/mssql-server/mssql-server-14.0.900.75-1.x86_64.rpm
~~~

check for missing dependencies

~~~
rpm -qpR mssql-server-14.0.900.75-1.x86_64.rpm
~~~


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

