var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

//HomePage
page('/', function(ctx, next) {
    title('Platzigram');

    var pictures = [
        {
            user:{
                username:'NIMP3',
                avatar:'https://avatars0.githubusercontent.com/u/8845065?s=400&v=4',
            },
            url:'office.jpg',
            likes:1024,
            liked:true
        },
        {
            user:{
                username:'NIMP3',
                avatar:'https://avatars0.githubusercontent.com/u/8845065?s=400&v=4',
            },
            url:'office.jpg',
            likes:1024,
            liked:true
        },
        {
            user:{
                username:'NIMP3',
                avatar:'https://avatars0.githubusercontent.com/u/8845065?s=400&v=4',
            },
            url:'office.jpg',
            likes:1024,
            liked:true
        },
    ];

    var main = document.getElementById('main-container');
    empty(main).appendChild(template(pictures));
})