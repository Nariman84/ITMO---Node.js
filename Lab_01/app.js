var fs = require('fs'); // подключение модуля работы с файл.
var fileName = "index.html";
var fileName2 = "header.html";
var fileName3 = "body.html";
var fileName4 = "footer.html";
var http = require('http');
http.createServer (function (req, res) {
	fs.readFile(fileName2, 'utf8', function(err, data) {
		if (err) {
			console.log('Could not find or open file for reading\n');
		} else {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			fs.readFile(fileName3, 'utf8', function(err, data) {
				res.write(data);
				fs.readFile(fileName4, 'utf8', function(err, data) {
					res.write(data);
					res.end();
				})
			})
		}
	})
}).listen (8080);
console.log('Server running on 8080');