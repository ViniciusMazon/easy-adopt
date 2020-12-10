const keyGenerator = require('../../utils/keyGenerator');
const imagesModule = require('../models/Images');

module.exports = {
  async create(request, response) {
    const image = {
      id: keyGenerator(),
      name: request.file.filename,
      type: 'animal',
    };
    await imagesModule.create(image);
    return response.status(201).json(image.id);
  },
  async update(request, response) {
    const id = request.params.id;
    const name = request.file.filename;
    await imagesModule.edit(id, name);
    return response.status(200).send();
  },
};
