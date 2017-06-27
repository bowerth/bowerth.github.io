---
layout   : post
category : technical
tagline  :
tags     :
---
{% include JB/setup %}

## MongoDB

- [mongodb](http://docs.mongodb.org/manual/)
- [docs.mongodb.org: install mongodb on red hat](https://docs.mongodb.org/getting-started/shell/tutorial/install-mongodb-on-red-hat/)

installation on Fedora 22
:   `sudo dnf install mongodb mongodb-server`

create data directory
:   `sudo mkdir -p /data/db`

change ownership of data directory
:   `sudo chown xps13 /data/db`

start service
:   `service mongod start`

start instance
:   `mongod --dbpath /data/db`

### time series

- [mongodb.com: MongoDB for Time Series Data Part 1: Setting the Stage for Sensor Management](https://www.mongodb.com/presentations/mongodb-time-series-data-part-1-setting-stage-sensor-management)
- [learnmongodbthehardway.com: Time Series](http://learnmongodbthehardway.com/schema/chapter6)

## Apache CouchDB

- [couchdb.apache.org](http://couchdb.apache.org)
- [smileupps CouchDB Hosting 1.6.0](https://www.smileupps.com/store/apps/couchdb)

## Apache Cassandra

- [learn.datastax.com: DataStax DBAs Guide to NoSQL](http://learn.datastax.com/rs/datastax/images/DataStax-DBAs-Guide-to-NoSQL.pdf)

### Dependencies

`ant-junit`

~~~
sudo dnf install -y ant-junit
~~~

### Building

~~~
git clone http://git-wip-us.apache.org/repos/asf/cassandra.git
or
git@github.com:apache/cassandra.git
~~~

follow instructions at `./redhat/README.md`

~~~
ant
# optional: run the unit tests:
ant test
~~~

### Usage

start cassandra

~~~
bin/cassandra -f
~~~

connect to single node

~~~
$ bin/cqlsh localhost
Connected to Test Cluster at localhost:9042.
[cqlsh 5.0.1 | Cassandra 4.0-SNAPSHOT | CQL spec 3.4.5 | Native protocol v4]
Use HELP for help.
cqlsh> SELECT cluster_name, listen_address FROM system.local;

 cluster_name | listen_address
--------------|----------------
 Test Cluster |      127.0.0.1

(1 rows)
cqlsh> quit;
$ 
~~~
