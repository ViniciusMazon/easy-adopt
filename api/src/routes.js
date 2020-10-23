const routes = require('express').Router();

routes.get('/', (request, response) => response.json({ ok: true }));

module.exports = routes;
