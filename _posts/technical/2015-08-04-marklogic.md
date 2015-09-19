---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}

- [MarkMail](http://markmail.org)

## Application Developer Guides

### [Groovy](http://www.groovy-lang.org/)

### Java 

- [docs.marklogic.com: guide: java](http://docs.marklogic.com/guide/java)

#### [Writing an XML document to the database](http://docs.marklogic.com/guide/java/document-operations#id_33048)

Note that no changes you make to a document or its metadata persist until you write the document out to the database. Within your application, you are only manipulating it within system memory, and those changes will vanish when the application ends. The database content is constant until and unless a write or delete operation changes it.

The basic steps needed to write a document are:

If you have not already done so, connect to the database, storing the connection in a `com.marklogic.client.DatabaseClient` object.

```
DatabaseClient client = DatabaseClientFactory.newClient(
  host, port, user, password, authType);
```

If you have not already done so, use the `DatabaseClient` object to create a `com.marklogic.client.document.DocumentManager` object of the appropriate subclass for the document content you want to access (XML, text, JSON, binary, generic). In this example code, an `XMLDocumentManager`.

```
XMLDocumentManager docMgr = client.newXMLDocumentManager();
```

Get the document's content. For example, by using an `InputStream`.

```
FileInputStream docStream = new FileInputStream(
                                "data"+File.separator+filename);
```

Create a handle associated with the input stream to receive the document's content. How you get content determines which handle you use. Use the handle's set() method to associate it with the desired stream.

```
InputStreamHandle handle = new InputStreamHandle(docStream);
```

Write the document's content by calling a write() method on the `DocumentManager`, with arguments of the document's URI and the handle.

```
docMgr.write(docId, handle);
```

When finished with the database, release the connection resources by calling the `DatabaseClient` object's `release()` method.

```
client.release();
```

## ml-gradle

- [github: rjrudin: ml-gradle](https://github.com/rjrudin/ml-gradle)

### sample-project

deploy (can run twice - different things happen, check details using `gradle -i mlDeploy`)
:   `gradle mlDeploy`

undeploy
:   `gradle mlUndeploy`

open in browser
:   `localhost:8100` with credentials 'mlUsername' = "sample-project-rest-admin" and `mlPassword` = "password"

sample query
:   `curl --anyauth --user admin:admin -X GET -i http://localhost:8100/v1/config/query`

#### data manipulation using `curl`

put JSON document
:   `curl -v --digest --user admin:admin -H "Content-Type: application/json" -X PUT -d '{"person":{"first":"John", "last":"Doe"}}' "http://localhost:8100/v1/documents?uri=/docs/person.json"`

retrieve JSON document
:   `curl --anyauth --user admin:admin -X GET -i http://localhost:8100/v1/documents?uri=/docs/person.json`

remove JSON document
:   `curl -v --digest --user admin:admin -H "Content-Type: application/json" -X DELETE "http://localhost:8100/v1/documents?uri=/docs/person.json"`

put XML document
:   `curl -v --digest --user admin:admin -H "Content-Type: application/xml" -X PUT -d '<person><first>John</first><last>Doe</last></person>' "http://localhost:8100/v1/documents?uri=/docs/person.xml"`

retrieve XML document
:   `curl --anyauth --user admin:admin -X GET -i http://localhost:8100/v1/documents?uri=/docs/person.xml`

remove XML document
:   `curl -v --digest --user admin:admin -H "Content-Type: application/json" -X DELETE "http://localhost:8100/v1/documents?uri=/docs/person.xml"`

remove all documents in `sample-project-content`
:   `gradle mlClearContentDatabase -PdeleteAll=true`

#### data manipulation using `mlcp`

- [github: ml-gradle wiki: Content Pump and Gradle](https://github.com/rjrudin/ml-gradle/wiki/Content-Pump-and-Gradle)

`build.gradle` mlcp task: import sample data from `sample-project/data/import` 
:   `gradle importSampleData`

the application UI lives at `localhost:8000`. in order to view the contents of the loaded document, go to the __Query Console__, select __Content Source__: `sample-project-content (sample-project-modules: /, server: sample-project)`

using `curl`
:   `curl --anyauth --user admin:admin -X GET -i http://localhost:8100/v1/documents?uri=/import/sample-doc.xml`

#### data manipulation using JavaScript

- [JavaScript Reference Guide](http://docs.marklogic.com/guide/jsref)

using JavaScript from query console
:   `cts.doc("/import/eids-from-920001-to-930000/2-s2.0-56549121017/2-s2.0-56549121017.xml");`

#### load example SCOPUS files

- unzip and copy to `sample-project/data/import`
- run `gradle importSampleData`
- adds to collection "sample-import"
- check content using "Admin" UI at localhost:8001 (user: admin, password: admin)
- splits content into 4 "forests" (`Configure` > `Databases` > `sample-project-content`)

##### loading example 1

2009 eids-from-920001-to-930000
:   10000 subfolders, each containing 2 files

compressed size
:   75.3 MB (75,299,386 bytes)

decompressed size on disk
:   422.6 MB

time used for loading
:   1 mins 23.012 secs

size in database after loading
:   791 MB

##### loading example 1

2009 eids-from-920001-to-1000000
:   8 times 10000 files 

compressed size
:   613.2 MB

decompressed size on disk
:   3.5 GB

time used for loading
:   990 sec

size in database after loading
:   6529 MB

- [developer.marklogic.com: Requirements 8.0](http://developer.marklogic.com/products/marklogic-server/requirements-8.0)

### Configuration

#### `ml-modules`

`rest-properties.json` file in the root of this directory is used to configure the properties of the REST API server

- [docs.marklogic.com: REST: GET: v1 config properties](http://docs.marklogic.com/REST/GET/v1/config/properties)
- [docs.marklogic.com: REST: POST: manage v2 servers](http://docs.marklogic.com/REST/POST/manage/v2/servers)

## Sample Stack

- [github: marklogic: marklogic-samplestack](https://github.com/marklogic/marklogic-samplestack)

### Replacing Data

- seed-data is downloaded from `http://developer.marklogic.com/media/gh/seed-data1.8.2.tgz` and stored at `appserver/java-spring/build/seed-data/seed-data`

data is loaded by
:   `appserver/java-spring/buildSrc/src/main/groovy/MarkLogicSlurpTask.groovy`

- the `MarkLogicSlurpTask.groovy` is sourced in `appserver/java-spring/build.gradle`

### Gradle Operations

navigate to folder
:   `cd appserver/java-spring`

show list of possible tasks
:   `./gradlew tasks`

```
Application tasks
-----------------
bootRun - Run the project with support for auto-detecting main class and reloading static resources
installApp - Installs the project as a JVM application along with libs and OS specific scripts.
run - Runs this project as a JVM application
...
```

### Installation

MarkLogic version 8.0-1,1, 8.0-2 or 8.0-3 download from [developer.marklogic.com: products](http://developer.marklogic.com/products)
:   `http://developer.marklogic.com/download/binaries/8.0/MarkLogic-8.0-3.x86_64.rpm?t=piQY4WloiXZ29qQwSGHhZ0&email=bo.werth%40gmail.com`

start ML server (will autostart after reboot)
:   `sudo /etc/init.d/MarkLogic start`

compared to RHEL, Fedora provides `libsasl2.so.3` instead of `libsas2.so.2`
:   `sudo ln -s /lib64/libsasl2.so.3.0.0 /lib64/libsasl2.so.2`

#### JavaScript setup

- [github: marklogic: README-JavaScript.md](https://github.com/marklogic/marklogic-samplestack/blob/master/README-JavaScript.md)

resolve `gulp` version conflict
:   `sudo npm uninstall -g gulp`, `sudo npm install -g https://registry.npmjs.org/gulp/-/gulp-3.8.11.tgz`

default global `gulp` installation (latest)
:   `sudo npm install -g gulp`

install JavaScript dependencies
:   `cd marklogic-samplestack`, `npm install`

update dependencies
:   `npm update`

first-time setup and initial test (requires running marklogic server)
:   `gulp once --browser=<browsername>` supply one of "chrome", "firefox" or "ie"

build, unit-test, run
:   `gulp run`

run in watch mode
:   `gulp watch`

## Ingestion

- [docs.marklogic.com: guide: ingestion (PDF)](https://docs.marklogic.com/guide/ingestion.pdf)

### MarkLogic Content Pump (MLCP)

`$ ./ml local mlcp import -input_file_path sample-data -document_type json`

- [docs.marklogic.com: guide: content-pump](http://docs.marklogic.com/guide/ingestion/content-pump)

## Slush

Slush generator for a MarkLogic/node project

- [github: marklogic: slush-marklogic-node](https://github.com/marklogic/slush-marklogic-node)

The application assumes that you're storing JSON data. This shows up in the default format request for the MLRest service's searchContext, the detailController's (detail-ctrl.js) request to get a document, and in the out-of-the-box detail view.

## Roxy

Roxy is a utility for configuring and deploying MarkLogic applications. Using Roxy you can define your app servers, databases, forests, groups, tasks, etc in local configuration files. Roxy can then remotely create, update, and remove those settings from the command line.

- [github: marklogic: roxy](https://github.com/marklogic/roxy)
