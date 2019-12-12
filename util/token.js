const jwt = require('jsonwebtoken'); //用来生成token
const config = require('../config/config');



exports.getToken = (account) => {
    return jwt.sign({ account: account }, config.secretOrPrivateKey, {
        expiresIn: '10h'
    })
}

exports.verify = (token) => {
    return jwt.verify(token, config.secretOrPrivateKey, (err, decode) => {
        if (err) return {code:1,err:'token validate fail'}
        return { code: 0, decode: decode }
    })
}