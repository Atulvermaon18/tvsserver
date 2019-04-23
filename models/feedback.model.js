const mongoose = require('mongoose');
const schema = mongoose.Schema;

let Guest = new schema({
    bar: { type: String, require: true },
    frontOffice: { type: String, require: true },
    resturant: { type: String, require: true },
    inroom: { type: String, require: true },
    spa: { type: String, require: true },
    gym: { type: String, require: true },
    room: { type: String, require: true },
    pool: { type: String, require: true },
    travel: { type: String, require: true },
    fb_name: { type: String, require: true },
    fb_email: { type: String, require: true },
    fb_roomNo: { type: String, required: true },
    fb_phone: { type: String, required: true },
    fb_mail: { type: String, required: true },
    suggestionShare: { type: String, required: true },
    time: { type: Date, default: Date.now }
})
module.exports = mongoose.model("Guest", Guest)