var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var jwt    = require('jsonwebtoken');

var index = require('./routes/index');
var users = require('./routes/users');
var auth = require('./routes/auth');
var roles = require('./routes/setup/setupRoles');
var usersSetup = require('./routes/setup/setupUsers');
var setupClasses = require('./routes/setup/setupClasses');
var setupSessionSubject = require('./routes/setup/setupSessionSubject');
var setupSubjects = require('./routes/setup/setupSubjects');
var setupStudentSubjectEnrolment = require('./routes/setup/setupStudentSubjectEnrolment');
var setupAssessment = require('./routes/setup/setupAssessments');
var students = require('./routes/academic/students');
var setupStudentClassEnrolment = require('./routes/setup/setupStudentClassEnrolment');
var academicSessions = require('./routes/academic/sessions');
var academicClasses = require('./routes/academic/classes');
var sessionClasses = require('./routes/academic/sessionClasses');

var mongoose = require('mongoose');
var config = require('./config');

var app = express();

mongoose.connect(config.getDbConnectionString());
app.set('superSecret', config.secret); // secret variable

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/dist')));

app.use('/', index);
app.use('/api/users', users);
app.use('/auth', auth);
app.use('/api/setup-roles', roles);
app.use('/api/setup-users', usersSetup);
app.use('/api/setup-classes', setupClasses);
app.use('/api/setup-session-subjects', setupSessionSubject);
app.use('/api/setup-subjects', setupSubjects);
app.use('/api/setup-student-subject-enrolment', setupStudentSubjectEnrolment);
app.use('/api/setup-student-class-enrolment', setupStudentClassEnrolment);
app.use('/api/setup-assessment',setupAssessment);
app.use('/api/students', students);
app.use('/api/sessions', academicSessions);
app.use('/api/classes', academicClasses);
app.use('/api/session-classes', sessionClasses);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.sendFile(path.join(__dirname, 'public/dist/index.html'));
  // res.status(err.status || 500);
  // res.render('error');
});

module.exports = app;
exports.PROJECT_DIR = __dirname;
