#!/usr/local/bin/node

var express = require('express');
var app = express();
var fs = require('fs');

app.use(function(req, res, next) {
  console.log('hallo welt');
  next();
});

app.use(function(req, res, next) {
  if (req.url == '/favicon.ico') return res.end();
  var path = process.cwd() + req.url;
  console.log('hallo nochmals', path);
  fs.createReadStream(path).pipe(res);

});

app.listen(8000)