const routes = require('express').Router();
const multer = require('multer');

const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);

const animals = require('./app/controllers/Animals');


routes.post('/animals', upload.array('images'), animals.createNewAnimal);

module.exports = routes;
