const nodeMailer = require('nodemailer');
const Admin = require('../models/admin.model');


module.exports = {
    mailer: (name, empID, mail) => {
        console.log("reached mailer")
        getUserData('Atul').then(user => {
            let transporter = nodeMailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'tvsnextsurvey@gmail.com',
                    pass: 'tvsnextsurvey#123'
                }
            });
            let mailOptions = {
                from: 'tvsnextsurvey@gmail.com', // sender address
                to: user.emails, // list of receivers
                subject: 'New Feedback from Employee', // Subject line
                text: 'Feedback', // plain text body
                html: `Hi There,<br><br>
              Mr/Ms. ${name}, with employee ID : ${empID} has given a feedback!!! Please login to survey app to view the report.
              <br>https://tvsnxt.herokuapp.com/ <br><br>

             <i> Regards<br>
              TVS</i>
            `
            };
            console.log("Sending mailer")
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message %s sent: %s', info.messageId, info.response);

            });

        }).catch(err => next(err));

    },
    revert: (req, res) => {
        console.log(req.body);
        res.send({ data: "Message Sent" });

        let transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'tvsnextsurvey@gmail.com',
                pass: 'tvsnextsurvey#123'
            }
        });
        let mailOptions = {
            from: 'tvsnextsurvey@gmail.com', // sender address
            to: req.body.fb_mail, // list of receivers
            subject: 'Re: Feedback From TVS NEXT', // Subject line
            text: 'Feedback', // plain text body
            html: `<b>Hi,<br><br>
              ${req.body.message}, https://tvsnxt.herokuapp.com/.
              <br>
              <br>

             <i> Regards<br>
              TVS</i>
            </b>` // html body
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
            // res.render('index');
        });
    },
    invite: (req, res) => {
        console.log(req.body);
        res.send({ data: "Message Sent" });

        let transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'tvsnextsurvey@gmail.com',
                pass: 'tvsnextsurvey#123'
            }
        });
        let mailOptions = {
            from: 'tvsnextsurvey@gmail.com', // sender address
            to: req.body.fb_mail, // list of receivers
            subject: 'Re: Feedback From TVS NEXT', // Subject line
            text: 'Feedback', // plain text body
            html: `<b>Hi ,<br><br>
              ${req.body.message},  https://tvsnxt.herokuapp.com/.
              <br>
              <br>

             <i> Regards<br>
              TVS</i>
            </b>` // html body
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
            // res.render('index');
        });
    },
    sendPassword: (req, res) => {
        console.log(req.body);
        res.send({ data: "Message Sent" });
        getUserData(req.body.username).then(user => {
            if (user) {
                let transporter = nodeMailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    auth: {
                        user: 'tvsnextsurvey@gmail.com',
                        pass: 'tvsnextsurvey#123'
                    }
                });
                let mailOptions = {
                    from: 'tvsnextsurvey@gmail.com', // sender address
                    to: user.emails, // list of receivers
                    subject: 'Re: Password ', // Subject line
                    text: 'Feedback', // plain text body
                    html: `<b>Dear ${req.body.username},<br><br>
                       Your Password is ${user.hash} .
                  <br>
                  <br>
    
                 <i> Regards<br>
                  Royal Tulip</i>
                </b>` // html body
                };
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Message %s sent: %s', info.messageId, info.response);
                    // res.render('index');
                });
            }
        }).catch(err => next(err));
        // console.log(user);

    }

};

async function getUserData(username) {
    const user = await Admin.findOne({ username });
    console.log(user)
    return user;
}
