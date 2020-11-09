const connection = require('../../database/connection');
const { edit } = require('./Collaborators');

module.exports = {
  async create(access_code_data) {
    await connection('access_code').insert(access_code_data);
    return;
  },
  async edit(access_code, access_code_data) {
    await connection('access_code')
      .where('access_code.access_code', access_code)
      .update(access_code_data);
    return;
  },
  async show(access_code) {
    const access_code_data = await connection('access_code')
      .where('access_code', access_code)
      .select('*')
      .first();

    return access_code_data;
  },
};
