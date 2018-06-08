var http = require("http");
var fs = require('fs');
var url = require("url");
var path = require('path');


/*http.createServer (function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Пoлyчeн запрос " + pathname);
	fs.readFile('index.html', 'utf8', function(error, data) {
		if (error) {
			console.log('Could not find or open file for reading\n');
		} else {
			response.writeHead (200, {'Content-Type':'text/html'});
			response.end(data);
		}
	})
}).listen(8080);*/



/*http.createServer (function onRequest(request, response) {
	var postData = "";
	var pathname = url.parse(request.url).path;
	if (pathname == '/')
	pathname = '/index.html';
// чтобы убрать начальный слэш
	pathname = pathname.substring(1, pathname.length);
	fs.readFile (pathname, 'utf8', function (err, data) {
		if (err) {
			console.log('Could not find or open file' + pathname +' for reading\n');
		} else {
			response.writeHead(200, {'Content-Type':'text/html'});
			response.end(data);
		}
	}
}).listen(8080);*/



var path = require('path');
var mimeTypes = {
	'.js' : 'text/javascript',
	'.html': 'text/html',
	'.css' : 'text/css',
	'.jpg' : 'images/jpeg',
	'.gif' : 'images/gif'
};

/*fs.readfile(pathname, 'utf8', function (err, data) {
	if (err) {
		console.log('Could not find or open file '+	pathname + 'for reading\n');
	} else {
		response.writeHead(200, {'ContentType':'mimeTypes[path.extname(pathname)]'});
		response.end(data);
	}
})*/

http.createServer(function onRequest(request, response) {
	var pathname = url.parse(request.url).path;
	if (pathname =='/') {
		pathname = '/index.html';
	}
	var extname = path.extname(pathname);
	console.log(extname);
	var mimeType = mimeTypes[path.extname(pathname)];
	pathname = pathname.substring(1, pathname.length);
	if((extname == ".gif") || (extname == ".jpg")) {
		var img = fs.readFileSync ('./' + pathname);
		response.writeHead(200, {'Content-Type': mimeType});
		response.end(img, 'binary');
	} else {
		fs.readFile (pathname, 'utf8', function(err, data) {
			if (err) {
				console.log ('Could not lind or open lile ' + pathname + ' for reading\n');
			} else {
				console.log (pathname + " " + mimeType);
				response.writeHead (200, {'Content-Type': mimeType});
				response.end(data);
			}
		})
	}
}).listen(8080);