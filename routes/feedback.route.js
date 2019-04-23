const express = require('express');
const router = express.Router();

const FeedbackController = require('../controllers/feedback.controller');
const ConfController = require('../controllers/conference.controller');
const TVSController = require('../controllers/tvsfeedback.controller');
const Login = require('../controllers/admin.controller');
const Mailer = require('../_helpers/mail.js');
const middleware = require('../_helpers/middleware');


router.post('/create', FeedbackController.feedback_create);
router.get('/read', middleware.checkToken, FeedbackController.feedback_read); //Admin Access only
router.post('/filter', middleware.checkToken, FeedbackController.filter); //Admin Access only
router.post('/dateFilter', middleware.checkToken, FeedbackController.dateFilter); //Admin Access only
router.post('/detailedFeedback', middleware.checkToken, FeedbackController.detailedFeedback); //Admin Access only

router.post('/confCreate', ConfController.conf_create);
router.get('/confRead', middleware.checkToken, ConfController.conf_read);//Admin Access only


router.post('/ITCreate', TVSController.IT_create);
router.post('/HRCreate', TVSController.HR_create);
router.post('/NewJoining', TVSController.NewJoining_create);
router.get('/ITRead', middleware.checkToken, TVSController.TVS_read);//Admin Access only

router.post('/authenticate', Login.authenticateUser);
router.post('/changePassword', middleware.checkToken, Login.changeUserPassword);//Admin Access only

router.post('/revertMail', middleware.checkToken, Mailer.revert)//Admin Access only
router.post('/sendPassword', Mailer.sendPassword);
router.post('/addMoreEmails', middleware.checkToken, Login.addMoreEmails);//Admin Access only

module.exports = router;