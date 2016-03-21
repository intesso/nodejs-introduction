var express = require('express');
var app = express();
var request = require('superagent');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// middleware with specific route
app.get('/__directory', function(req, res, next){
  if (req.accepts('json')) {
    return res.send({directory: "from express"});
  }
  res.send('directory from express');
  next();
});

// chaining middleware
app.use(function(req, res, next) {
  console.log('hello middleware');
  request
    .get('http://localhost:8000/__directory')
    .accept('json')
    .end(function(err, res){
      if (err) return console.log('directory error', err);
      console.log('directory', res.text);
    })
  next();
});

// sending middleware
app.use(function(req, res, next){
  res.render('index', {world: 'welt'});
});

// error handler middleware
app.use(function(err, req, res, next){
  console.error('err', err);
});

app.listen('8000', function(){
  console.log('server running on port 8000');
});
