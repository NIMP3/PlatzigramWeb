//Manejo de rutas para una single page application con Page.js
var page = require('page');
//Como los modulos no exportan nada, no se requiere una variable
require('./homepage');
require('./signup');
require('./signin');

//Exporta un solo objeto con la información de los otros modulos
page();