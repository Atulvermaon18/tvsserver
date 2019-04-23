const mongoose = require('mongoose');
const schema = mongoose.Schema;

let swimmingPool = new schema({
    pool_temp: { type: String, required: true },
    pool_cleanliness: { type: String, required: true },
    pool_changingArea: { type: String, required: true },
    fb_id: { type: String, require: true },
    fb_name: { type: String, require: true },
    fb_email: { type: String, require: true },
    fb_roomNo: { type: String, required: true },
    fb_phone: { type: String, required: true },
    time: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Swimming Pool', swimmingPool)