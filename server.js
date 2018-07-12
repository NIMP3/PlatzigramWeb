var express = require('express');
var app = express();

app.set('view engine','pug');

//servir el directorio public de manera estatica
app.use(express.static('public'));

//Home
app.get('/', function(req, res){
	res.render('index',{title:'Platzigram'});
})

//Signup
app.get('/signup', function(req, res) {
	res.render('index', {title:'Platzigram - Signup'});
})

//Signin
app.get('/signin', function(req, res) {
	res.render('index', {title:'Platzigram - Signin'});
})

//Servidor escuchando en el puerto 3000
app.listen(3000, function(err) {
	if (err) return console.log('Hubo un Error'), process.exit(1);
	console.log('Platzigram escuchando en el puerto 3000');
})