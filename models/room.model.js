const mongoose = require('mongoose');
const schema = mongoose.Schema;

let room = new schema({
    room_Cleanliness: { type: String, required: true },
    room_bedComfort: { type: String, required: true },
    room_organised: { type: String, required: true },
    room_overall: { type: String, required: true },
    fb_id: { type: String, require: true },
    fb_name: { type: String, require: true },
    fb_email: { type: String, require: true },
    fb_roomNo: { type: String, required: true },
    fb_phone: { type: String, required: true },
    time: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Room', room)