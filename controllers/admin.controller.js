const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const admin = require('../models/admin.model');

module.exports = {
    authenticateUser,
    changeUserPassword,
    addMoreEmails
};

async function authenticate({ username, password }) {
    console.log("Auth checking " + username)
    // createAdmin(); //Incase creating new Admins
    const user = await admin.findOne({ username });
    if (user && password === user.hash) {
        console.log("Password checking")
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, config.secret);
        return {
            ...userWithoutHash,
            token
        };
    } else {
        return null
    }
}

function createAdmin() {
    let newAdmin = new admin({
        username: 'Atul',
        hash: '123',
        firstName: 'Atul',
        lastName: 'Verma',
        emails: ['fom@royaltulipcanaannairobi.com', 'atul.verma.maa@gmail.com'],
    })
    newAdmin.save()
        .then(doc => {
            console.log(doc)
        })
        .catch(err => {
            console.error(err)
        })
}

async function changePassword({ username, password, oldPassword }) {

    console.log(username, password)
    const user = await admin.findOne({ username });

    if (user && user.hash == oldPassword) {

        let update = await admin.findOneAndUpdate({ username: user.username }, { $set: { hash: password } }, { new: true }, (err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!");
            }
            console.log(doc);
        });

        if (update) {
            return {
                message: "Success",
                status: 200
            };
        }

    } else {
        return {
            message: "Old Password not matched!",
            status: 200
        };
    }
}

async function addEmails({ username, email }) {

    console.log(username, email)
    const user = await admin.findOne({ username });
    if (user) {

        let update = await admin.findOneAndUpdate({ username: user.username }, { $addToSet: { emails: email } }, (err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!");
            }
        });

        if (update) {
            console.log("Sending ", update);
            return {
                message: "Success",
                data: update,
                status: 200
            };
        }

    } else {
        return {
            message: "Old Password not matched!",
            status: 200
        };
    }
}

async function removeEmails({ username, email }) {

    console.log(username, email)
    const user = await admin.findOne({ username });
    if (user) {

        let update = await admin.findOneAndUpdate({ username: user.username }, { $pull: { emails: email } }, (err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!");
            }
        });

        if (update) {
            console.log("Sending ", update);
            return {
                message: "Success",
                data: update,
                status: 200
            };
        }

    } else {
        return {
            message: "Old Password not matched!",
            status: 200
        };
    }
}

function addMoreEmails(req, res, next) {
    if (req.body.isPush) {
        addEmails(req.body)
            .then(user => user ? res.status(200).json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
            .catch(err => next(err));
    } else {
        removeEmails(req.body)
            .then(user => user ? res.status(200).json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
            .catch(err => next(err));
    }

}


function changeUserPassword(req, res, next) {
    console.log("Password change initiated", req.body)
    changePassword(req.body)
        .then(user => user ? res.status(200).json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function authenticateUser(req, res, next) {
    console.log("Auth initiated", req.body)
    authenticate(req.body)
        .then(user => user ? res.status(200).json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}
