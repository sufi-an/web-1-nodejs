
const express = require('express');
const controller = require('../controller/send-html')
const router = express.Router()

router.use('/send-html',controller.sendHtml)

module.exports = router;