var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/u', function(req, res, next) {
    res.json({ hello: 'hello world welconme' });
});

module.exports = router;