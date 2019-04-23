const mongoose = require('mongoose');
const schema = mongoose.Schema;

let Conf = new schema({
    conf_Atomsphere: { type: String, required: true },
    conf_cleanliness: { type: String, required: true },
    conf_internetConn: { type: String, required: true },
    conf_airFlow: { type: String, required: true },
    conf_breakout: { type: String, required: true },
    conf_foodService: { type: String, required: true },
    conf_quality: { type: String, required: true },
    conf_staff: { type: String, required: true },
    conf_meeting: { type: String, required: true },
    conf_comfort: { type: String, required: true },
    fb_id: { type: String, require: true },
    fb_name: { type: String, require: true },
    fb_email: { type: String, require: true },
    fb_roomNo: { type: String, required: true },
    fb_phone: { type: String, required: true },
    fb_mail: { type: String, required: true },
    suggestionShare: { type: String, required: true },
    time: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Conference', Conf)