const mongoose = require('mongoose');
const schema = mongoose.Schema;

let Travel = new schema({
    travel_condition: { type: String, require: true },
    travel_safety: { type: String, require: true },
    travel_helpfull: { type: String, require: true },
    travel_driverKnowledge: { type: String, require: true },
    travel_driverEnthu: { type: String, require: true },
    travel_amunity: { type: String, require: true },
    fb_id: { type: String, require: true },
    fb_name: { type: String, require: true },
    fb_email: { type: String, require: true },
    fb_roomNo: { type: String, required: true },
    fb_phone: { type: String, required: true },
    time: { type: Date, default: Date.now }
})
module.exports = mongoose.model("Travel", Travel)