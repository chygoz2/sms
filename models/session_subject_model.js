var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Subject = require('./subject_model');
var User = require('./users_model');
var Assessment = require('./assessment_model');

var scSchema = new Schema(
    {
        session: String,
        subject: {type: Schema.Types.ObjectId, ref: 'Subject'},
        teacher: {type: Schema.Types.ObjectId, ref: 'User'},
        students: [{type: Schema.Types.ObjectId, ref: 'User'}],
        assessments: [{type: Schema.Types.ObjectId, ref: 'Assessment'}]
    }
);

module.exports = mongoose.model('SessionSubject', scSchema);