var net = require('net');

var port = process.argv[2];

if (!port) {
  console.log('first argument must be port');
  process.exit(-1);
}

var client = net.connect({port}, () => {
  // 'connect' listener
  console.log('connected to server!');
  client.write('world!\r\n');
});
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});
client.on('end', () => {
  console.log('disconnected from server');
});
