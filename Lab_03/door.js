var http = require('http');
var url = require('url');

var server = http.createServer().listen(8080);
server.on ('request', function (req, res) {
	process.send(url.parse(req.url, true).query.id);
	process.send(url.parse(req.url, true).query.code);
	server.close();
});