const ItDept = require('../models/it.model');
const HRDept = require('../models/hr.model');
const GQDept = require('../models/generalquestion.model');
const newJoiningSchema = require('../models/newJoiningScheme.model')
const Mailer = require('../_helpers/mail.js');
var nodeExcel = require('excel-export');

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

exports.csvExport = function (req, res) {
    console.log('Reached export');

    newJoiningSchema.find({}).sort({ date: 'descending' }).exec(function (err, docs) {
        if (err) {
            console.log(err)
        }
        if (docs.length) {

            // res.send({ msg: "Successfully updated", data: docs })
            // console.log(JSON.stringify(docs));
            let conf = {};
            conf.name = "mysheet";
            conf.cols = [{
                caption: 'Name',
                type: 'string',
            }, {
                caption: 'EmployeeID',
                type: 'string',
            }, {
                caption: 'Email',
                type: 'string'
            }, {
                caption: 'Department',
                type: 'string'
            },
            {
                caption: 'On',
                type: 'date'
            },
            {
                caption: 'Question 1',
                type: 'string',
            }, {
                caption: 'Question 2',
                type: 'string',
            }, {
                caption: 'Question 3',
                type: 'string'
            }, {
                caption: 'Question 4',
                type: 'string'
            },
            {
                caption: 'Question 5',
                type: 'string',
            }, {
                caption: 'Question 6',
                type: 'string',
            }, {
                caption: 'Question 7',
                type: 'string'
            }, {
                caption: 'Question 8',
                type: 'string'
            },
            {
                caption: 'Question 9',
                type: 'string',
            }, {
                caption: 'Question 10',
                type: 'string',
            }, {
                caption: 'Question 11',
                type: 'string'
            }, {
                caption: 'Question 12',
                type: 'string'
            },
            {
                caption: 'Question 13',
                type: 'string',
            }, {
                caption: 'Question 14',
                type: 'string',
            }, {
                caption: 'Question 15',
                type: 'string'
            }, {
                caption: 'Question 16',
                type: 'string'
            },
            {
                caption: 'Question 17',
                type: 'string',
            }, {
                caption: 'Question 18',
                type: 'string',
            }, {
                caption: 'Question 19',
                type: 'string'
            }, {
                caption: 'Question 20',
                type: 'string'
            }];
            conf.rows = [];
            for (let i = 0; i < docs.length; i++) {
                console.log(docs[i])
                conf.rows.push([docs[i].fb_name, docs[i].fb_empID, docs[i].fb_mail, docs[i].fb_dept, docs[i].time,
                checkRating(docs[i].newjoin_Question1), checkRating(docs[i].newjoin_Question2),
                checkRating(docs[i].newjoin_Question3), checkRating(docs[i].newjoin_Question4),
                checkRating(docs[i].newjoin_Question5), checkRating(docs[i].newjoin_Question6),
                checkRating(docs[i].newjoin_Question7), checkRating(docs[i].newjoin_Question8),
                checkRating(docs[i].newjoin_Question9), checkRating(docs[i].newjoin_Question10),
                checkRating(docs[i].newjoin_Question11), checkRating(docs[i].newjoin_Question12),
                checkRating(docs[i].newjoin_Question13), checkRating(docs[i].newjoin_Question14),
                checkRating(docs[i].newjoin_Question15), checkRating(docs[i].newjoin_Question16),
                checkRating(docs[i].newjoin_Question17), checkRating(docs[i].newjoin_Question18),
                checkRating(docs[i].newjoin_Question19), checkRating(docs[i].newjoin_Question20)])
            }
            function checkRating(val) {
                switch (val) {
                    case '4':
                        return 'Strongly Agree'
                        break;
                    case '3':
                        return 'Agree';
                        break;
                    case '2':
                        return 'Neither Agree nor Disagree';
                        break;
                    case '1':
                        return 'Disagree';
                        break;
                    case '0':
                        return 'Strongly Disagree'
                        break;
                    default:
                        return val

                }
            }
            var result = nodeExcel.execute(conf);
            res.setHeader('Content-Type', 'application/vnd.openxmlformats');
            res.setHeader("Content-Disposition", "attachment; filename=" + "Report.xlsx");
            res.end(result, 'binary');
        }
    });
};
