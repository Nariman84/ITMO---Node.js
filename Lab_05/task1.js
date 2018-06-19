var express = require('express');
var router = express.Router();
router.get('/add', function(req, res, next) {
	res.send('Привет!');
});
module.exports = router;