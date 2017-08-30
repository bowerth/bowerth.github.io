---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}


## Elasticsearch

- [install Elasticsearch with RPM](https://www.elastic.co/guide/en/elasticsearch/reference/current/rpm.html)

~~~
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-5.5.1.rpm
sha1sum elasticsearch-5.5.1.rpm
sudo rpm --install elasticsearch-5.5.1.rpm
~~~

Elasticsearch can be started and stopped using the service command:

~~~
sudo -i service elasticsearch start
sudo -i service elasticsearch stop
~~~

You can delete the nyc-places by running:

~~~
curl -XDELETE "http://localhost:9200/nyc-places"
~~~

- Create an index called `nyc-places`:

~~~
curl -XPUT "http://localhost:9200/nyc-places"
~~~

- Create an index mapping called `popular-locations`:

~~~
curl -XPUT "http://localhost:9200/nyc-places/_mapping/popular-locations" -d'
{
 "popular-locations" : {
   "properties" : {
      "cnt": {"type": "integer"},
      "location": {"type": "geo_point"},
      "isStart": {"type": "boolean"},
      "time": {"type": "date"}
    }
 }
}'
~~~


## Kibana

- [install Kibana with RPM](https://www.elastic.co/guide/en/kibana/current/rpm.html)

~~~
wget https://artifacts.elastic.co/downloads/kibana/kibana-5.5.1-x86_64.rpm
sha1sum kibana-5.5.1-x86_64.rpm
sudo rpm --install kibana-5.5.1-x86_64.rpm
~~~

Kibana can be started and stopped using the service command:

~~~
sudo -i service kibana start
sudo -i service kibana stop
~~~

- [accessing Kibana](https://www.elastic.co/guide/en/kibana/current/access.html)

open web interface at [localhost:5601](http://localhost:5601/)

