var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./users_model');
var SessionSubject = require('./session_subject_model');
var Assessment = require('./assessment_model');

var schema = new Schema({
    student: {type: Schema.Types.ObjectId, ref: 'User'},
    session_subject: {type: Schema.Types.ObjectId, ref: 'SessionSubject'},
    assessments: [{
        assessment_id: {type: Schema.Types.ObjectId, ref: 'Assessment'},
        score: Number
    }]
});

// var schema = new Schema({
//     student: String,
//     session_subject: String,
//     assessments: [{
//         assessment_id: String,
//         score: Number
//     }]
// });

module.exports = mongoose.model('StudentSubjectEnrolment', schema);