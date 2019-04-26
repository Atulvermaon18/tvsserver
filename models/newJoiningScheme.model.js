const mongoose = require('mongoose');
const schema = mongoose.Schema;

let newJoiningSchema = new schema({
    newjoin_Question1: { type: String, require: true },
    newjoin_Question2: { type: String, require: true },
    newjoin_Question3: { type: String, require: true },
    newjoin_Question4: { type: String, require: true },
    newjoin_Question5: { type: String, require: true },
    newjoin_Question6: { type: String, require: true },
    newjoin_Question7: { type: String, require: true },
    newjoin_Question8: { type: String, require: true },
    newjoin_Question9: { type: String, require: true },
    newjoin_Question10: { type: String, require: true },
    newjoin_Question11: { type: String, require: true },
    newjoin_Question12: { type: String, require: true },
    newjoin_Question13: { type: String, require: true },
    newjoin_Question14: { type: String, require: true },
    newjoin_Question15: { type: String, require: true },
    newjoin_Question16: { type: String, require: true },
    newjoin_Question17: { type: String, require: true },
    newjoin_Question18: { type: String, require: true },
    newjoin_Question19: { type: String, require: true },
    newjoin_Question20: { type: String, require: true },
    newjoin_Question21: { type: String, require: true },
    newjoin_Question22: { type: String, require: true },
    newjoin_Question23: { type: String, require: true },
    fb_name: { type: String, require: true },
    fb_empID: { type: String, require: true },
    fb_mail: { type: String, require: true },
    fb_doj: { type: String, require: true },
    fb_dept: { type: String, require: true },
    fb_grade: { type: String, require: true },
    fb_id: { type: String, require: true },
    time: { type: Date, default: Date.now }
})

module.exports = mongoose.model('newJoiningSchema', newJoiningSchema)