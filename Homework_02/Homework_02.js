/*1* Напишите функцию get_quadrant_number, которая принимает 
координаты точки X и Y и возвращает номер четверти, которой 
эта точка принадлежит. Помните, что если точка лежит на оси, то 
она не принадлежит ни одной четверти, в этом случаи нужно 
выбросить исключение типа Error без сообщения об ошибке.
   Y
 2 ║ 1 
═══╬═══X
 3 ║ 4 

Тестовые данные для тестирования:
x = 1, y = 1. Номер четверти: 1
x = -1, y = 1. Номер четверти: 2
x = -1, y = -1. Номер четверти: 3
x = 1, y = -1. Номер четверти: 4
x = 0, y = 0. Результат: Error*/

/*var get_quadrant_number = function(x, y) {
	if (x > 0 && y > 0) {
		return confirm ('I четверть');
	}
	else if (x < 0 && y > 0) {
		return confirm ('II четверть');
	}
	else if (x < 0 && y < 0) {
		return confirm ('III четверть');
	}
	else if (x > 0 && y < 0) {
		return confirm ('IV четверть');
	}
	else {
		throw new Error(); // генерация исключения
	}
};

get_quadrant_number(1, 1);*/

 
/*2*. Генератор случайных паролей. Требуется реализовать генератор
(function*) случайных паролей указанной длины. В пароле можно 
использовать любые символы в верхнем и нижнем регистре. 
Например: password_generator(16), вернет случайный пароль 
длиной 16 символов.*/

/*function* passMaker(length) {
	var str;
	//Коды для буквенно-цифровых символов латинского алфавита (https://learn.javascript.ru/generator):
	//48..57 – для 0..9
	//65..90 – для A..Z
	//97..122 – для a..z
	while (true) {
		str = [];
		for (var i = 0; i < length; i++) {
			//Math.floor(Math.random()*(max - min + 1) + min)
			var code1 = Math.floor(Math.random()*10 + 48);	//рандомное число
			var code2 = Math.floor(Math.random()*26 + 65);	//рандомная прописная буква
			var code3 = Math.floor(Math.random()*26 + 97);	//рандомная строчная буква
			var oneCode = Math.floor(Math.random()*3 + 1);	//выбор между code1, code2 или code3
			var simbol = eval('code' + oneCode); // eval выполняет код, переданный в виде строки
			str.push(String.fromCharCode(simbol));
		}
	yield pass = str.join('');
	}
}

var genPass = passMaker(16);
console.log(genPass.next().value);
console.log(genPass.next().value);
console.log(genPass.next().value);*/

/*3*. Работа с файлами. Файл "data.txt" заполнен случайными целыми числами, 
числа разделены одним пробелом.
Сформировать файл "out-1.txt" из элементов файла "data.txt", делящихся 
без остатка на 2. Сформировать файл "out-2.txt" из элементов файла "data.txt", 
возведенных в степень 3. Тестовый набор данных для тестирования можно 
скачать отсюда: https://yadi.sk/d/s7Gz7ypi3XCBXP 
Для записи текстовых файлов воспользуйтесь функцией 
writeFile описанной в документации: 
https://nodejs.org/dist/latest-v8.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback
или в русской версии: 
https://js-node.ru/site/article?id=23#fs_fs_writefile_file_data_options_callback*/

var fs = require('fs');
fs.readFile('data.txt', 'utf8', function (error, data) {
	if (error) throw error;	//если возникла ошибка
	console.log(data);	// выводим считанные данные
	var readDataTxt = data.toString();
	var arrDataTxt = readDataTxt.split(' ');
	var arrOutFirst = [];
	for (i = 0; i < arrDataTxt.length; i++) {
		if (arrDataTxt[i]%2 === 0) {
			arrOutFirst.push(arrDataTxt[i]);
		}
	}
	outFirst = arrOutFirst.join(' ');
	fs.writeFile('Out-1.txt', outFirst, function (error, data){
		if (error) throw error;
		console.log(outFirst);
	});
	var arrOutSecond = [];
	for (i = 0; i < arrDataTxt.length; i++) {
		arrOutSecond.push(arrDataTxt[i] ** 3);
	};
	outSecond = arrOutSecond.join(' ');
	fs.writeFile('Out-2.txt', outSecond, function (error, data){
		if (error) throw error;
		console.log(outSecond);
	});
});