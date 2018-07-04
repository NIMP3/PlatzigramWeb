var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('Hola Edwin');
})

app.listen(3000, function(err) {
	if (err) return console.log('Hubo un Error'), process.exit(1);
	console.log('Platzigram escuchando en el puerto 3000');
})