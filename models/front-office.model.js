const mongoose = require('mongoose');
const schema = mongoose.Schema;

let frontOff = new schema({
    fo_smileGreet: { type: String, required: true },
    fo_arrivalExp: { type: String, required: true },
    fo_reservationExp: { type: String, required: true },
    fo_departureExp: { type: String, required: true },
    fo_billingExp: { type: String, required: true },
    fb_id: { type: String, require: true },
    fb_name: { type: String, require: true },
    fb_email: { type: String, require: true },
    fb_roomNo: { type: String, required: true },
    fb_phone: { type: String, required: true },
    time: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Front Office', frontOff)