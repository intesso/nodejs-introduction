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