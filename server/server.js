var http = require('http');

var server = new http.Server();

server.listen("1337, 127.0.0.1");

server.on('request', function(req, res) {
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end("Hello world!");

});
console.log('Server runned');