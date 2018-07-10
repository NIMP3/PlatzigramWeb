//Manejo de rutas para una single page application con Page.js
var page = require('page');

var main = document.getElementById('main-container');

//Home
page('/', function(ctx, next) {
    main.innerHTML = 'Home <a href="/signup">Signup</a>';
})

//SignUp
page('/signup', function(ctx, next) {
    main.innerHTML = 'Signup <a href="/">Home</a>';
})

page();