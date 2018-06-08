/*Задача 1

Требуется реализовать декоратор с параметрами pause, 
который откладывает выполнение функции на указанное 
количество секунд. Пример использования:
function func() {
	console.log('Функция выполниться с задержкой в 2 секунды!');
}
pause(func, 2);*/

/*function func() {
	alert('Прошло 2 секунды!');
}
function decorator(func, timeout){
	return function() {
		setTimeout(func, timeout);
	}
}
var pause = decorator(func, 2000);
pause();*/


/*3 (для итоговой работы): Разработать свою авторскую страницу на 
код ошибки 404. Вот статья на эту тему: https://habrahabr.ru/post/213227/*/

var fs = require('fs'); // подключение модуля работы с файлом.
var fileName = "url.html";
var fileName404 = "page_404.html";
var http = require('http');
http.createServer (function (req, res) {
	fs.readFile(fileName, 'utf8', function(err, data) {
		if (err) {
			console.log('Could not find or open file for reading\n');
			res.writeHead(404, {'Content-Type': 'mimeTypes'});
			fs.readFile(fileName404, 'utf8', function(err, data) {
				res.end(data)});
		} else {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end();
				}
			})
}).listen (8080);
console.log('Server running on 8080');

