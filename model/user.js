var mongoose = require('../util/dbutil');

var schema = mongoose.Schema({
    account: { type: String, index: true, unique: true, trim: true },
    pass: String,
    salt: String,
    bookid:[[String]]



});

var user = mongoose.model('user', schema);
module.exports = {
    findUser: (account, callback) => {
        user.findOne({ account: account}, (err, user) => {
            console.log(account);
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
    },
    updatePass:(account,pass,salt,callback)=>{
        user.update({account:account},{pass:pass,salt:salt},(err)=>{
            callback(err);
        })
    }
}