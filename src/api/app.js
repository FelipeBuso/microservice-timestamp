const express = require('express')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const DateController = require('../controllers/dateController');
const IsValid = require('../middlewares/checkIsAValiddate');

const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/api/:date?', IsValid.checkIsValidDate, DateController.generateDate);

module.exports = app;