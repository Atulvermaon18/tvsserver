const Conf = require('../models/conference.model');
const Mailer = require('../_helpers/mail.js');


exports.conf_create = function (req, res) {

    console.log("Conf create API");
    let conf = new Conf({
        conf_Atomsphere: req.body.conf_Atomsphere,
        conf_cleanliness: req.body.conf_cleanliness,
        conf_internetConn: req.body.conf_internetConn,
        conf_airFlow: req.body.conf_airFlow,
        conf_breakout: req.body.conf_breakout,
        conf_foodService: req.body.conf_foodService,
        conf_quality: req.body.conf_quality,
        conf_staff: req.body.conf_staff,
        conf_meeting: req.body.conf_meeting,
        conf_comfort: req.body.conf_comfort,
        fb_name: req.body.fb_name,
        fb_roomNo: req.body.fb_roomNo,
        fb_mail: req.body.fb_mail,
        fb_phone: req.body.fb_cntry_code + "-" + req.body.fb_phone,
        suggestionShare: req.body.suggestionShare,
    })

    conf.save()
        .then(result => {
            console.log(result.id);  // this will be the new created ObjectId
            Mailer.mailer(req.body.fb_name, req.body.fb_roomNo, req.body.fb_mail);
            res.send({ msg: "Successfully updated" })

        }).catch(err => {
            console.log(err)
        })


};

exports.conf_read = function (req, res) {
    console.log('Reached Route')
    Conf.find({}).sort({ date: 'descending' }).exec(function (err, docs) {
        if (err) {
            console.log(err)
        }
        res.send({ data: docs })
    });
};