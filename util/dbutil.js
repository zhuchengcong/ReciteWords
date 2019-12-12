"use strict";
var mongoose = require('mongoose');
const config = require('../config/dbsetting');
mongoose.connect(config.DB_URL + "/" + config.DB_NAME, (err) => {
    if (err) {
        console.log('connect fail');
        return;
    }
    console.log('connect success');
});

module.exports = exports = mongoose;




/*(function(exports, require, module, __filename, __dirname) {
    var bar = function() {
        console.log(‘it is bar’);
    }
    module.exports = bar;
});*/