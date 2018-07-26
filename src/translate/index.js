var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');
var IntlMessageFormat = require('intl-messageformat');
//Requerimos los idiomas respectivos
var es = require('./es');
var en = require('./en-US');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

var MESSAGES = {};
MESSAGES.es = es;
MESSAGES['en-US'] = en;

var locale = 'es';

module.exports = {
    message : function (text, options) {
        options = options || {};
        var msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null);
        return msg.format(options);
    },
    date: new IntlRelativeFormat(locale)
}
