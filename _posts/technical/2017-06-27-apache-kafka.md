---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}

## Apache Kafka

- [Apache Kafka](https://kafka.apache.org)

Source Code

~~~
git clone https://git-wip-us.apache.org/repos/asf/kafka.git kafka
or
git@github.com:apache/kafka.git
~~~

## Build Tools

- [SDKMAN!](http://sdkman.io) is a tool for managing parallel versions of multiple Software Development Kits on most Unix based systems

~~~
curl -s "https://get.sdkman.io" | bash
~~~

- [Gradle Build Tool](https://gradle.org/install)

~~~
$ sdk install gradle 4.0
~~~

## Building Kafka

First bootstrap and download the wrapper

~~~
cd kafka_source_dir
gradle
~~~

Build a jar and run it

~~~
./gradlew jar
~~~

## Usage

- [Quickstart](https://kafka.apache.org/quickstart)
- [dataArtisans kafka-example README](https://github.com/dataArtisans/kafka-example/blob/master/README.md)

~~~
export KAFKA_HOME="/home/xps13/src/apache/kafka/bin"
cd $KAFKA_HOME

# start zookeeper server
./bin/zookeeper-server-start.sh ./config/zookeeper.properties

# start broker
./bin/kafka-server-start.sh ./config/server.properties

# create topic "test"
./bin/kafka-topics.sh --create --topic test --zookeeper localhost:2181 --partitions 1 --replication-factor 1

# consume from the topic using the console producer
./bin/kafka-console-consumer.sh --topic test --zookeeper localhost:2181

# produce something into the topic (write something and hit enter)
./bin/kafka-console-producer.sh --topic test --broker-list localhost:9092
~~~


## Akka Integration

- [github: akka/reactive-kafka](https://github.com/akka/reactive-kafka)
- [doc.akka.io: Akka Streams Kafka](http://doc.akka.io/docs/akka-stream-kafka/current/home.html)
