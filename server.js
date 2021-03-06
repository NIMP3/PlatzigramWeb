var express = require('express');
var app = express();
var multer = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
    destination : function (req, file, cb) {
        cb(null, './uploads')
    },
    filename : function (req, file, cb) {
        cb(null, +Date.now() + '-' + ext(file.originalname))
    }
})

var upload = multer({storage : storage}).single('picture');


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

//API
app.get('/api/pictures', function(req, res) {
	var pictures = [
		{
            user:{
                username:'NIMP3',
                avatar:'https://avatars0.githubusercontent.com/u/8845065?s=400&v=4',
            },
            url:'office.jpg',
            likes:102,
            liked:true,
            createdAt: new Date().setDate(new Date().getDate() - 10)
        },
        {
            user:{
                username:'NIMP3',
                avatar:'https://avatars0.githubusercontent.com/u/8845065?s=400&v=4',
            },
            url:'office.jpg',
            likes:0,
            liked:false,
            createdAt: new Date().setDate(new Date().getDate() - 40)
        },
	];
	
	setTimeout(function() {
		res.send(pictures);
	},1000)
})

app.post('/api/pictures', function (req , res) {
    upload(req, res, function (err) {
        if (err) res.send(500, 'Error uploading file');
        res.send('File uploaded');
    })
})

//Servidor escuchando en el puerto 3000
app.listen(3000, function(err) {
	if (err) return console.log('Hubo un Error'), process.exit(1);
	console.log('Platzigram escuchando en el puerto 3000');
})