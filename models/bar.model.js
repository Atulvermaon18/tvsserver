const mongoose = require('mongoose');
const schema = mongoose.Schema;

let bar = new schema({
    bar_ambiance: { type: String, required: true },
    bar_menuSelection: { type: String, required: true },
    bar_foodQuality: { type: String, required: true },
    bar_foodQuantity: { type: String, required: true },
    bar_overallService: { type: String, required: true },
    bar_orderAccuracy: { type: String, required: true },
    bar_serviceSpeed: { type: String, required: true },
    bar_billingAccuracy: { type: String, required: true },
    bar_staffAttitude: { type: String, required: true },
    bar_valueForMoney: { type: String, required: true },
    bar_overAll: { type: String, require: true },
    fb_id: { type: String, require: true },
    fb_name: { type: String, require: true },
    fb_email: { type: String, require: true },
    fb_roomNo: { type: String, required: true },
    fb_phone: { type: String, required: true },
    time: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Bar', bar)