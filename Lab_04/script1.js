let DB = require('./model.js');
let collectionUsers = new DB('users.json');
collectionUsers.addData({login:'sasha', password:'1234'});
collectionUsers.addData({login:'admin', password:'root'});
collectionUsers.write(function(err){
	if (err) console.log(err);
		console.log('Данные записаны!');
});