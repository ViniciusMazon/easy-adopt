const routes = require('express').Router();
const multer = require('multer');

const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);

const animals = require('./app/controllers/Animals');
const procedures = require('./app/controllers/Procedures');
const adoptionRequests = require('./app/controllers/AdoptionRequests');

routes.post('/animals', upload.array('images'), animals.create);
routes.put('/animals/:id', animals.update);
routes.get('/animals', animals.index);
routes.get('/animals/:id', animals.show);
routes.delete('/animals/:id', animals.delete);
routes.post('/procedures', procedures.create);
routes.post('/adoption-request', adoptionRequests.create);
routes.put('/adoption-request/:id', adoptionRequests.update);
routes.get('/adoption-request', adoptionRequests.index);
routes.get('/adoption-request/:id', adoptionRequests.show);

module.exports = routes;
