const mongoose = require('mongoose');
const schema = mongoose.Schema;

let HRDept = new schema({
    hr_Question1: { type: String, required: true },
    hr_Question2: { type: String, required: true },
    hr_Question3: { type: String, required: true },
    hr_Question4: { type: String, required: true },
    hr_Question5: { type: String, required: true },
    hr_Question6: { type: String, required: true },
    hr_Question7: { type: String, required: true },
    hr_Question8: { type: String, required: true },
    hr_Question9: { type: String, required: true },
    fb_name: { type: String, require: true },
    fb_email: { type: String, require: true },
    fb_empID: { type: String, required: true },
    fb_phone: { type: String, required: true },
    fb_mail: { type: String, required: true },
    suggestionShare: { type: String, required: true },
    time: { type: Date, default: Date.now }
})

module.exports = mongoose.model('HRDept', HRDept)