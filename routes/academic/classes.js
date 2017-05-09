var express = require('express');
var router = express.Router();
var Class = require('../../models/class_model');

router.get('/', function (req,res,next) {
    var classes = [];

    Class.find({}, function(err, data){
        if(err) res.json({error: true, message: "Error fetching class"});
        else res.json({error: false, message: data});
    });
});

router.post('/add', function (req,res,next) {
    var c = {
        name: req.body.name,
        superclass: req.body.parent,
        id: req.body.id
    };

    var cl = new Class(c);
    cl.save(function(err, data){
       if(err) throw err;
       res.json({error: false, message: data});
    });
})

module.exports = router;