var net = require('net');

var server = net.createServer((socket) => {
  socket.write('hi\n', 'utf8');
  socket.end('goodbye\n');
});

// grab a random port.
server.listen((err) => {
  if (err) throw err;
  var address = server.address();
  console.log('opened server on %j', address);
});