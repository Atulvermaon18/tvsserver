const mongoose = require('mongoose');
const schema = mongoose.Schema;

let GQDept = new schema({
    topic: { type: String, require: true },
    brief: { type: String, require: true },
    questions: [
        {
            ques: { type: String, require: true },
            controlName: { type: String, require: true },
            controlType: { type: String, require: true }
        }
    ],
    time: { type: Date, default: Date.now }
})

module.exports = mongoose.model('GQDept', GQDept)