var express = require('express');
var router = express.Router();
var Role = require('../models/roles_model');
var app = require('../app');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
    res.sendFile(app.PROJECT_DIR + '/public/dist/index.html');
});

module.exports = router;
