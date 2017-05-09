var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Class = require('./class_model');
var User = require('./users_model');

var scSchema = new Schema(
    {
        session: String,
        classId: {type: Schema.Types.ObjectId, ref: 'Class'},
        teacher: {type: Schema.Types.ObjectId, ref: 'User'},
        students: [{type: Schema.Types.ObjectId, ref: 'User'}]
    }
);

module.exports = mongoose.model('SessionClass', scSchema);