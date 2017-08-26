var express = require('express');
var router = express.Router();

/* moon router */
router.get('/', function (req, res, next) {
    res.render('moon/index');
});

router.get('/write', function (req, res, next) {
    res.render('moon/write', { variable: 'Express' });
});

module.exports = router;