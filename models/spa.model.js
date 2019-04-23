const mongoose = require('mongoose');
const schema = mongoose.Schema;

let spa = new schema({
    spa_arrivalWelcome: { type: String, required: true },
    spa_ambiance: { type: String, required: true },
    spa_therapist: { type: String, required: true },
    spa_appointmentTime: { type: String, required: true },
    spa_feeling: { type: String, require: true },
    spa_treatment: { type: String, required: true },
    spa_valueForMoney: { type: String, required: true },
    spa_overAll: { type: Date, default: Date.now },
    fb_id: { type: String, require: true },
    fb_name: { type: String, require: true },
    fb_email: { type: String, require: true },
    fb_roomNo: { type: String, required: true },
    fb_phone: { type: String, required: true },
    time: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Spa', spa)