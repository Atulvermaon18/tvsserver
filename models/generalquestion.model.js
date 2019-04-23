const mongoose = require('mongoose');
const schema = mongoose.Schema;

let GQDept = new schema({
    gq_Question1: { type: String, required: true },
    gq_Question2: { type: String, required: true },
    gq_Question3: { type: String, required: true },
    gq_Question4: { type: String, required: true },
    gq_Question5: { type: String, required: true },
    gq_Question6: { type: String, required: true },
    gq_Question7: { type: String, required: true },
    gq_Question8: { type: String, required: true },
    gq_Question9: { type: String, required: true },
    gq_Question10: { type: String, required: true },
    fb_name: { type: String, require: true },
    fb_email: { type: String, require: true },
    fb_empID: { type: String, required: true },
    fb_phone: { type: String, required: true },
    fb_mail: { type: String, required: true },
    suggestionShare: { type: String, required: true },
    time: { type: Date, default: Date.now }
})

module.exports = mongoose.model('GQDept', GQDept)