var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Student', { title: 'Search Results by Student' });
});

module.exports = router;
