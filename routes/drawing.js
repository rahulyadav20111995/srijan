/**
 * Created by Brekkishhh on 17-08-2016.
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('drawing');
});

module.exports = router;
