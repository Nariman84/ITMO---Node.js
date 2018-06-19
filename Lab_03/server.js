//Задача 1:

//a)


/*var http = require ('http');
var fs = require ('fs');
var fileLang = process.argv[2];
var fileName;
var server = http.createServer (function (request, response) {
	if (fileLang == 'ru') {
		fileName = 'ru.html';
	} else if (fileLang == 'en') {
		fileName = 'en.html';
	}
	fs.readFile (fileName, 'utf8', function (err, data) {
		if (err) {
			console.error (err);
		} else {
			response.writeHead(200, {'Content-Type':'text/html'});
			response.end(data);
		}
	});
});

server.listen(8080);
console.log('Сервер запущен!');*/


//b)

/*var http = require ('http');
var fs = require ('fs');
console.log(process.env.LANG);
var fileName;
var server = http.createServer (function (request, response) {
	var fileLang = process.env.LANG;
	if (fileLang.substr(0, 2) == 'ru') {
		fileName = 'ru.html';
	} else if (fileLang.substr(0, 2) == 'en') {
		fileName = 'en.html';
	}	
	fs.readFile (fileName, 'utf8', function (err, data) {
		if (err) {
			console.error (err);
		} else {
			response.writeHead(200, {'Content-Type':'text/html'});
			response.end(data);
		}
	});
});

server.listen(8080);
console.log ('Сервер запущен!');*/



//Задача 2

var http = require('http');
var cp = require("child_process");

var child = cp.fork(__dirname + '/door.js');

child.on('message', function (data) {
  console.log("Server got message: ", data);
  child.kill();
});