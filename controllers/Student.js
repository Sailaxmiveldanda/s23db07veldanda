var Student = require('../models/Student');
// List of all Costumes
exports.Student_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Student list');
};
// for a specific Costume.
exports.Student_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Student.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// Handle Costume create on POST.
exports.Student_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Student create POST');
};
// Handle Costume delete form on DELETE.
exports.Student_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Student delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
//exports.Student_update_put = function(req, res) {
 //res.send('NOT IMPLEMENTED: Student update PUT' + req.params.id);
 // Handle Costume update form on PUT.
exports.Student_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Student.findById( req.params.id)
// Do updates of properties
if(req.body.Stu_Name)
toUpdate.Stu_Name = req.body.Stu_Name;
if(req.body.Stu_Age) toUpdate.Stu_Age = req.body.Stu_Age;
if(req.body.Mail_Id) toUpdate.Mail_Id = req.body.Mail_Id;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
// List of all Student
exports.Student_list = async function(req, res) {
    try{
    theStudent = await Student.find();
    res.send(theStudent);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // VIEWS
// Handle a show all view
exports.Student_view_all_Page = async function(req, res) {
    try{
    theStudent = await Student.find();
    res.render('Student', { title: 'Student Search Results', results: theStudent });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Costume create on POST.
exports.Student_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Student();
    document.Stu_Name = req.body.Stu_Name;
    document.Stu_Age = req.body.Stu_Age;
    document.Mail_Id = req.body.Mail_Id;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };