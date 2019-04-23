const Guest = require('../models/feedback.model');
const Travel = require('../models/travel.model');
const Mailer = require('../_helpers/mail.js');
const Bar = require('../models/bar.model');
const FrontOffice = require('../models/front-office.model');
const Gym = require('../models/gym.model');
const InRoomDinng = require('../models/in-room-dining.model');
const Restaurant = require('../models/restaurant.model');
const Room = require('../models/room.model');
const Spa = require('../models/spa.model');
const SwimmingPool = require('../models/swimming-pool.model');


exports.feedback_create = function (req, res) {

    console.log("Called create API");
    let average = [];
    let dividend = [];
    let reqObj = req.body;

    Object.keys(reqObj).forEach(function (type) {
        if (reqObj[type]) {
            if (!average[type.slice(0, type.indexOf('_'))]) {
                average[type.slice(0, type.indexOf('_'))] = 0;
                dividend[type.slice(0, type.indexOf('_'))] = 0;
            }
            average[type.slice(0, type.indexOf('_'))] = +reqObj[type] + average[type.slice(0, type.indexOf('_'))];
            dividend[type.slice(0, type.indexOf('_'))]++;
        }

    });
    let guest = new Guest({
        bar: average.bar / dividend.bar,
        frontOffice: average.fo / dividend.fo,
        resturant: average.resturant / dividend.resturant,
        inroom: average.inroom / dividend.inroom,
        spa: average.spa / dividend.spa,
        gym: average.gym / dividend.gym,
        room: average.room / dividend.room,
        pool: average.pool / dividend.pool,
        travel: average.travel / dividend.travel,
        fb_name: req.body.fb_name,
        fb_roomNo: req.body.fb_roomNo,
        fb_mail: req.body.fb_mail,
        fb_phone: req.body.fb_cntry_code + "-" + req.body.fb_phone,
        suggestionShare: req.body.suggestionShare,
    })
    guest.save()
        .then(result => {
            // this will be the new created reqObjectId
            reqObj.fb_id = result.id;
            console.log(reqObj);
            new Travel(reqObj).save().then(result => {
                console.log('travel insert')
            }).catch(err => {
                console.log(err)
            });
            new Bar(reqObj).save().then(result => {
                console.log('bar insert')
            }).catch(err => {
                console.log(err)
            })
            new FrontOffice(reqObj).save().then(result => {
                console.log('fo insert')
            }).catch(err => {
                console.log(err)
            })
            new Gym(reqObj).save().then(result => {
                console.log('gym insert')
            }).catch(err => {
                console.log(err)
            })
            new InRoomDinng(reqObj).save().then(result => {
                console.log('inroom insert')
            }).catch(err => {
                console.log(err)
            })
            new Restaurant(reqObj).save().then(result => {
                console.log('resturant insert')
            }).catch(err => {
                console.log(err)
            })
            new Room(reqObj).save().then(result => {
                console.log('room insert')
            }).catch(err => {
                console.log(err)
            })
            new Spa(reqObj).save().then(result => {
                console.log('spa insert')
            }).catch(err => {
                console.log(err)
            })
            new SwimmingPool(reqObj).save().then(result => {
                console.log('pool insert')
            }).catch(err => {
                console.log(err)
            })

            Mailer.mailer(reqObj.fb_name, reqObj.fb_roomNo, reqObj.fb_mail);
            res.send({ msg: "Successfully updated" })

        }).catch(err => {
            console.log(err)
        })
};

exports.feedback_read = function (req, res) {

    Guest.find({}).sort({ time: 'descending' }).exec(function (err, docs) {
        if (err) {
            console.log(err)
        }
        // console.log(docs)
        res.send({ data: docs })
    });
};

