var express = require('express');
var bodyParser = require('body-parser');
var mustacheExpress = require('mustache-express');
var app = express();
app.listen(8080);

app.use(bodyParser.urlencoded({	extended: false }));
app.use(express.static('public'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + "/index.html")
});

app.post('/reg', function(req, res) {
	if (!req.body) return res.sendStatus(400);
	console.log(req.body);
	res.render('registration', {regInfo: req.body});
});

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.engine('mustache', mustacheExpress());

