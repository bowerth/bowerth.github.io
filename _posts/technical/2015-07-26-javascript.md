---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}

## Supersets compiling to JavaScript

### [TypeScript](http://www.typescriptlang.org)

TypeScript is a superset of JavaScript that compiles to clean JavaScript output

- [github: Microsoft: TypeScript](https://github.com/Microsoft/TypeScript)

### Dart

Dart is an open-source, scalable programming language, with robust libraries and runtimes, for building web, server, and mobile apps.

- [dartlang.org](https://www.dartlang.org)

## Content Delivery Network (CDN)

- [jsdelivr.com](http://www.jsdelivr.com)

## JavaScript package manager (JSPM)

Registry and format agnostic 

- [npmjs.com: package: jspm](https://www.npmjs.com/package/jspm)

install jspm CLI
:   `$ sudo npm install jspm -g`

`$ jspm dl-loader --latest

## History

- [Crockford on JavaScript - Volume 1: The Early Years](https://www.youtube.com/watch?v=JxAXlJEmNMg)

## Tools

- [github: remy: jsconsole](https://github.com/remy/jsconsole)
- [jsconsole.com](http://jsconsole.com)

## timeline.js

- [timeline.knightlab.com: Timeline.js](http://timeline.knightlab.com)

## three.js

- [aerotwist.com: tutorials: getting started](https://aerotwist.com/tutorials/getting-started-with-three-js)

## Node.js

- [devsaran: 10 Best Node.js Frameworks For Developers](http://www.devsaran.com/blog/10-best-nodejs-frameworks-developers)

check Node version
:   `$ node -v`

update Node.js using [`n`](https://github.com/tj/n) (Node version management)
:   `$ sudo npm install -g n`  
	`$ sudo n stable`

## Rhino

- [developer.mozilla.org: Rhino](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino)

## [PhantomJS](http://phantomjs.org)

- Full web stack, no browser required
- PhantomJS is a headless WebKit scriptable with a JavaScript API
- it has fast and native support for various web standards: DOM handling, CSS selector, JSON, Canvas, and SVG

## [Mean.js](http://meanjs.org/)

Mean.js is a full-fledged JavaScript framework to build web applications using NoSQL database, MongoDB as well as Angular.js for the front-end and Express.js/Node.js for the backend (server). It also leverages the Grunt tool to enable automated testing. Mean.js and Mean.io are both considered a part of Mean stack. Mean stands for MongoDB, Express.js, Angular.js and Node.js. Ziploop is one example of a popular mobile application used for shopping which is designed using Mean stack.

- [github: meanjs: mean](https://github.com/meanjs/mean)
- [expressjs](http://expressjs.com/)

### Installation

clone from github
:   `git clone https://github.com/meanjs/mean.git meanjs`

install bower if not existing
:   `npm install -g bower`

navigate to cloned repo and install node dependencies (more than one time in case of errors?)
:   `npm install`

run application in dev mode on port 3000 (after starting mongodb instance)
:   `grunt`

#### using [Yeoman](http://yeoman.io/index.html)

follow instructions at [meanjs.org/generator](http://meanjs.org/generator.html)

install the *yo scaffolding tool*
:   `sudo npm install -g yo`

install the MEAN.JS generator
:   `npm install -g generator-meanjs`

navigate to project folder, generate new project in current folder
:   `yo meanjs`

#### existing installations

mean > MEAN
:   master, CRUD, no chat

mean-4.0.0 > MEAN
:   v4.0.0, CRUD, no chat

## AngularJS

- [angularjs.org](https://angularjs.org/)
- [w3schools.com: AngularJS Tutorial](http://www.w3schools.com/angular/)
- [angular.io](https://angular.io/)

- [angular 2](https://angular.io)

## reveal.js

- [github: hakimel: reveal.js](https://github.com/hakimel/reveal.js)
- [example presentation](http://lab.hakim.se/reveal-js/#)
- [example source code](https://raw.githubusercontent.com/hakimel/reveal.js/master/index.html)

## [Grunt.js](http://gruntjs.com/)

- [github: gruntjs](https://github.com/gruntjs/)
- [heroku devcenter: Building Node.js Apps with Grunt](https://devcenter.heroku.com/articles/node-with-grunt)
- [gruntjs.com: Sample Gruntfile](http://gruntjs.com/sample-gruntfile)
