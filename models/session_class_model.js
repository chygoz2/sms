var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scSchema = new Schema(
    {
        session: String,
        classId: String,
        teacher: String,
        students: [String]
    }
);

module.exports = mongoose.model('SessionClass', scSchema);