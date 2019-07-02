const mongoose = require('mongoose');
const schema = mongoose.Schema;

let GQDept = new schema({
    topic: { type: String, require: true },
    questions: [
        {
            ques: { type: String, require: true },
            feedBackFor: { type: String, require: true },
            type: { type: String, require: true }
        }
    ],
    time: { type: Date, default: Date.now }
})

module.exports = mongoose.model('GQDept', GQDept)