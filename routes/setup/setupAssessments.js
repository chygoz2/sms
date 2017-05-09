var Assessment = require('../../models/assessment_model');
var express = require('express');
var router = express.Router();

var ass = [
    {
        type: "homework",
        questions: [
            {
                question: "What is the formula for sum of internal angles of a regular polygon?",
            }
        ],
        weight: 10
    },
    {
        type: "CBT",
        questions: [
            {
                question: "How many sides does a square have?",
                answer: "4",
                options: [
                    "1","2","3","4",
                ]
            },
            {
                question: "Sum of angles in a triangle is?",
                answer: "180",
                options: [
                    "90","180","270","360",
                ]
            }
        ]
    }
];

router.get('/', function (req,res,next) {
    Assessment.remove({}, function(err){
        if(err) throw err;
        Assessment.create(ass, function(err, data){
            if(err) throw err;
            res.json({error: false, message: data});
        })
    })
});

module.exports = router;