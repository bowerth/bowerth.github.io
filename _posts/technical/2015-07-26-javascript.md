---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}

## npm

list packages
:   `npm list -g >> ~/Downlads/npm-packages.txt`

use registry
:   `npm install --registry=https://registry.npmjs.org/`

set registry
:   `npm config set registry https://registry.npmjs.org/`


### local registry

- [sinopia npm package](https://www.npmjs.com/package/sinopia)
- [sinopia docker](https://hub.docker.com/r/keyvanfatehi/sinopia/)

~~~
docker stop sinopia
~~~

- [verdaccio](https://github.com/verdaccio/verdaccio) fork of sinopia that works with `@` packages (e.g. `@types`)

start server
:   `verdaccio`

use local registry
:   `npm install --registry=http://localhost:4873/`

authenticate
:   `npm adduser --registry http://localhost:4873/`

- add to `package.json`

~~~
{
  "...": {

  },
  "publishConfig": {
    "registry": "http://localhost:4873/",
    "always-auth": false,
    "_auth": "...",
    "email": "...@gmail.com"
  }
}
~~~

- publish to registry using `npm publish`
- add `registry": "http://localhost:4873/` to `.npmrc` in project root


## Editors

### Brackets

- [brackets.io](http://brackets.io)
- [github: adobe/brackets](https://github.com/adobe/brackets)

ingore lint issues "use before imported"

~~~
/* global d3, packageHierarchy, packageImports, mouseovered, mouseouted, self */
~~~

attach library to js file

~~~
var script = document.createElement('script');
script.src = "http://d3js.org/d3.v3.min.js";
document.getElementsByTagName('head')[0].appendChild(script);
~~~

add style information (CSS) to JavaScript

~~~
var style = document.createElement('style');
style.innerHTML = "body { background-color: black; } .node { font: 300 11px 'Helvetica Neue', Helvetica, Arial, sans-serif; fill: #bbb; } .node:hover { fill: #000; } .link { stroke : #8064A2; stroke-opacity: .4; fill: none; pointer-events: none; } .node:hover, .node--source, .node--target { font-weight: 700; } .node--source { fill: #4F81BD; } .node--target { fill: #C0504D; } .link--source, .link--target { stroke-opacity: 1; stroke-width: 2px; } .link--source { stroke: #C0504D; } .link--target { stroke: #4F81BD; }";
document.body.appendChild(style);
~~~


#### Install Fedora 25

- [copr: brackets](https://copr.fedorainfracloud.org/coprs/mosquito/brackets/)

~~~
cd ~/Downloads
wget https://copr.fedorainfracloud.org/coprs/mosquito/brackets/repo/fedora-25/mosquito-brackets-fedora-25.repo
sudo mv ./mosquito-brackets-fedora-25.repo /etc/yum.repos.d/
sudo dnf install -y brackets
~~~

#### Build Fedora 25

- clone [github: adobe/brackets](https://github.com/adobe/brackets/)

~~~
cd ~/src/javascript/brackets
git submodule update --init
~~~

- clone [github: adobe/brackets-shell](https://github.com/adobe/brackets-shell/)

~~~
# if libudev.so.0 missing
# sudo ln -s /usr/lib64/libudev.so.1.6.5 /usr/lib64/libudev.so.0
cd ~/src/javascript/brackets-shell
git checkout linux-1547
npm install
grunt setup
grunt build
./out/Release/Brackets
~~~

- select `/home/xps13/src/javascript/brackets/src/index.html`

prevent having to select `index.html` at each start

~~~
cd ~/src/javascript/brackets
bash ./tools/setup_for_hacking.sh /home/xps13/src/javascript/brackets-shell/out/Release
~~~


#### Using spec files

- both `spec` files could not find the cef version on S3
- cef version also not available from [cefbuilds](http://opensource.spotify.com/cefbuilds/index.html)

~~~
cd ~/src/unix/brackets
## wget https://raw.githubusercontent.com/UnitedRPMs/brackets/master/brackets.spec
wget https://raw.githubusercontent.com/FZUG/repo/master/rpms/brackets/brackets.spec
fedpkg --release f25 local
~~~


## JS Commands

test `NaN`
:   `isNaN(NaN)` -> `true`

## jQuery

### DataTables

- [datatables: DataTables - Table plug-in for jQuery](https://www.datatables.net)
- [github: DataTables: DataTables](https://github.com/DataTables/DataTables)

### load jQuery into browser console

~~~
var script = document.createElement("script");
  script.setAttribute("src", "//code.jquery.com/jquery-1.11.3.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
  // ... give time for script to load, then type.
jQuery.noConflict();
~~~

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

`$ jspm dl-loader --latest`

## History

- [Crockford on JavaScript - Volume 1: The Early Years](https://www.youtube.com/watch?v=JxAXlJEmNMg)

## Tools

- [github: remy: jsconsole](https://github.com/remy/jsconsole)
- [jsconsole.com](http://jsconsole.com)

## dygraphs.js

- [dygraphs.com: data format](http://dygraphs.com/data.html)

## plotly.js

- [plot.ly: javascript](https://plot.ly/javascript)
- [scattergl](http://stack.gl)

### Building

- `tasks/bundle.js`: run `npm run build -- dev` or `npm run build -- --dev` to include source map in the plotly.js bundle. This script is meant for dist builds; the output bundles are placed in `plotly.js/dist/`. Use `npm run watch` for dev builds

remove `npm`
:   `sudo /usr/local/bin/npm rm npm -g`

- [Completely removing Node.js and Npm](https://hungred.com/how-to/completely-removing-nodejs-npm/)

install `nvm`
:   `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash`

install `node`
:   `nvm install node`  
    `nvm use node`

install `grunt`
:   `npm install -g grunt` (sudo not necessary with nvm)

install latest `npm`
:   `npm install npm@latest -g`

the following steps were required with npm version < 5.0.3

~~~
## install mapbox-gl-js
git clone https://github.com/plotly/mapbox-gl-js
cd mapbox-gl-js
git checkout v0.22.1-branch
npm install -g
npm install deps/mapbox-gl-shaders
npm install deps/mapbox-gl-style-spec
~~~

~~~
## modify `plotly.js/package.json`
-    "mapbox-gl": "^0.22.0",
 +    "@plotly/mapbox-gl": "0.22.1",
## modify `/src/plots/mapbox/index.js and `/src/plots/mapbox/mapbox.js`
## replace `mapbox-gl` with `@plotly/mapbox-gl`
~~~

continue here

~~~
cd /home/xps13/src/javascript/plotly.js
npm install
rm node_modules
npm run build -- dev
~~~

### Custom Bundle

- make copy of `lib/index-cartesian.js` and add to `tasks/util/constants.js` (rename e.g. `lib/index-custom.js`)

~~~
var Plotly = require('./core');

Plotly.register([
    require('./bar'),
    require('./box'),
    require('./heatmap'),
    require('./histogram'),
    require('./histogram2d'),
    require('./histogram2dcontour'),
    require('./pie'),
    require('./contour'),
    require('./scatterternary')
]);

module.exports = Plotly;
~~~

- execute `npm run build -- dev`


### Change logo

- [svgomg](https://jakearchibald.github.io/svgomg/)
- [fontello: how to use custom images](https://github.com/fontello/fontello/wiki/How-to-use-custom-images)

modify `glyph-name="plotlylogo"` in `src/fonts/ploticon/ploticon.svg`

~~~
<glyph glyph-name="plotlylogo" unicode="&#xe80a;" d="m0-10h182v-140h-182v140z m228 146h183v-286h-183v286z m225 714h182v-1000h-182v1000z m225-285h182v-715h-182v715z m225 142h183v-857h-183v857z m231-428h182v-429h-182v429z m225-291h183v-138h-183v138z" horiz-adv-x="1542" />
~~~

fontello `globe`

~~~
<glyph glyph-name="globe" unicode="&#xe800;" d="M429 779q116 0 215-58t156-156 57-215-57-215-156-156-215-58-216 58-155 156-58 215 58 215 155 156 216 58z m153-291q-2-1-6-5t-7-6q1 0 2 3t3 6 2 4q3 4 12 8 8 4 29 7 19 5 29-6-1 1 5 7t8 7q2 1 8 3t9 4l1 12q-7-1-10 4t-3 12q0-2-4-5 0 4-2 5t-7-1-5-1q-5 2-8 5t-5 9-2 8q-1 3-5 6t-5 6q-1 1-2 3t-1 4-3 3-3 1-4-3-4-5-2-3q-2 1-4 1t-2-1-3-1-3-2q-1-2-4-2t-5-1q8 3-1 6-5 2-9 2 6 2 5 6t-5 8h3q-1 2-5 5t-10 5-7 3q-5 3-19 5t-18 1q-3-4-3-6t2-8 2-7q1-3-3-7t-3-7q0-4 7-9t6-12q-2-4-9-9t-9-6q-3-5-1-11t6-9q1-1 1-2t-2-3-3-2-4-2l-1-1q-7-3-12 3t-7 15q-4 14-9 17-13 4-16-1-3 7-23 15-14 5-33 2 4 0 0 8-4 9-10 7 1 3 2 10t0 7q2 8 7 13 1 1 4 5t5 7 1 4q19-3 28 6 2 3 6 9t6 10q5 3 8 3t8-3 8-3q8-1 8 6t-4 11q7 0 2 10-2 4-5 5-6 2-15-3-4-2 2-4-1 0-6-6t-9-10-9 3q0 0-3 7t-5 8q-5 0-9-9 1 5-6 9t-14 4q11 7-4 15-4 3-12 3t-11-2q-2-4-3-7t3-4 6-3 6-2 5-2q8-6 5-8-1 0-5-2t-6-2-4-2q-1-3 0-8t-1-8q-3 3-5 10t-4 9q4-5-14-3l-5 0q-3 0-9-1t-12-1-7 5q-3 4 0 11 0 2 2 1-2 2-6 5t-6 5q-25-8-52-23 3 0 6 1 3 1 8 4t5 3q19 7 24 4l3 2q7-9 11-14-4 3-17 1-11-3-12-7 4-6 2-10-2 2-6 6t-8 6-8 3q-9 0-13-1-81-45-131-124 4-4 7-4 2-1 3-5t1-6 6 1q5-4 2-10 1 0 25-15 10-10 11-12 2-6-5-10-1 1-5 5t-5 2q-2-3 0-10t6-7q-4 0-5-9t-2-20 0-13l1-1q-2-6 3-19t12-11q-7-1 11-24 3-4 4-5 2-1 7-4t9-6 5-5q2-3 6-13t8-13q-2-3 5-11t6-13q-1 0-2-1t-1 0q2-4 9-8t8-7q1-2 1-6t2-6 4-1q2 11-13 35-8 13-9 16-2 2-4 8t-2 8q1 0 3 0t5-2 4-3 1-1q-1-4 1-10t7-10 10-11 6-7q4-4 8-11t0-8q5 0 11-5t10-11q3-5 4-15t3-13q1-4 5-8t7-5l9-5t7-3q3-2 10-6t12-7q6-2 9-2t8 1 8 2q8 1 16-8t12-12q20-10 30-6-1 0 1-4t4-9 5-8 3-5q3-3 10-8t10-8q4 2 4 5-1-5 4-11t10-6q8 2 8 18-17-8-27 10 0 0-2 3t-2 5-1 4 0 5 2 1q5 0 6 2t-1 7-2 8q-1 4-6 11t-7 8q-3-5-9-4t-9 5q0-1-1-3t-1-4q-7 0-8 0 1 2 1 10t2 13q1 2 3 6t5 9 2 7-3 5-9 1q-11 0-15-11-1-2-2-6t-2-6-5-4q-4-2-14-1t-13 3q-8 4-13 16t-5 20q0 6 1 15t2 14-3 14q2 1 5 5t5 6q2 1 3 1t3 0 2 1 1 3q0 1-2 2-1 1-2 1 4-1 16 1t15-1q9-6 12 1 0 1-1 6t0 7q3-15 16-5 2-1 9-3t9-2q2-1 4-3t3-3 3 0 5 4q5-8 7-13 6-23 10-25 4-2 6-1t3 5 0 8-1 7l-1 5v10l0 4q-8 2-10 7t0 10 9 10q0 1 4 2t9 4 7 4q12 11 8 20 4 0 6 5 0 0-2 2t-5 2-2 2q5 2 1 8 3 2 4 7t4 5q5-6 12-1 5 5 1 9 2 4 11 6t10 5q4-1 5 1t0 7 2 7q2 2 9 5t7 2l9 7q2 2 0 2 10-1 18 6 5 6-4 11 2 4-1 5t-9 4q2 0 7 0t5 1q9 5-3 9-10 2-24-7z m-91-490q115 21 195 106-1 2-7 2t-7 2q-10 4-13 5 1 4-1 7t-5 5-7 5-6 4q-1 1-4 3t-4 3-4 2-5 2-5-1l-2-1q-2 0-3-1t-3-2-2-1 0-2q-12 10-20 13-3 0-6 3t-6 4-6 0-6-3q-3-3-4-9t-1-7q-4 3 0 10t1 10q-1 3-6 2t-6-2-7-5-5-3-4-3-5-5q-2-2-4-6t-2-6q-1 2-7 3t-5 3q1-5 2-19t3-22q4-17-7-26-15-14-16-23-2-12 7-14 0-4-5-12t-4-12q0-3 2-9z" horiz-adv-x="857.1" />
~~~


### Issues

- [Modularizing monolithic JS projects](https://plot.ly/javascript/modularizing-monolithic-javascript-projects/)

Plotly's open source javascript graphing library, plotly.js, includes multiple different trace types (e.g. pie, scatter, bar, choropleth etc.) and as we add more types - especially with the inclusion of WebGL types - our bundle size grows ever more daunting. For a while, we've received requests to implement a module system, and have recently published our first modular release, allowing users to bundle only the specific trace modules they need.

- plot export: in order to save as a static image in a vector image format, the plotly API is connected. This requires an online connection and slows down the generation of images.


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


## Knockout.js

- [knockoutjs.com](http://knockoutjs.com)


## React.js

- [facebook.github.io: react](https://facebook.github.io/react)
- [github: reactjs](https://github.com/reactjs)


## Preact

- [preactjs.com](https://preactjs.com) Fast 3kB alternative to React with the same ES6 API.


## reveal.js

- [github: hakimel: reveal.js](https://github.com/hakimel/reveal.js)
- [example presentation](http://lab.hakim.se/reveal-js/#)
- [example source code](https://raw.githubusercontent.com/hakimel/reveal.js/master/index.html)


## [Grunt.js](http://gruntjs.com/)

- [github: gruntjs](https://github.com/gruntjs/)
- [heroku devcenter: Building Node.js Apps with Grunt](https://devcenter.heroku.com/articles/node-with-grunt)
- [gruntjs.com: Sample Gruntfile](http://gruntjs.com/sample-gruntfile)
