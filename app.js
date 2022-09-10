const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Defining app routes
const APP = require('./router/appInfo')

// Injecting app routes inside app variable
app.use('/app', APP)

module.exports = app