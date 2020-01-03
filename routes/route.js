const express = require('express');
const UserController = require('./controllers/userController');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// User api
app.use('/api/user', UserController);

module.exports = app;


