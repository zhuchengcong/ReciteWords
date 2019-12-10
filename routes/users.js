var express = require('express');
var router = express.Router();
const UserService = require('../service/UserService');
const tokenUtil = require('../util/token');

/* GET users listing. */
/*

 */
router.get('/login', function(req, res, next) {
    let user = {};
    user.account = req.query.account;
    user.pass = req.query.password;
    UserService.login(user, function(data) {
        let token = tokenUtil.getToken();
        if (data.code == 0) {
            res.json({ data: data, token: token });
        } else {
            res.json({ data: data });
        }
    });
});

router.get('/auth', function(req, res, next) {
    let authorization = req.query.Authorization;

    let data = tokenUtil.verify(authorization);
    res.json(data);
});

module.exports = router;