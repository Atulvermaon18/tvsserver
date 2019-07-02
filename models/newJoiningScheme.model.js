const mongoose = require('mongoose');
const schema = mongoose.Schema;

let QuestionsSchema = new schema({
    question0: { type: String, require: true },
    question1: { type: String, require: true },
    question2: { type: String, require: true },
    question3: { type: String, require: true },
    question4: { type: String, require: true },
    question5: { type: String, require: true },
    question6: { type: String, require: true },
    question7: { type: String, require: true },
    question8: { type: String, require: true },
    question9: { type: String, require: true },
    question10: { type: String, require: true },
    question11: { type: String, require: true },
    question12: { type: String, require: true },
    question13: { type: String, require: true },
    question14: { type: String, require: true },
    question15: { type: String, require: true },
    question16: { type: String, require: true },
    question17: { type: String, require: true },
    question18: { type: String, require: true },
    question19: { type: String, require: true },
    question20: { type: String, require: true },
    question21: { type: String, require: true },
    question22: { type: String, require: true },
    question23: { type: String, require: true },
    fb_name: { type: String, require: true },
    fb_empID: { type: String, require: true },
    fb_mail: { type: String, require: true },
    fb_doj: { type: String, require: true },
    fb_dept: { type: String, require: true },
    fb_grade: { type: String, require: true },
    fb_id: { type: String, require: true },
    time: { type: Date, default: Date.now }
})

module.exports = mongoose.model('QuestionsSchema', QuestionsSchema)