require('dotenv').config({ path: '.env' });
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

module.exports = app;
