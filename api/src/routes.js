const routes = require('express').Router();
const multer = require('multer');

const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);

const animals = require('./app/controllers/Animals');
const procedures = require('./app/controllers/Procedures');

routes.post('/animals', upload.array('images'), animals.create);
routes.put('/animals/:id', upload.array('images'), animals.update);
routes.get('/animals', animals.index);
routes.get('/animals/:id', animals.show);
routes.delete('/animals/:id', animals.delete);
routes.post('/procedures', procedures.create);

module.exports = routes;
