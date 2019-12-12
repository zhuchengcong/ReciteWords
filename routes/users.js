var express = require('express');
var router = express.Router();
const UserService = require('../service/UserService');
const tokenUtil = require('../util/token');
const config = require('../config/config');

/* GET users listing. */
/*

 */
router.post('/login', function(req, res, next) {

    let user = {};
    user.account = req.param('account', null);
    user.pass = req.param('password', null);

    UserService.login(user, function(data) {
        let token = tokenUtil.getToken(user.account);
        if (data.code == 0) {
            res.json({ data: data, token: token });
        } else {
            res.json({ data: data });
        }
    });

});

router.post('/auth', function(req, res, next) {

    let authorization = req.get("Authorization");


    let data = tokenUtil.verify(authorization);

    res.json(data);

});

router.post('/register', function(req, res, next) {

    let user = {};
    user.account = req.param('account', null);
    user.pass = req.param('password', null);

    console.log(user.account)
    console.log(user.pass)

    if (user.account && user.pass) {
        UserService.register(user, function(data) {
            res.json(data);
        })
    } else {
        res.json(config.errparam);
    }

});

router.post('/loginout', function(req, res, next) {

 

});

router.post('/updatePass', function(req, res, next) {

  	 let user = {};
    user.account = req.param('account', null);
    user.pass = req.param('password', null);
    let newpass = req.param('newpass', null);

    console.log(user);
    console.log(newpass);

   UserService.updatePass(user, newpass, (msg) => {
        res.json(msg);
    })

  

});



module.exports = router;