var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//Get the default connection
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var StudentRouter = require('./routes/Student');
var boardRouter = require('./routes/board');
var resourceRouter = require('./routes/resource');
var selectorRouter = require('./routes/selector');
var Student = require("./models/Student");
  
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var mongoose = require('mongoose');

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

var db = mongoose.connection;

//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Student', StudentRouter);
app.use('/Board', boardRouter);
app.use('/Selector', selectorRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// We can seed the collection if needed on
async function recreateDB(){
  // Delete everything
  await Student.deleteMany();
  let instance1 = new
  Student({Stu_Name:"Sailaxmi", Stu_Age:22,Mail_Id:"laxmi@gmail.com"});

  instance1.save().then( () => {
    console.log('Everything went well');
  }).catch( (e) => {
    console.log('There was an error', e.message);
  });

  let instance2 = new
  Student({Stu_Name:"Rakshitha", Stu_Age:22,Mail_Id:"raksg@hmail.com"});

  instance2.save().then( () => {
    console.log('Everything went well');
  }).catch( (e) => {
    console.log('There was an error', e.message);
  });

  let instance3 = new
  Student({Stu_Name:"Shivani", Stu_Age:22,Mail_Id:"shivk@yahoo.com"});

  instance3.save().then( () => {
    console.log('Everything went well');
  }).catch( (e) => {
    console.log('There was an error', e.message);
  });
  }
  let reseed = true;
  if (reseed) { recreateDB();}



module.exports = app;