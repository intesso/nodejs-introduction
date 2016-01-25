title: node.js Introduction
author:
  name: Andi Neck
  twitter: andineck
  url: http://intesso.com
controls: false
progress: true
style: style.css
output: index.html


--
# node.js introduction

> http://intesso.github.io/nodejs-introduction
--
### who uses node.js

![node rules the world](img/used-by.png)

--
### trend

![node rules the world](img/trend.png)

--
### use cases

- build chain [gulp](http://gulpjs.com/), [grunt](http://gruntjs.com/): compile, lint, bundle, etc...
- website / webapp [express](http://expressjs.com/) [hapijs](http://hapijs.com/)
- backend for mobile apps
- RESTful services [restify](http://restify.com/)
- microservices [seneca](http://senecajs.org/)
- desktop applications [electron](http://electron.atom.io/)
- commandline tools [commander](https://www.npmjs.com/package/commander), [minimist](https://www.npmjs.com/package/minimist)
- messaging (TCP, UDP, http, https, ...) [node.js api](https://nodejs.org/api/)
- IoT [cyclon.js](http://cylonjs.com/)
- native c, c++ modules [addons](https://nodejs.org/api/addons.html)
- generally anything that needs parallel processing

--
### runs on
> windows, linux, mac, arm, docker ...



[go download: https://nodejs.org/en/download/](https://nodejs.org/en/download/)

--

### what makes node.js stand out?

- event-loop [event-loop explanation](https://nodesource.com/blog/understanding-the-nodejs-event-loop/), [ryan dahl's original presentation](https://www.youtube.com/watch?v=ztspvPYybIY)
- same language on the server and the browser
- excellent module system [npm](https://www.npmjs.com/)
- more than 230'000 npm modules
- quite good open source communities

--
### node.js building blocks

- event-loop (abstracted away)
  > callbacks, promises, generators
- [module system](https://nodejs.org/api/modules.html)
- [events](https://nodejs.org/api/events.html)
- [streams](https://nodejs.org/api/stream.html)


--
### editors

- [atom](https://atom.io/)
- [brackets](http://brackets.io/)
- [sublimetext](http://www.sublimetext.com/3)
- [vim](https://github.com/moll/vim-node)
- [WebMatrix](http://www.hanselman.com/blog/WebMatrixAndNodejsTheEasiestWayToGetStartedWithNodeOnWindows.aspx)
- [WebStorm](https://www.jetbrains.com/webstorm/download/)
- [nodeclipse](http://www.nodeclipse.org/)


--
### debugging

> [debugging node.js](http://spin.atomicobject.com/2015/09/25/debug-node-js/)

[tools for restarting node.js server automatically](https://strongloop.com/strongblog/comparison-tools-to-automate-restarting-node-js-server-after-code-changes-forever-nodemon-nodesupervisor-nodedev/)

> reload node.js server automatically with [nodemon](http://nodemon.io/) or [forever]()



--
### code 1

> file server

```js
var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer();

server.on('request', function (req, res) {
  var url = req.url.replace('/', '');
  var filename = path.resolve(__dirname, '../', url);
  if (url == 'favicon.ico') return res.end();
  var stream = fs.createReadStream(filename);
  stream.pipe(res);
});

server.listen(8000);


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