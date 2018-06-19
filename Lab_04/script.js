var s = 0;
for (i = 2; i < process.argv.length; i++) {
	s = s + eval(process.argv[i]);
}
console.log(s);