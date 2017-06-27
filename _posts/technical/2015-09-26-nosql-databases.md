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

## Kafka
