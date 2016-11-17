title: node.js intro
author:
  name: Andi Neck
  twitter: andineck
  url: http://intesso.com
controls: true
progress: true
style: style.css
output: index.html

--
# node.js intro


> http://intesso.github.io/nodejs-introduction

feedback and pull requests welcome on [GitHub ](https://github.com/intesso/nodejs-introduction)[![github](img/github.png)](https://github.com/intesso/nodejs-introduction)


*navigate with left, right keys*

--
### what is node.js

> "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world."
>
> Source: https://nodejs.org/en/

--
### who uses node.js

![node rules the world](img/used-by.png)
*and many more ...*

--
### trend ( *jan-2014 - nov-2016* )

![node is trendy](img/trend.png)


--
### use cases

- build chain [gulp](http://gulpjs.com/), [grunt](http://gruntjs.com/): compile, lint, bundle, etc...
- website / webapp [express](http://expressjs.com/), [hapijs](http://hapijs.com/)
- backend for mobile apps
- RESTful services [restify](http://restify.com/)
- microservices [seneca](http://senecajs.org/)
- desktop applications [electron](http://electron.atom.io/), e.g. [atom](https://atom.io/), [brave](https://www.brave.com/), [visual studio code](https://code.visualstudio.com/)
- commandline tools [npm package.json bin](https://docs.npmjs.com/files/package.json#bin), [commander](https://www.npmjs.com/package/commander), [minimist](https://www.npmjs.com/package/minimist)
- messaging (TCP, UDP, http, https, ...) [node.js api](https://nodejs.org/api/)
- IoT [Node-RED](https://nodered.org/), [cyclon.js](http://cylonjs.com/)
- native c, c++ modules [addons](https://nodejs.org/api/addons.html)
- basically any I/O, Network or Web Stuff that needs asynchronous/parallel processing

--
### runs on
> basically anything:
>
> **windows, linux, mac, arm, docker** ...

download: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

--
### what makes node.js stand out?

- same language on the server and the browser
- excellent module system [npm](https://www.npmjs.com/)
- more than 
  - 230'000 npm modules (Jan 2016)
  - 350'000 npm modules (Nov 2016)
- quite good open source communities
- sharing spirit
- part of the linux foundation
- and there is more ...

--
### what is (was) io.js?

- a fork of node.js
- because developers were not happy with the development of the stewardship of [joyent](https://www.joyent.com/)
- that was merged in September 2015 into node.js 4.0
- it lead to a well governed OSS projects
- that includes everyone: developers, organizations, ...
- under the umbrella of the linux foundation

--
### node.js releases

- LTS: long term support (even numbers)
  - current release (Nov 2016): V6 "Boron"
  - actively maintained for 18 month, maintenance mode afterwards
  - no more than two LTS versions at the same time
- Stable: shorter lifespan, more updates (odd numbers)
  - current release (Nov 2016): V7
  - when Stable release becomes the next LTS, no new features or breaking changes are added

--
### how was node.js started?

**Ryan Dahls thesis**

> io needs to be done differently
>
> [original node.js presentation by Ryan Dahl](https://youtu.be/ztspvPYybIY?t=48)

--
### the cost of i/o

      L1-cache           3 cycles

      L2-cache          14 cycles

      RAM              250 cycles

      Disk      41'000'000 cycles

      Network  240'000'000 cycles

> don't block on I/O access

but how?

> Threads in combination with Object oriented programming can be really painful and error prone.

--
### event-loop

![single-threaded-code](img/node-threading.png)
[source: https://strongloop.com/strongblog/node-js-performance-event-loop-monitoring/](https://strongloop.com/strongblog/node-js-performance-event-loop-monitoring/)

--
### event-loop

- your code is single threaded, basically everything else runs in parallel
- event-loop [event-loop explanation](https://nodesource.com/blog/understanding-the-nodejs-event-loop/), [ryan dahl's original presentation](https://www.youtube.com/watch?v=ztspvPYybIY), is based on `libuv`
- EventEmitter to interact with the event-loop
- EventEmitter itself is synchronous

--
### more node.js building blocks

- [module system](https://nodejs.org/api/modules.html)
- [events](https://nodejs.org/api/events.html)
- [streams](https://nodejs.org/api/stream.html)

**what's underneath**
> - node.js is built on top of google chrome V8
> - Microsoft submitted a [pull request](https://blogs.windows.com/msedgedev/2016/01/19/nodejs-chakracore-mainline/) for support with it's ChakraCore in January 2016

--
### editors

- [visual studio code](http://code.visualstudio.com/)
- [atom](https://atom.io/)
- [brackets](http://brackets.io/)
- [sublimetext](http://www.sublimetext.com/3)
- [vim](https://github.com/moll/vim-node)
- [WebMatrix](http://www.hanselman.com/blog/WebMatrixAndNodejsTheEasiestWayToGetStartedWithNodeOnWindows.aspx)
- [WebStorm](https://www.jetbrains.com/webstorm/download/)
- [nodeclipse](http://www.nodeclipse.org/)

**pick whatever you like!**

--
### debugging

> [debugging node.js](http://spin.atomicobject.com/2015/09/25/debug-node-js/) within IDE or with [node-inspector](https://www.npmjs.com/package/node-inspector) or with node >= 6

```sh
# install once
npm install -g node-inspector
# use
node-debug myapp.js
# chrome inspector included with node >= 6.0
node --inspect myapp.js
```

> [restarting node.js server on code changes](https://strongloop.com/strongblog/comparison-tools-to-automate-restarting-node-js-server-after-code-changes-forever-nodemon-nodesupervisor-nodedev/)
> use [nodemon](http://nodemon.io/) or [forever](https://www.npmjs.com/package/forever)

```sh
# install once
npm install -g nodemon
# use
nodemon myapp.js
```

--
### coding

> file server

```js
var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (req, res) {
  if (req.url == '/favicon.ico') return res.end();
  var stream = fs.createReadStream(process.cwd() + req.url);
  stream.pipe(res);
});

server.listen(8000);
console.log('fileserver running at: http://localhost:8000');
```

--
### coding

> using EventEmitter

```js
var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', function (req, res) {
  if (req.url == '/favicon.ico') return res.end();
  var stream = fs.createReadStream(process.cwd() + req.url, 'utf-8');
  stream.on('data', function(data){
    res.write('\n\ngot data: ' + data);
  });
  stream.on('error', function(err){
    res.write('\n\nshit happens' + err);
  });
  stream.on('end', function(){
    res.end('\n\ndone, no more data');
  });
});

server.listen(8000);
console.log('fileserver running at: http://localhost:8000');
```

--
### learning, learning, learning...

- node.js [api](https://nodejs.org/api/)
- web apis [devdocs](http://devdocs.io/)
- testing node.js server + npm online [tonicdev](https://tonicdev.com/)
- testing node.js browserified bundles [requirebin](http://requirebin.com/)

> get some great interacitve node.js lessons:

```sh
npm install learnyounode -g
npm install workshopper -g
npm install adventure -g
npm install functional-javascript-workshop -g
```

--
### built with node.js at [intesso](http://intesso.com/)

- Traffic Control System
  - Realtime UI with WebSockets (socket.io)
  - TCP/XML Interfaces
- Intelligent Charging Station
  - Communication with OSGI bundle via 0mq
  - binding with python code with zerorpc
  - SOAP WebService Interfaces
  - Proprietary Binary Interface with Charging Station
  - Admin Web UI
- [On demand Remote Access](http://intesso.com/projects/remote-access)
- Modular Content Management System: [GlintCMS](http://glintcms.com/), based on [GlintApp](https://github.com/glintapp/glintapp)
- and many Open Source npm Modules: [andineck](https://www.npmjs.com/~andineck)

--
### personal experiences with node.js [@andineck](https://twitter.com/andineck)

- started with v0.6
- v0.8, v0.12, v4.3 in production
- so far, I hardly ever experienced unexpected behaviour from node.js
- when something was not working the way I thought it should be, it was most of the time, because I didn't understand JavaScript well enough

> see also: http://intesso.github.io/javascript-obstacles
