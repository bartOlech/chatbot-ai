const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');
const Dialogflow = require('../controllers/DialogflowController');

router.get('/', HomeController.HomeController);
router.post('/newMessage', Dialogflow.GetMessage);

module.exports = router;