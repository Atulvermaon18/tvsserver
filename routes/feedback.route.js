const express = require('express');
const router = express.Router();

const TVSController = require('../controllers/tvsfeedback.controller');
const Login = require('../controllers/admin.controller');
const Mailer = require('../_helpers/mail.js');
const middleware = require('../_helpers/middleware');

router.post('/ITCreate', TVSController.IT_create);
router.post('/HRCreate', TVSController.HR_create);
router.post('/NewJoining', TVSController.NewJoining_create);
router.get('/ITRead', middleware.checkToken, TVSController.TVS_read);//Admin Access only
router.get('/export', TVSController.csvExport);//Admin Access only

router.post('/authenticate', Login.authenticateUser);
router.post('/changePassword', middleware.checkToken, Login.changeUserPassword);//Admin Access only

router.post('/revertMail', middleware.checkToken, Mailer.revert)//Admin Access only
router.post('/inviteMail', middleware.checkToken, Mailer.invite)//Admin Access only

router.post('/sendPassword', Mailer.sendPassword);
router.post('/addMoreEmails', middleware.checkToken, Login.addMoreEmails);//Admin Access only

module.exports = router;