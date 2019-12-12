const crypto = require('crypto');
const userModel = require('../model/user');

module.exports = {
    login: (user, callback) => {
        let pass = user.pass;
        userModel.findUser(user.account, (user) => {
            if (null != user) {
                //比较加密后的密码
                let passSalt = crypto.scryptSync(pass, user.salt, 64).toString('hex');
                if (passSalt == user.pass) {
                    callback({ code: 0, msg: 'login success' })
                } else {
                    callback({ code: 1, msg: 'pass is error' })
                }
            } else {
                callback({ code: 2, msg: 'account  is not exist' })
            }
        })
    },
    register: (user, callback) => {
        //生成加密后的密码
        let salt = crypto.randomBytes(16).toString('hex');
        let passSalt = crypto.scryptSync(user.pass, salt, 64).toString('hex');

        userModel.insertUser(user.account, passSalt, salt, (err, doc) => {
            if (err) {
                if (err.code === 11000) {
                    callback({ code: 1, msg: 'account is already exist' });
                }
            } else {
                callback({ code: 0, msg: 'register success' });
            }
        });
    },
    updatePass: (user, pass, callback) => {

        module.exports.login(user, (msg) => {
            //如果验证成功
            if (msg.code == 0) {

                let salt = crypto.randomBytes(16).toString('hex');
                let passSalt = crypto.scryptSync(pass, salt, 64).toString('hex');

                userModel.updatePass(user.account, passSalt, salt, (err) => {
                    if (err) {
                        callback({ code: 2, msg: 'err' });
                    }else{
                        callback({code:0,msg:'update pass success'})
                    }
                });

            } else {
                callback({ code: 1, msg: 'pass is err' });
            }
        });

    }

}