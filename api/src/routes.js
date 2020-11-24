const routes = require('express').Router();
const multer = require('multer');

const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);

const animals = require('./app/controllers/Animals');
const procedures = require('./app/controllers/Procedures');
const adoptionRequests = require('./app/controllers/AdoptionRequests');
const collaborators = require('./app/controllers/Collaborators');
const accessCode = require('./app/controllers/AccessCode');
const donations = require('./app/controllers/Donations');
const donationCampaigns = require('./app/controllers/DonationCampaigns');
const schedule = require('./app/controllers/Schedule');
const help = require('./app/controllers/Help');
const tutors = require('./app/controllers/Tutors');

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
routes.delete('/adoption-request/:id', adoptionRequests.delete);

routes.post('/collaborators', collaborators.create);
routes.put('/collaborators/:id', collaborators.update);
routes.get('/collaborators/:id', collaborators.show);

routes.post('/access-code', accessCode.create);
routes.get('/access-code/:access_code', accessCode.show);

routes.post('/donation-campaigns', donationCampaigns.create);
routes.get('/donation-campaigns', donationCampaigns.index);
routes.delete('/donation-campaigns/:id', donationCampaigns.delete);

routes.post('/donation', donations.create);
routes.put('/donation/:id', donations.update);

routes.post('/schedule', schedule.create);
routes.get('/schedule', schedule.index);

routes.get('/help', help.index);

routes.post('/tutors', tutors.create);
routes.get('/tutors/:email', tutors.show);

module.exports = routes;
