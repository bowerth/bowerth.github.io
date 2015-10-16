---
layout   : post
category : datascience
tagline  : 
tags     : 
---
{% include JB/setup %}

## Configuration

- define `$SPARK_HOME` as `/home/xps13/spark/spark-1.4.1-bin-hadoop2.6`

## Usage

- [spark.apache.org: quick-start](http://spark.apache.org/docs/latest/quick-start.html)

see page 9ff. of Learning Spark: Lightning-Fast Big Data Analysis

start scala shell
:   `$ cd /home/xps13/spark/spark-1.4.1-bin-hadoop2.6`  
	`$ bin/spark-shell`

- to exit the shell, press `Ctrl-D`
- to shut down Spark, you can either call the `stop()` method on your Spark‐Context
- or simply exit the application (e.g., with `System.exit(0)` or `sys.exit()`)

### Example 2-2. Scala line count

```
scala> val lines = sc.textFile("README.md") // Create an RDD called lines
lines: spark.RDD[String] = MappedRDD[...]
scala> lines.count() // Count the number of items in this RDD
res0: Long = 127
scala> lines.first() // First item in this RDD, i.e. first line of README.md
res1: String = # Apache Spark
```

### Example 2-5. Scala filtering example

```
scala> val lines = sc.textFile("README.md") // Create an RDD called lines
lines: spark.RDD[String] = MappedRDD[...]
scala> val pythonLines = lines.filter(line => line.contains("Python"))
pythonLines: spark.RDD[String] = FilteredRDD[...]
scala> pythonLines.first()
res0: String = ## Interactive Python Shell
```

### Example 2-8. Initializing Spark in Scala

```
import org.apache.spark.SparkConf
import org.apache.spark.SparkContext
import org.apache.spark.SparkContext._
val conf = new SparkConf().setMaster("local").setAppName("My App")
val sc = new SparkContext(conf)
```

### Example 2-11. Word count Scala application - don't worry about the details yet

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
#### Scala build and run

```
sbt clean package
$SPARK_HOME/bin/spark-submit \
--class com.oreilly.learningsparkexamples.mini.scala.WordCount \
./target/...(as above) \
./README.md ./wordcounts
```

`README.md`
:   Contains short instructions for getting started with Spark.

bin
:   Contains executable files that can be used to interact with Spark in various ways (e.g., the Spark shell, which we will cover later in this chapter). 

core, streaming, python, ...
:   Contains the source code of major components of the Spark project.

examples
:   Contains some helpful Spark standalone jobs that you can look at and run to learn about the Spark API.

## Spark Packages

- [spark-packages.org](http://spark-packages.org)

- [github: drubbo: SparkGIS](https://github.com/drubbo/SparkGIS): adds GIS functionalities to SparkSQL
- [github: databricks: spark-redshift](https://github.com/databricks/spark-redshift): Spark and Redshift integration
- [github: databricks: spark-sbt-package](https://github.com/databricks/sbt-spark-package): SBT plugin that simplifies the development process of Spark Packages and their use in applications
- [github: zinniasystems: spark-ml-class](https://github.com/zinniasystems/spark-ml-class)
- [github: harsha2010: magellan](https://github.com/harsha2010/magellan): Geospatial Analytics Using Spark

### Apache

- [github: apache: Spark SQL](https://github.com/apache/spark/tree/master/sql)

## Java 8

- [databricks: spark-with-java-8](https://databricks.com/blog/2014/04/14/spark-with-java-8.html)

## Spark Summit

- 27-29 October 2015
- [Spark Summit Europe 2015](https://spark-summit.org/eu-2015)

### Speakers

## databricks

- [databricks.com](https://databricks.com)

## Hadoop Installation

`NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable`

## Documentation

- [spark.apache.org: Spark Standalone Mode](http://spark.apache.org/docs/latest/spark-standalone.html)

## Tutorials

- [dattamsha.com: Apache Spark cluster on a single machine](http://www.dattamsha.com/2014/12/apache-spark-cluster-on-a-single-machine)

## Links

- [cloudera: Why Apache Spark is a Crossover Hit for Data Scientists](http://blog.cloudera.com/blog/2014/03/why-apache-spark-is-a-crossover-hit-for-data-scientists)
- [databricks.com: ML Pipelines: A New High-Level API for MLlib](https://databricks.com/blog/2015/01/07/ml-pipelines-a-new-high-level-api-for-mllib.html)

## Books

- [Sandy Ryza et al. - Advanced Analytics with Spark: Patterns for Learning from Data at Scale](https://books.google.fr/books?id=M0_GBwAAQBAJ)
- [Nick Pentreath - Machine Learning with Spark - Tackle Big Data with Powerful Spark Machine Learning Algorithms (2015)](https://books.google.fr/books?id=syPHBgAAQBAJ)
- [github: robertzk: Machine Learning with Spark](https://github.com/robertzk/machine-learning-with-spark)
- [Holden Karau - Fast Data Processing With Spark (2013)](https://books.google.fr/books?id=PdqcAQAAQBAJ)

### [Learning Spark: Lightning-Fast Big Data Analysis]
	
- [github: databricks: learning-spark](https://github.com/databricks/learning-spark)
