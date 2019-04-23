const nodeMailer = require('nodemailer');
const Admin = require('../models/admin.model');


module.exports = {
    mailer: (name, roomno, mail) => {

        getUserData('Atul').then(user => {
            let transporter = nodeMailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'smarthotelsurvey@gmail.com',
                    pass: 'Smarthotelsurvey#123'
                }
            });
            let mailOptions = {
                from: 'atul.verma.maa@gmail.com', // sender address
                to: user.emails, // list of receivers
                subject: 'New Feedback from Guest', // Subject line
                text: 'Feedback', // plain text body
                html: `<b>Hi There,<br>
              Mr. ${name}, From Room Numer: ${roomno}  Has given a feedback!!! Please login to survey to view the report.
              <br>https://feedbackformnarobi.herokuapp.com <br>

             <i> Regards<br>
              Atul</i>
            </b>`
            };
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
                user: 'smarthotelsurvey@gmail.com',
                pass: 'Smarthotelsurvey#123'
            }
        });
        let mailOptions = {
            from: 'smarthotelsurvey@gmail.com', // sender address
            to: req.body.fb_mail, // list of receivers
            subject: 'Re: Feedback From Hotel Tulip', // Subject line
            text: 'Feedback', // plain text body
            html: `<b>Dear ${req.body.fb_name},<br><br>
              ${req.body.message}, Thank you for you Valuable Feedback. Hope to see you soon.
              <br>
              <br>

             <i> Regards<br>
              Atul</i>
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
                        user: 'smarthotelsurvey@gmail.com',
                        pass: 'Smarthotelsurvey#123'
                    }
                });
                let mailOptions = {
                    from: 'smarthotelsurvey@gmail.com', // sender address
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
