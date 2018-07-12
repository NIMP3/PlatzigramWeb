var page = require('page');

//Home
page('/', function(ctx, next) {
    var main = document.getElementById('main-container');
    main.innerHTML = '<a href="/signup">Sighup</a>';
})