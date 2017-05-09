var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    type: String,
    questions: [
        {
            question: String,
            answer: String,
            options: [String]
        }
    ],
    weight: Number
});

module.exports = mongoose.model('Assessment', schema);