const mongoose = require('mongoose');
const schema = mongoose.Schema;

let gym = new schema({
    gym_cleanliness: { type: String, required: true },
    gym_chaningRoom: { type: String, required: true },
    gym_equipment: { type: String, required: true },
    gym_supervision: { type: String, required: true },
    gym_instructor: { type: String, require: true },
    gym_reception: { type: String, required: true },
    gym_overAll: { type: String, required: true },
    fb_id: { type: String, require: true },
    fb_name: { type: String, require: true },
    fb_email: { type: String, require: true },
    fb_roomNo: { type: String, required: true },
    fb_phone: { type: String, required: true },
    time: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Gym', gym)