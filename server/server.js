var http = require('http');

var server = new http.Server();

server.listen("8080, 31.31.192.87");

server.on('request', function(req, res) {
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end("Hello world!");

});
console.log('Server runned');