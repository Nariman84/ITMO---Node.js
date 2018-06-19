let fs = require('fs');
module.exports = class FileJSONStorage {
	constructor(path){
		this._source = path; //путь к файлу
		this._store = []; //массив объектов
	}
	write (cb) {
		//Записываем, то что храниться в _store в JSON файл
		fs.writeFile(this._source, JSON.stringify(this._store), function(err){
			if (err) return cb(err);
			cb();
		});
	}
	read(cb){
		//Читаем из файла в _store
		fs.readFile(this._source, function(err, data){
			if (err) return cb(err);
			this._store = JSON.parse(data);
			cb();
		});
	}
	addData(data){
		//Добавляем данные (объект) в _store
		this._store.push(data);
	}
	getAllData(){
		//Возвращает все данные из _store
		return this._store;
	}
	findDataByPropery(propName, value){
		//Возвращает объект, у которого есть propName = value
		for (let i = 0; i < this._store.length; i++) {
			if (this._store[i][propName] && this._store[i][propName] == value)
				return this._store[i];
		}
	}
}
