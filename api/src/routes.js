const routes = require('express').Router();
const multer = require('multer');

const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);

const authMiddleware = require('./app/middlewares/auth');

const session = require('./app/controllers/Session');
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
const Addresses = require('./app/controllers/Addresses');
const Images = require('./app/controllers/Images');
const ResetPassword = require('./app/controllers/ResetPassword');

// Public routes
routes.post('/collaborators', collaborators.create);

routes.post('/tutors', tutors.create);

routes.post('/address', Addresses.create);

routes.post('/sing-in', session.store);

routes.get('/access-code/:access_code', accessCode.show);

routes.get('/password-reset/:role/:email', ResetPassword.show);
routes.post('/password-reset', ResetPassword.store);

routes.put('/donation/:id', donations.update);

// Private routes
routes.use(authMiddleware);

routes.put('/collaborators/:id', collaborators.update);
routes.get('/collaborators/:id', collaborators.show);

routes.put('/tutors/:id', tutors.update);
routes.get('/tutors/:email', tutors.show);

routes.put('/address/:id', Addresses.update);

routes.post('/access-code', accessCode.create);

routes.post('/animals', upload.array('images'), animals.create);
routes.put('/animals/:id', animals.update);
routes.get('/animals', animals.index);
routes.get('/animals/:id', animals.show);
routes.delete('/animals/:id', animals.delete);

routes.post('/procedures', procedures.create);

routes.get('/adoption-request', adoptionRequests.index);
routes.post('/adoption-request', adoptionRequests.create);
routes.put('/adoption-request/:id', adoptionRequests.update);
routes.get('/adoption-request/:id', adoptionRequests.show);
routes.delete('/adoption-request/:id', adoptionRequests.delete);

routes.post('/donation-campaigns', donationCampaigns.create);
routes.get('/donation-campaigns', donationCampaigns.index);
routes.delete('/donation-campaigns/:id', donationCampaigns.delete);

routes.post('/donation', donations.create);

routes.post('/schedule', schedule.create);
routes.get('/schedule', schedule.index);

routes.get('/help', help.index);

routes.post('/images', upload.single('image'), Images.create);
routes.put('/images/:id', upload.single('image'), Images.update);

module.exports = routes;
