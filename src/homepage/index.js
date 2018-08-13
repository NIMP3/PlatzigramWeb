var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../header');
var axios = require('axios');

//Mildwares [Header, Carga de imágenes y HomePage]
page('/', header, loadPictures, function(ctx, next) {
    title('Platzigram');
    var main = document.getElementById('main-container');
    empty(main).appendChild(template(ctx.pictures));
})

/*-----------------------------------------------------------------------------------------------------
Ejemplo con Superagent - Callbacks*/
function loadPictures(ctx, next) {
    request
        .get('/api/pictures')
        .end(function (err, res){
            if (err) return console.log(err);

            ctx.pictures = res.body;
            next();
        })
}

/*-----------------------------------------------------------------------------------------------------
Ejemplo con Axios - Promises*/
function loadPicturesAxios(ctx, next) {
    axios
        .get('/api/pictures')
        .then(function (res) {
            ctx.pictures = res.data;
            
            var pic = ctx.pictures[0];
            return axios.get(`/api/pictures/${pic.id}`);
        })
        .then(function (res) {
            ctx.pictures[0] = res.data;
            next();
        })
        .catch(function (err) {
            return console.log(err);            
        })
}