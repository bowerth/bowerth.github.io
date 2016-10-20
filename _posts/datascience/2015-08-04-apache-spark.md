---
layout   : post
category : datascience
tagline  : 
tags     : 
---
{% include JB/setup %}

## JSON

### flattening

- [xinhstechblog: Reading JSON Nested Array in Spark DataFrames](http://xinhstechblog.blogspot.it/2016/05/reading-json-nested-array-in-spark.html)

## Connectivity

### Flintrock

A command-line tool for launching Apache Spark clusters

- [github: nchammas: flintrock](https://github.com/nchammas/flintrock)

### Livy

An Open Source REST Service for Apache Spark

- [livy.io](http://livy.io/)

## Sparkling Water

- use Spark 1.6; will be coming out for Spark 2.0
- use spark-shell or sparkling-shell, start with `--class water.SparklingWaterDriver`

```
import org.apache.spark.h2o._
val hc = H2OContext.getOrCreate(sc)
```

## Building Spark

- [spark.apache.org: Building Spark](http://spark.apache.org/docs/latest/building-spark.html)

### SBT

launch included sbt and package
:   `$ ./build/sbt`  (wait for sbt to load)
    `> package`  
    Note: Maven profiles and variables can be set to control the SBT build, e.g. `./build/sbt -Pyarn -Phadoop-2.3 package`

### Maven

configure Maven
:   `export MAVEN_OPTS="-Xmx2g -XX:MaxPermSize=512M -XX:ReservedCodeCacheSize=512m"`  
    Note: For Java 8 and above this step is not required. If using build/mvn with no MAVEN_OPTS set, the script will automate this for you

make runnable distribution
:   `./dev/make-distribution.sh` in the project root directory

## Cluster

### EMR and EC2 for Spark and Zeppelin

- [Amazon EMR Developer Guide: Apache Spark](http://docs.aws.amazon.com/ElasticMapReduce/latest/ReleaseGuide/emr-spark.html)
- outdated: [github: amplab: spark-ec2](https://github.com/amplab/spark-ec2)

- [Amazon EMR Release Guide: Create a Cluster With Spark](http://docs.aws.amazon.com/ElasticMapReduce/latest/ReleaseGuide/emr-spark-launch.html)

#### Configuration

- [Create Cluster - Quick Options](https://eu-central-1.console.aws.amazon.com/elasticmapreduce/home?region=eu-central-1#quick-create:)

##### General Configuration

Cluster name
:   `spark-cluster-1`

Launch mode
:   `Cluster`

##### Software configuration

Vendor
:   `Amazon`

Log URI
:   `s3://aws-logs-058644585154-eu-central-1/elasticmapreduce/`

Release
:   `emr-5.0.0`

Applications
:   `Spark: Spark 2.0.0 on Hadoop 2.7.2 YARN with Ganglia 3.7.2 and Zeppelin 0.6.1`

##### Hardware configuration

Instance type
:   `m3.xlarge`

Number of instances
:   `3` (1 master and 2 core nodes)

##### Security and access

EC2 key pair
:   `ec2-eu-central-1`

Permissions
:   `Default`

EMR role
:   `EMR_DefaultRole`

EC2 instance profile
:   `EMR_EC2_DefaultRole`

#### Cluster Information

Subnet ID
:   `subnet-eb9e5783`

After successful start, log in to cluster
:   `ssh -i [path-to-keypair-file]/ec2-eu-central-1.pem hadoop@ec2-52-59-141-166.eu-central-1.compute.amazonaws.com`

## Database Technology

### Kafka

- [kafka.apache.org: documentation](http://kafka.apache.org/documentation.html)

### Cassandra

- [cassandra.apache.org](http://cassandra.apache.org)

### Amazon S3

- [databricks.gitbooks.io: Section 2: Importing Data](https://databricks.gitbooks.io/databricks-spark-reference-applications/content/logs_analyzer/chapter2/index.html)

- [databricks.gitbooks.io: Section 3: Exporting Data](https://databricks.gitbooks.io/databricks-spark-reference-applications/content/logs_analyzer/chapter3/index.html)

![databricks-s3-load-comext-comtrade.png](/assets/images/screenshots/databricks-s3-load-comext-comtrade.png)

### Amazon Redshift

- [github: databricks: spark-redshift](https://github.com/databricks/spark-redshift)
- [github: databricks: spark-redshift: tutorial](https://github.com/databricks/spark-redshift/tree/master/tutorial)
- [databricks.com: Introducing Redshift Data Source for Spark](https://databricks.com/blog/2015/10/19/introducing-redshift-data-source-for-spark.html)

## Search Technology

### Elasticsearch

- [elastic: Elasticsearch](https://www.elastic.co)

Apache Lucene is a high performance, full-featured Information Retrieval library, written in Java. Elasticsearch uses Lucene internally to build its state of the art distributed search and analytics capabilities.

- [Apache Lucene](https://lucene.apache.org)

## SparkR

R interface to Apache Spark

- [Hossein Falaki: Unifying Data Sources and Data Processing with Apache Spark](https://vimeo.com/143883002)

### Examples

- [spark.apache.org: SparkR (R on Spark)](https://spark.apache.org/docs/1.5.2/sparkr.html)
- [rpubs.com: tcosta: SparkR 1.5 MLlib Logistic Regression Example](https://rpubs.com/tcosta/sparkr-glm)
- [zeppelinhub: SparkR, MLlib and SparkSQL for predictions over the NYC flight data](https://www.zeppelinhub.com/viewer/notebooks/aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2ZlbGl4Y2hldW5nL3NwYXJrLW5vdGVib29rLWV4YW1wbGVzL21hc3Rlci9aZXBwZWxpbl9ub3RlYm9vay8yQVo5NTg0R0Uvbm90ZS5qc29u)

## IBM

- [spark.tc](http://www.spark.tc)
- [BigInsights](http://www-03.ibm.com/software/products/en/infosphere-biginsights-standard-ed)

### Many data scientists love R

- Open source 
- highly dynamic
- interactive environment
- rich ecosystem of packages
- powerful visualization infrasturcture
- data frames make data manipulation convenient
- taught by many schools to stats and computing students

### Performance Limitations of R

- R language: R's dynamic design imposes restriction on optimization
- R runtime: single threaded, everything has to fit in memory

### What is SparkR?

- convenient interoperability betwen R and Spark DataFrames
- Spark: distributed robust processing

### SQL Context

interface to Spark functionality in R
- sparkR DataFrames are implemented on top of SparkSQL tables
- all DataFrame operations go through a SQL optimizer (catalyst)

```
sc <- sparkR.init()
sqlContext <- sparkRSQL.init(sc)
```

- from now on, no "Spark Context (sc)" needed any more

### IO

Reading and writing to storage (JVM <> Storage)

```
sparkDF <- read.df(sqlContext, path = "...", source = "csv") # json, parquet
write.df(sparkDF, source = "json") # parquet
```

- no operation between R and the JVM (materialization)

moving data betweeen R and JVM

- `collect()`: transports data
- `createDataFrame()`: ships to all the drivers, ending up with distributed object

### Caching

- `persist(sparkDF, storageLevel)`
- `cache(sparkDF)` equivalent to `persist(sparkDF, "MEMORY_ONLY")`
- `cacheTable(sqlContext, "table_name")`

subsequent actions will be executed on the representation of data in memory

### DataFrame API

similar behaviour of SparkR DataFrames and R data.frames

- sparkDF$newCol <- sparkDF$col +1
- subsetDF <- sparkDF[, c("date", "type")]
- recentData <- subset(sparkDF$date == "2015-100-24")
- firstRow <- sparkDF[[1, ]]
- names(subsetDF) <- c("Date", "Type")
- dim(recentData)
- head(collect(count(group_by(subsetDF, "Date"))))

## Configuration

add `$SPARK_HOME` to environment variables in `~/.profile`
:   `export SPARK_HOME="/home/xps13/spark/spark-1.4.1-bin-hadoop2.6"`

### Folder contents

`README.md`
:   Contains short instructions for getting started with Spark.

bin
:   Contains executable files that can be used to interact with Spark in various ways (e.g., the Spark shell, which we will cover later in this chapter). 

core, streaming, python, ...
:   Contains the source code of major components of the Spark project.

examples
:   Contains some helpful Spark standalone jobs that you can look at and run to learn about the Spark API.


## [quick-start](http://spark.apache.org/docs/latest/quick-start.html)

navigate to folder
:   `$ cd /home/xps13/Dropbox/Programming/Scala/Spark/quick-start`

use spark-submit to run your application

```
sbt clean package

$SPARK_HOME/bin/spark-submit \
--class "SimpleApp" \
--master local[4] \
target/scala-2.10/simple-project_2.10-1.0.jar
```

## Databricks

- Databricks documentation [docs.databricks.com](http://docs.databricks.com/spark/latest/)

## Learning Spark: Lightning-Fast Big Data Analysis
	
- [github: databricks: learning-spark](https://github.com/databricks/learning-spark)
- [Errata for Learning Spark](http://www.oreilly.com/catalog/errata.csp?isbn=0636920028512)
- [MD version, chapter 3](https://gist.github.com/dapangmao/5c3798d72b650a70c4bb)

### using spark shell (p.9f.)

start scala shell
:   `$ cd /home/xps13/spark/spark-1.4.1-bin-hadoop2.6` or `$ cd $SPARK_HOME` 
	`$ bin/spark-shell`

- to exit the shell, press `Ctrl-D`
- to shut down Spark, you can either call the `stop()` method on your Spark‐Context
- or simply exit the application (e.g., with `System.exit(0)` or `sys.exit()`)

### Example 2-2. Scala line count

```
val lines = sc.textFile("README.md") // Create an RDD called lines
// lines: spark.RDD[String] = MappedRDD[...]

lines.count() // Count the number of items in this RDD
// Long = 127

lines.first() // First item in this RDD, i.e. first line of README.md
// String = # Apache Spark
```

### Example 2-5. Scala filtering example

```
val lines = sc.textFile("README.md") // textFile() method creates an RDD called lines
// lines: spark.RDD[String] = MappedRDD[...]

val pythonLines = lines.filter(line => line.contains("Python"))
// pythonLines: spark.RDD[String] = FilteredRDD[...]

pythonLines.first()
//  String = ## Interactive Python Shell
```

### Example 2-8. Initializing Spark in Scala

```
import org.apache.spark.SparkConf
import org.apache.spark.SparkContext
import org.apache.spark.SparkContext._

val conf = new SparkConf().setMaster("local").setAppName("My App")
val sc = new SparkContext(conf)
```

### 2-11 to 2-14. Building Stand-alone applications

#### 2-11. Word count Scala application

```
// Create a Scala Spark Context.
val conf = new SparkConf().setAppName("wordCount")
val sc = new SparkContext(conf)

// Load our input data.
val input = sc.textFile(inputFile)

// Split it up into words.
val words = input.flatMap(line => line.split(" "))

// Transform into pairs and count.
val counts = words.map(word => (word, 1)).reduceByKey{case (x, y) => x + y}

// Save the word count back out to a text file, causing evaluation.
counts.saveAsTextFile(outputFile)
```

#### 2-12. sbt build file

```
name := "learning-spark-mini-example"

version := "0.0.1"

scalaVersion := "2.10.4"

// additional libraries
libraryDependencies ++= Seq(
"org.apache.spark" %% "spark-core" % "1.2.0" % "provided"
)
```

#### 2-14. Scala build and run

navigate to folder and remove "wordcounts" (results of application launched using [`spark-submit`](http://spark.apache.org/docs/latest/submitting-applications.html))
:   `$ cd /home/xps13/Dropbox/Programming/Scala/Spark/learning-spark/mini-complete-example`  
	`$ rm -r wordcounts`

<!-- 
copy `README.md` from `/home/xps13/spark/spark-1.4.1-bin-hadoop2.6/README.md`
:   `$ cp $SPARK_HOME/README.md README.md`
 -->

<!-- match scala version with `build.sbt`
:   `scalaVersion := "2.10.4"` i.e. `2.10` 
 -->

<!-- 
copy [WordCount.scala](https://github.com/databricks/learning-spark/blob/master/mini-complete-example/src/main/scala/com/oreilly/learningsparkexamples/mini/scala/WordCount.scala) from github
:   `wget https://raw.githubusercontent.com/databricks/learning-spark/master/mini-complete-example/src/main/scala/com/oreilly/learningsparkexamples/mini/scala/WordCount.scala`
 -->

```
sbt clean package
$SPARK_HOME/bin/spark-submit \
--class com.oreilly.learningsparkexamples.mini.scala.WordCount \
./target/scala-2.10/learning-spark-mini-example_2.10-0.0.1.jar \
./README.md ./wordcounts
```

### RDDs

transformed RDDs are computed lazily, i.e. only when used in an action

#### Example 3-4. Persisting an RDD in memory

```
// copied from example 2-5.
val lines = sc.textFile("README.md") // textFile() method creates an RDD called lines
// lines: spark.RDD[String] = MappedRDD[...]

val pythonLines = lines.filter(line => line.contains("Python"))
// pythonLines: spark.RDD[String] = FilteredRDD[...]
```

```
pythonLines.persist
// pythonLines.type = MapPartitionsRDD[2] at filter at <console>:23

pythonLines.count()
// Long = 3

pythonLines.first()
// String = high-level APIs in Scala, Java, and Python, and an optimized engine that
```

#### Example 3-6. `parallelize()` method in Scala

`val lines = sc.parallelize(List("pandas", "i like pandas"))`

#### Example 3-14. `union()` transformation

```
// val inputRDD = sc.textFile("log.txt")
val inputRDD = sc.textFile("/home/xps13/Dropbox/Programming/Scala/Spark/learning-spark/files/fake_logs/log1.log")
val errorsRDD = inputRDD.filter(line => line.contains("error"))
val warningsRDD = inputRDD.filter(line => line.contains("warning"))
val badLinesRDD = errorsRDD.union(warningsRDD)
//  badLinesRDD: org.apache.spark.rdd.RDD[String] = UnionRDD[8] at union at <console>:27
```

#### Example 3-16. Scala error count using actions

```
println("Input had " + badLinesRDD.count() + " concerning lines")
//  Input had 1 concerning lines

println("Here are 10 examples:")
badLinesRDD.take(10).foreach(println)
//  71.19.157.174 - - [24/Sep/2014:22:26:12 +0000] "GET /error HTTP/1.1" 404 505 "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.94 Safari/537.36"
```

#### Example Scala `collect()` to retrieve the entire RDD

```
val getRDD = inputRDD.filter(line => line.contains("GET"))
getRDD.collect()
// Array[String] = Array(66.249.69.97 - - [24/Sep/2014:22:25:44 +0000] "GET /071300/242153 HTTP/1.1" 404 514 "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)", 71.19.157.174 - - [24/Sep/2014:22:26:12 +0000] "GET /error HTTP/1.1" 404 505 "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.94 Safari/537.36", 71.19.157.174 - - [24/Sep/2014:22:26:12 +0000] "GET /favicon.ico HTTP/1.1" 200 1713 "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.94 Safari/537.36", 71.19.157.174 - - [24/Sep/2014:22:26:37 +0000] "GET / HTTP/1.1" 200 18785 "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.94 Safari/537.36", 71.19.157.174 - - [24/Sep/2014:22...
```

> Although transformations are lazy, you can force Spark to execute them at any time by running an action, such as count() . This is an easy way to test out just part of your program.

#### Example 3-21. Scala function passing

```
// As the RDD class is not automatically imported therefore we have to import it explicitly
import org.apache.spark.rdd.RDD 

class SearchFunctions(val query: String) {
  def isMatch(s: String): Boolean = {
    s.contains(query)
  }
  def getMatchesNoReference(rdd: RDD[String]): RDD[Array[String]] = {
  // Safe: extract just the field we need into a local variable
    val query_ = this.query
    rdd.map(x => x.split(query_))
  }
}
// defined class SearchFunctions
```

#### Example 3-27. Scala squaring the values in an RDD

```
val input = sc.parallelize(List(1, 2, 3, 4))
val result = input.map(x => x * x)
println(result.collect().mkString(","))
```

#### Example 3-30. flatMap() in Scala, splitting lines into multiple words

```
val lines = sc.parallelize(List("hello world", "hi"))
val words = lines.flatMap(line => line.split(" "))
words.first() // returns "hello"
```

#### Basic RDD transformations (see table p41f.)

- `map()`
- `flatmap()`
- `filter()`
- `distinct()`
- `sample()`
- `reduce()`: return new element from two existing elements, e.g. perform aggregations
- `fold()`: requires initial zero value of the type to be returned
- `aggregate()`: return can be of different type as RDD working on; requires initial zero value
- `collect()`: return whole RDD
- `take(n)`: return `n` elements from RDD (minimizing number of accessed partitions, therefore biased)
- `top(n)`: extract top `n` elements (if order is important)
- `takeSample(withReplacement, num, seed)`: take a sample of data either with or without replacement
- `foreach()`: perform computations on each element in the RDD without bringing it back locally

#### Two-RDD transformations

- `distinct()`
- `union()`: may contain duplicates
- `intersection()`: performance worse than union because checks for uniqueness
- `substract()`: same as `intersection()` performs a shuffle over the network
- `cartesian(other)`: very expensive for large RDDs

#### Example 3-33. `reduce()` in Scala

```
val rdd = sc.parallelize(List(1, 2, 3, 3))
val sum = rdd.reduce((x, y) => x + y)
// println(sum)
// sum: Int = 9
```

#### Example 3-36. aggregate() in Scala

```
val input = sc.parallelize(List(1, 2, 3, 4))
val result = input.aggregate((0, 0))( // set sum and counter to zero
  (acc, value) => (acc._1 + value, acc._2 + 1), // add value to sum, add one to counter
  (acc1, acc2) => (acc1._1 + acc2._1, acc1._2 + acc2._2)) // combine results (sum, counter) from two processes (?)
val avg = result._1 / result._2.toDouble // calculate average as sum over numeric count
```

### Implicit Conversions

- Scaladocs for the RDD class [http://bit.ly/1KiC7uO](http://spark.apache.org/docs/latest/api/scala/index.html#org.apache.spark.rdd.RDD)
- SparkContext object's ScalaDoc [http://bit.ly/1Bc4fNt](http://spark.apache.org/docs/latest/api/scala/index.html#org.apache.spark.SparkContext$)

These implicits turn an RDD into various wrapper classes, such as DoubleRDDFunctions (for RDDs of numeric data) and PairRDDFunctions (for key/value pairs), to expose additional
functions such as mean() and variance().

### Persistence (Caching)

#### Example 3-39. Double execution in Scala

```
import org.apache.spark.storage.StorageLevel
val input = sc.parallelize(List(1, 2, 3, 4))
val result = input.map(x => x*x)
result.persist(StorageLevel.DISK_ONLY)
println(result.count())
println(result.collect().mkString(","))
```

- `unpersist()` manually remove RDD from the cache

#### Tachyon

Tachyon is a memory-centric distributed storage system enabling reliable data sharing at memory-speed across cluster frameworks. 

- [tachyon-project.org: Running Spark on Tachyon](http://tachyon-project.org/Running-Spark-on-Tachyon.html)

### Key/value RDDs

#### Example 4-2. Creating a pair RDD using the first word as the key in Scala

```
val lines = sc.textFile("README.md")
val pairs = lines.map(x => (x.split(" ")(0), x))
// val rdd = sc.parallelize(List((1, 2), (3, 4), (5, 6)))
```

## Spark Packages

- [spark-packages.org](http://spark-packages.org)

- [github: drubbo: SparkGIS](https://github.com/drubbo/SparkGIS): adds GIS functionalities to SparkSQL
- [github: databricks: spark-redshift](https://github.com/databricks/spark-redshift): Spark and Redshift integration
- [github: databricks: spark-sbt-package](https://github.com/databricks/sbt-spark-package): SBT plugin that simplifies the development process of Spark Packages and their use in applications
- [github: zinniasystems: spark-ml-class](https://github.com/zinniasystems/spark-ml-class)
- [github: harsha2010: magellan](https://github.com/harsha2010/magellan): Geospatial Analytics Using Spark

### Apache

- [github: apache: Spark SQL](https://github.com/apache/spark/tree/master/sql)
- [spark.apache.org: Spark SQL, DataFrames and Datasets Guide](https://spark.apache.org/docs/latest/sql-programming-guide.html)
- 
## Java 8

- [databricks: spark-with-java-8](https://databricks.com/blog/2014/04/14/spark-with-java-8.html)

## Spark Summit

- 27-29 October 2015
- [Spark Summit Europe 2015](https://spark-summit.org/eu-2015)
- [Conference Agenda](https://spark-summit.org/eu-2015/schedule)
- [Conference Agenda: PDF version](/assets/documents/spark_summit_2015_agenda.pdf)

Conference Location
:   Beurs Van Berlage  
    Damrak 243  
    Beursplein 1-3  
    1012 ZJ Amsterdam

Wifi
:   SSID: SparkSummit  
    Password: europe15

### Tutorial: Data Science

- [Wikipedia: ETL](https://ds03-class.cloud.databricks.com/#notebook/5978)
- [Wikipedia: EDA (Scala)](https://ds03-class.cloud.databricks.com/#notebook/5883)
- [Wikipedia: EDA (Python)](https://ds03-class.cloud.databricks.com/#notebook/5695)

- [pyspark.sql module](https://spark.apache.org/docs/1.5.0/api/python/pyspark.sql.html)

- [Data Science with Spark](https://d3spznhzxwh13.cloudfront.net/ml-slides/ml-slides/index.html)
offline copy at `~/Dropbox/GitHub/revel.js/ml-slides/index.html`

### Talks

Michael Armbrust (Databricks): [Spark DataFrames: Simple and Fast Analysis of Structured Data](https://spark-summit.org/eu-2015/events/spark-dataframes-simple-and-fast-analysis-of-structured-data)
:   Wednesday, October 28  
    11:00 - 11:30  
    Effectenbeurszaal

Ram Sriharsha (Hortonworks): [Magellan: Geospatial Analytics on Spark](https://spark-summit.org/eu-2015/events/magellan-geospatial-analytics-on-spark)
:   Wednesday, October 28  
    11:35 - 12:05  
    Effectenbeurszaal

Joseph Bradley (Databricks): [Combining the Strengths of MLlib, scikit-learn, and R](https://spark-summit.org/eu-2015/events/combining-the-strengths-of-mllib-scikit-learn-and-r)
:   Wednesday, October 28   
    12:10 - 12:40  
    Graanbeurszaal

Hossein Falaki (Databricks): [Enabling exploratory data science with Spark and R](https://spark-summit.org/eu-2015/events/enabling-exploratory-data-science-with-spark-and-r)
:   Thursday, October 29  
    11:35 - 12:05  
    Graanbeurszaal

Gene Pang (Tachyon Nexus, Inc): [Production Spark and Tachyon Use Cases](https://spark-summit.org/eu-2015/events/production-spark-and-tachyon-use-cases)
:   Thursday, October 29  
    16:35 - 17:05  
    Effectenbeurszaal

### Networking Events

Spark Meetup
:   Tuesday, October 27th, 6pm at the Beurs

Attendee Reception
:   Wednesday, October 28th, from 6-8pm

Spark R Meetup
:   Wednesday, October 28th 6:30pm at the Beurs

## databricks

- [databricks.com](https://databricks.com)

## Libraries

### Official

#### [Spark SQL](http://spark.apache.org/sql): module for working with structured data

- [spark.apache.org: SQL Programming Guide](http://spark.apache.org/docs/latest/sql-programming-guide.html)
- [Distributed Data Frame](http://ddf.io)

#### [Spark Streaming](http://spark.apache.org/streaming): makes it easy to build scalable fault-tolerant streaming applications

#### [MLlib](http://spark.apache.org/mllib): scalable machine learning library

- [spark.apache.org: MLlib Linear Methods](http://spark.apache.org/docs/latest/mllib-linear-methods.html)
- [spark.apache.org: ML Guide](http://spark.apache.org/docs/latest/ml-guide.html#example-model-selection-via-cross-validation)

#### [GraphX](http://spark.apache.org/graphx): API for graphs and graph-parallel computation

- [amplab.github.io: graphx](https://amplab.github.io/graphx)
- [ampcamp: Graph Analytics with GraphX](http://ampcamp.berkeley.edu/big-data-mini-course/graph-analytics-with-graphx.html)

## Parquet files

- [parquet.apache.org: documentation](https://parquet.apache.org/documentation/latest)

## Hadoop Installation

- download from [apache.org: hadoop](http://www.apache.org/dyn/closer.cgi/hadoop/common/)

`NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable`

```
[xps13@xps13 sparkDemo]$ hadoop
bash: hadoop: command not found...
Install package 'hadoop-common' to provide command 'hadoop'? [N/y] y
...
```

## Documentation

- [spark.apache.org: Spark Standalone Mode](http://spark.apache.org/docs/latest/spark-standalone.html)

## Tutorials

### Local

- [dattamsha.com: Apache Spark cluster on a single machine](http://www.dattamsha.com/2014/12/apache-spark-cluster-on-a-single-machine)

### Amazon AWS



## Links

- [cloudera: Why Apache Spark is a Crossover Hit for Data Scientists](http://blog.cloudera.com/blog/2014/03/why-apache-spark-is-a-crossover-hit-for-data-scientists)
- [databricks.com: ML Pipelines: A New High-Level API for MLlib](https://databricks.com/blog/2015/01/07/ml-pipelines-a-new-high-level-api-for-mllib.html)
- [gitbook.com: Databricks Spark Reference Applications](https://www.gitbook.com/book/databricks/databricks-spark-reference-applications/details)

## edX

- [BerkeleyX: CS190.1x: Scalable Machine Learning](https://courses.edx.org/courses/BerkeleyX/CS190.1x/1T2015)
- [BerkeleyX: CS100.1x Introduction to Big Data with Apache Spark](https://courses.edx.org/courses/BerkeleyX/CS100.1x/1T2015)

## Books

- [Sandy Ryza et al. - Advanced Analytics with Spark: Patterns for Learning from Data at Scale](https://books.google.fr/books?id=M0_GBwAAQBAJ)
- [Nick Pentreath - Machine Learning with Spark - Tackle Big Data with Powerful Spark Machine Learning Algorithms (2015)](https://books.google.fr/books?id=syPHBgAAQBAJ)
- [github: robertzk: Machine Learning with Spark](https://github.com/robertzk/machine-learning-with-spark)
- [Holden Karau - Fast Data Processing With Spark (2013)](https://books.google.fr/books?id=PdqcAQAAQBAJ)
