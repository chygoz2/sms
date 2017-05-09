var Class = require('../../models/class_model');
var express = require('express');
var router = express.Router();

var classes = [
    {
        id: 'class01',
        parent: 'JSS1',
        name: 'JSS1A'
    },
    {
        id: 'class02',
        name: 'JSS1B',
        parent: 'JSS1'
    }
];

router.get('/', function(req, res, next){
    Class.find({}, function(err, data){
        if(err) throw err;
        if(data.length !== classes.length){
            Class.create(classes, function(err, data){
                if(err) throw err;
                res.json({error: false, message: data});
            })
        }else{
            res.json({error: false, message: data});
        }
    })
})

module.exports = router;

