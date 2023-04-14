var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Student', { title: 'Search Results for Student' });
});

module.exports = router;
var express = require('express');
const Student_controlers= require('../controllers/Student');
var router = express.Router();
/* GET costumes */
router.get('/', Student_controlers.Student_view_all_Page );
module.exports = router;