var telnet = require('./lib')

var tester = new telnet();
var test = function (host, port) {
  console.log('testing ', host + ':' + port, tester.test(host, port));
}

var testrange = function (host, startport, endport) {
  var port;
  console.log('testing range', startport, 'till', endport);
  for (port = startport; port <= endport; port = port + 1) {
    if (port % 100 === 0) {
      console.log('current port', port);
    }
    if (tester.test(host, port)) {
      console.log('Open port: ', host + ':' + port);
    }
  }
}

test('localhost', 11311);
test('localhost', 11411);
test('localhost', 4847);
test('localhost', 4848);

testrange('localhost', 8000, 10000);
