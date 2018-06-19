var express = require('express');
var app = express();
app.listen(8000);
var newsRoute = require('./task1.js');
app.use('/user', newsRoute);