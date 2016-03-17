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