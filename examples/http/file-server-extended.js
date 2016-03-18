var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (req, res) {
  var path = process.cwd() + req.url;
  fs.stat(path, function (err, stat){
    console.log(err, stat);
    if (err) return res.end('nothing here');
    if (stat.isFile()) {
      var stream = fs.createReadStream(path);
      stream.pipe(res);
    } else {
      return res.end('no file to display');
    }
  });

});

server.listen(8000);
console.log('fileserver running at: http://localhost:8000');