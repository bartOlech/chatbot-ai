const express = require('express');
const app = express();
const router = require('./routes/index');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', router)

module.exports = app;