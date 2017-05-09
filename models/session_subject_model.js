var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scSchema = new Schema(
    {
        session: String,
        subject: String,
        teacher: String,
        students: [String],
        assessments: [String]
    }
);

module.exports = mongoose.model('SessionSubject', scSchema);