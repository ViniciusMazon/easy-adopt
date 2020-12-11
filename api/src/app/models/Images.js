const connection = require('../../database/connection');

module.exports = {
  async create(image) {
    await connection('images').insert(image);
    return image.id;
  },
  async edit(id, name) {
    await connection('images').where('id', id).update({ name: name });
    return;
  },
};
