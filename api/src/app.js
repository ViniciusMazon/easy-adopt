require('dotenv').config({ path: '.env' });
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use('/downloads', express.static(path.join(__dirname, '..', 'downloads')));
app.use(routes);

module.exports = app;
