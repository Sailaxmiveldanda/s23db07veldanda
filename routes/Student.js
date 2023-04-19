var express = require('express');
var router = express.Router();
const Student_controlers= require('../controllers/Student');
/* GET home page. */
router.get('/', Student_controlers.Student_view_all_Page);
router.get('/detail', Student_controlers.Student_view_one_Page);
/* GET create Student page */
router.get('/create', Student_controlers.Student_create_Page);
router.get('/update', Student_controlers.Student_update_Page);
router.get('/delete', Student_controlers.Student_delete_Page);
module.exports = router;