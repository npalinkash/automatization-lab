const express = require('express')
const controller = require('../controllers/appInfo')
const router = express.Router()

router.get('/', controller.getHello)

module.exports = router