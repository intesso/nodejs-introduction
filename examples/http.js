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