exports.detailedFeedback = function (req, res) {

    console.log(req.body.user._id);
    switch (req.body.type) {
        case 'frontOffice':
            FrontOffice.find({ "fb_id": req.body.user._id }).exec(function (err, docs) {
                if (err) {
                    console.log(err)
                }
                console.log(docs)
                res.send({ data: docs })
            });
            break;
        case 'room':
            Room.find({ "fb_id": req.body.user._id }).exec(function (err, docs) {
                if (err) {
                    console.log(err)
                }
                console.log(docs)
                res.send({ data: docs })
            });
            break;
        case 'resturant':
            Restaurant.find({ "fb_id": req.body.user._id }).exec(function (err, docs) {
                if (err) {
                    console.log(err)
                }
                console.log(docs)
                res.send({ data: docs })
            });
            break;
        case 'bar':
            Bar.find({ "fb_id": req.body.user._id }).exec(function (err, docs) {
                if (err) {
                    console.log(err)
                }
                console.log(docs)
                res.send({ data: docs })
            });
            break;

        case 'inroom':
            InRoomDinng.find({ "fb_id": req.body.user._id }).exec(function (err, docs) {
                if (err) {
                    console.log(err)
                }
                console.log(docs)
                res.send({ data: docs })
            });
            break;
        case 'spa':
            Spa.find({ "fb_id": req.body.user._id }).exec(function (err, docs) {
                if (err) {
                    console.log(err)
                }
                console.log(docs)
                res.send({ data: docs })
            });
            break;
        case 'pool':
            SwimmingPool.find({ "fb_id": req.body.user._id }).exec(function (err, docs) {
                if (err) {
                    console.log(err)
                }
                console.log(docs)
                res.send({ data: docs })
            });
            break;

        case 'gym':
            Gym.find({ "fb_id": req.body.user._id }).exec(function (err, docs) {
                if (err) {
                    console.log(err)
                }
                console.log(docs)
                res.send({ data: docs })
            });
            break;
        case 'travel':
            Travel.find({ "fb_id": req.body.user._id }).exec(function (err, docs) {
                if (err) {
                    console.log(err)
                }
                console.log(docs)
                res.send({ data: docs })
            });
            break;
    }

};

exports.filter = function (req, res) {

    console.log(req.body)
    let response = {
        from: [],
        to: []
    };
    let reqParams = {
        from: "",
        to: ""
    }
    switch (req.body.type) {
        case 'month':
            reqParams = {
                from: req.body.month1,
                to: req.body.month2
            }
            break;
        case 'year':
            reqParams = {
                from: req.body.year1,
                to: req.body.year2
            }
            break;
    }
    Guest.find({
        time: { "$gte": new Date(reqParams.from).toISOString(), "$lt": new Date(reqParams.to).toISOString() }
    }).sort({ date: 'descending' }).exec(function (err, docs) {
        if (err) {
            console.log(err)
        }
        for (let i = 0; i < docs.length; i++) {
            if (req.body.type == "month") {
                if (docs[i].time.getMonth() % 2) {
                    response.to.push(docs[i])
                } else {
                    response.from.push(docs[i])
                }
            } else if (req.body.type == "year") {
                response.from.push(docs[i])
            }


        }
        console.log("response")
        res.send({ data: response, total: docs })
    });
};

exports.dateFilter = function (req, res) {

    console.log(req.body)
    let response = {
        from: [],
        to: []
    };
    let reqParams = {
        from: "",
        to: "",
    }

    res.send({ data: req.body, total: 0 })

    // Guest.find({
    //     time: { "$gte": new Date(reqParams.from).toISOString(), "$lt": new Date(reqParams.to).toISOString() }
    // }).sort({ date: 'descending' }).exec(function (err, docs) {
    //     if (err) {
    //         console.log(err)
    //     }
    //     for (let i = 0; i < docs.length; i++) {
    //         if (req.body.type == "month") {
    //             if (docs[i].time.getMonth() % 2) {
    //                 response.to.push(docs[i])
    //             } else {
    //                 response.from.push(docs[i])
    //             }
    //         } else if (req.body.type == "year") {
    //             response.from.push(docs[i])
    //         }


    //     }
    //     console.log("response")
    //     res.send({ data: response, total: docs })
    // });
};