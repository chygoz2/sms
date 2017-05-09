var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    student: String,
    session_subject: String,
    assessments: [{
        assessment_id: String,
        score: Number
    }]
});

module.exports = mongoose.model('StudentSubjectEnrolment', schema);