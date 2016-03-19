var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  console.log('hello middleware');
  next();
});

app.use(function(req, res, next){
  res.render('index', {world: 'welt'});
});

app.listen('8000', function(){
  console.log('server running on port 8000');
});
