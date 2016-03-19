var http = require('http');
var fs = require('fs');
var marked = require('marked');
var minimatch = require('minimatch');

var server = http.createServer();

server.on('request', function(req, res) {
  var path = process.cwd() + req.url;
  if (req.url == '/favicon.ico') return res.end();
  fs.stat(path, function(err, stat) {
    console.log(err, stat);
    if (err) return res.end('nothing here');
    if (stat.isFile()) {
      // file
      // render markdown
      if (req.url.endsWith('.md')) {
        res.setHeader('content-type', 'text/html');
        res.end(marked(fs.readFileSync(path, 'utf8')));
      } else {
        // stream file
        if (req.url.endsWith('.html')) res.setHeader('content-type', 'text/html');
        var stream = fs.createReadStream(path);
        stream.pipe(res);
      }
    } else if (stat.isDirectory()) {
      // render directory into
      res.setHeader('content-type', 'text/html');
      res.write('<ul>')
      var ls = fs.readdirSync(path);
      var urlPath = req.url.split('/')[1];
      ls.forEach(function(entry) {
        res.write('<li><a href="' + urlPath + '/' + entry + '">' + entry + '</a></li>');
      });
      res.write('</ul>');
      res.end();
    } else {
      return res.end('no file to display');
    }
  });

});

server.listen(8000);
console.log('fileserver running at: http://localhost:8000');