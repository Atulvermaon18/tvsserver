const ItDept = require('../models/it.model');
const HRDept = require('../models/hr.model');
const GQDept = require('../models/generalquestion.model');
const newJoiningSchema = require('../models/newJoiningScheme.model')
const Mailer = require('../_helpers/mail.js');


exports.IT_create = function (req, res) {

    console.log("IT create API");
    let itdept = new ItDept(req.body);
    itdept.save()
        .then(result => {
            console.log(result.id);  // this will be the new created ObjectId
            //Mailer.mailer(req.body.fb_name, req.body.fb_empID, req.body.fb_mail);
            res.send({ msg: "Successfully updated" })

        }).catch(err => {
            console.log(err)
        })


};




exports.NewJoining_create = function (req, res) {

    console.log("NewJoining_create create API");
    let newJoining = new newJoiningSchema(req.body);
    newJoining.save()
        .then(result => {
            console.log(result.id);  // this will be the new created ObjectId
            Mailer.mailer(req.body.fb_name, req.body.fb_empID, req.body.fb_mail);
            res.send({ msg: "Successfully updated" })

        }).catch(err => {
            console.log(err)
        })


};

exports.HR_create = function (req, res) {

    console.log("HR create API");
    console.log(req.body);
    let hrDept = new HRDept(req.body);
    hrDept.save()
        .then(result => {
            console.log(result.id);  // this will be the new created ObjectId
            //Mailer.mailer(req.body.fb_name, req.body.fb_empID, req.body.fb_mail);
            res.send({ msg: "Successfully updated" })

        }).catch(err => {
            console.log(err)
        })


};


exports.GeneralQuestion_create = function (req, res) {

    console.log("GeneralQuestion_create create API");
    console.log(req.body);
    let gqDept = new GQDept(req.body);
    gqDept.save()
        .then(result => {
            console.log(result.id);  // this will be the new created ObjectId
            //Mailer.mailer(req.body.fb_name, req.body.fb_empID, req.body.fb_mail);
            res.send({ msg: "Successfully updated" })

        }).catch(err => {
            console.log(err)
        })


};

exports.TVS_read = function (req, res) {
    console.log('Reached Route');

    newJoiningSchema.find({}).sort({ date: 'descending' }).exec(function (err, docs) {
        if (err) {
            console.log(err)
        }
        if (docs.length) {

            res.send({ msg: "Successfully updated", data: docs })
        }
    });
};