const crypto = require('crypto');

/**
 * 生成加密强伪随机数据
 * @return {[type]} [description]
 */
function randomSalt() {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
            if (err) reject(err);
            console.log(`${buf.length}位的随机数据:${buf.toString('hex')}`);
            resolve(buf.toString('hex'));
        });
    });
}


randomSalt.md5 = function(pass, salt) {
    return new Promise((resolve, reject) => {
        crypto.scrypt(pass, salt, 64, (err, drivedKey) => {
            if (err) {
                reject(err);
            }
            //console.log(drivedKey.toString('hex') === jieguo);
            resolve(drivedKey.toString('hex'));
        })
    });

}