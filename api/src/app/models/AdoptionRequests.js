const connection = require('../../database/connection');

module.exports = {
  async create(adoptionRequest) {
    await connection('adoption_requests').insert(adoptionRequest);
    return;
  },
};
