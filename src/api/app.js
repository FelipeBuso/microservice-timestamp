const express = require('express')
const DateController = require('../controllers/dateController');
const IsValid = require('../middlewares/checkIsAValiddate');
const app = express()

app.get('/api/:date?', IsValid.checkIsValidDate, DateController.generateDate);

module.exports = app;