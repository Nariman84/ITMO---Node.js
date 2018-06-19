
//Задача 1
var http = require('http'); // подключение модуля
http.createServer (function (request, response) {// вызов метода создания http сервера
	console.log("HTTP works!");
}).listen (8080);

//Задача 2
/*var http = require('http');
http.createServer (function (request, response) {
	console.log("HTTP works!");
	response.writeHead(404, {'Content-Type':'text/html'});
	response.write("<h1>Hello!</h1>");
	response.end();
}).listen (8080);*/