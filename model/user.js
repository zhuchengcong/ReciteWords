var mongoose = require('mongoose');
const config = require('../config/dbsetting');
mongoose.connect(config.DB_URL + "/" + config.DB_NAME, (err) => {
    if (err) {
        console.log('connect fail');
        return;
    }
    console.log('connect success');
});
var schema = mongoose.Schema({
    account: { type: String, index: true, unique: true, trim: true },
    pass: String,
    salt: String
});

var user = mongoose.model('user', schema);
module.exports = {
    findUser: (account, callback) => {
        user.findOne({ account: account}, (err, user) => {
        	if(err) throw err;
            callback(user);
        })
    },
    insertUser: (account, pass, salt, callback) => {
        user.insertMany([{ account: account, pass: pass, salt: salt }], function(err, docs) {
                callback(err, docs);
        })
    },
    deleteUser:(account,callback)=>{
    	user.deleteOne({account:account},(err)=>{
    		callback(err);
    	})
    }
}