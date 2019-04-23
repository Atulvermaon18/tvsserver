const mongoose = require('mongoose');
const schema = mongoose.Schema;

let restaurant = new schema({
    resturant_ambiance: { type: String, required: true },
    resturant_menuSelection: { type: String, required: true },
    resturant_foodQuality: { type: String, required: true },
    resturant_foodQuantity: { type: String, required: true },
    resturant_overallService: { type: String, required: true },
    resturant_orderAccuracy: { type: String, required: true },
    resturant_serviceSpeed: { type: String, required: true },
    resturant_billingAccuracy: { type: String, required: true },
    resturant_staffAttitude: { type: String, required: true },
    resturant_ValueForMoney: { type: String, required: true },
    resturant_OverallExp: { type: String, require: true },
    fb_id: { type: String, require: true },
    fb_name: { type: String, require: true },
    fb_email: { type: String, require: true },
    fb_roomNo: { type: String, required: true },
    fb_phone: { type: String, required: true },
    time: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Restaurant', restaurant)