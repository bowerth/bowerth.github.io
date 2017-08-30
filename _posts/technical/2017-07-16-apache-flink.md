---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}


## Docker

- [data artisans: Introducing Official Docker Images for Apache Flink](https://data-artisans.com/blog/official-docker-images-apache-flink)


## Integrating R

- [bitbucket: fastr-flink](https://bitbucket.org/allr/fastr-flink/)
- [](https://berlin.flink-forward.org/kb_sessions/efficiently-executing-r-dataframes-on-flink-​/)


## Integrating Kafka

- [Kafka + Flink: A Practical, How-To Guide](https://data-artisans.com/blog/kafka-flink-a-practical-how-to)


## Links

- [Apache Flink](https://flink.apache.org/)
- [Documentation v.1.4](https://ci.apache.org/projects/flink/flink-docs-release-1.4/index.html)
- [Basic API Concepts: Linking with Flink](https://ci.apache.org/projects/flink/flink-docs-release-1.0/apis/common/index.html#linking-with-flink)
- [Downloads: Maven Dependencies](https://flink.apache.org/downloads.html)

## Building Apache Flink from Source

~~~
git clone https://github.com/apache/flink.git
cd flink
mvn clean package -DskipTests # this will take up to 10 minutes
~~~


## Tests

~~~
mvn test -rf :flink-ml_2.11
~~~

- [Re: flink-ml test](http://mail-archives.apache.org/mod_mbox/flink-dev/201701.mbox/<CACTd3c86faQ9OpnB=vZ16X5=So-hck4aEeOTLutA=d5N-h8_tA@mail.gmail.com>)

For running a specific test under flink-ml:

~~~
mvn test -DwildcardSuites=org.apache.flink.ml.math.BreezeMathSuite BreezeMathSuite
~~~


## Machine Learning

- [Stochastic Outlier Selection SOS](https://ci.apache.org/projects/flink/flink-docs-release-1.3/dev/libs/ml/sos.html)
- [github: jeroenjanssens/phd-thesis](https://github.com/jeroenjanssens/phd-thesis)


## Dataset

- [kaggle: Numenta Anomaly Benchmark (NAB)](https://www.kaggle.com/boltzmannbrain/nab) Dataset and scoring for detecting anomalies in streaming data


## Learn

- [Sample Project in Scala](https://ci.apache.org/projects/flink/flink-docs-release-1.3/quickstart/scala_api_quickstart.html)
- [Monitoring Wikipedia Edits](https://ci.apache.org/projects/flink/flink-docs-release-1.3/quickstart/run_example_quickstart.html)
- [Building real-time dashboard applications with Apache Flink, Elasticsearch, and Kibana](https://www.elastic.co/blog/building-real-time-dashboard-applications-with-apache-flink-elasticsearch-and-kibana)
- [Apache Flink Training](http://training.data-artisans.com)
- [dataArtisans/flink-training-exercises](https://github.com/dataArtisans/flink-training-exercises)
