const mongoose = require('mongoose');
const schema = mongoose.Schema;

let inRoomDining = new schema({
    inroom_menuSelection: { type: String, required: true },
    inroom_foodQuantity: { type: String, required: true },
    inroom_foodQuantity: { type: String, required: true },
    inroom_overAllServiceQuality: { type: String, required: true },
    inroom_overAccuracy: { type: String, required: true },
    inroom_serviceSpeed: { type: String, required: true },
    inroom_billingAccuracy: { type: String, required: true },
    inroom_staffAttitude: { type: String, required: true },
    inroom_valueForMoney: { type: String, required: true },
    inroom_overAllExpreience: { type: String, required: true },
    fb_id: { type: String, require: true },
    fb_name: { type: String, require: true },
    fb_email: { type: String, require: true },
    fb_roomNo: { type: String, required: true },
    fb_phone: { type: String, required: true },
    time: { type: Date, default: Date.now }
})

module.exports = mongoose.model('In-Room Dining', inRoomDining)