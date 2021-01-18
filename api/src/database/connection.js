const knex = require('knex');

const configuration = require('../../knexfile');

let config = {};

switch (process.env.NODE_ENV) {
  case 'production':
    config = configuration.production;
    break;
  case 'development':
    config = configuration.development;
    break;
  case 'test':
    config = configuration.test;
    break;
  default:
    config = configuration.development;
}

const connection = knex(config);

module.exports = connection;
