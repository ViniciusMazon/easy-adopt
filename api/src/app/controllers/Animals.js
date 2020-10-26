const { format } = require('date-fns');

const keyGenerator = require('../../utils/keyGenerator');
const validations = require('../../validations/animalsSchema');

const animalModel = require('../models/Animals');
const animalView = require('../views/Animals');

module.exports = {
  async createNewAnimal(request, response) {
    try {
      const { name, gender, specie, size, age, status } = request.body;
      const images = request.files.map((image) => {
        return { path: image.filename };
      });

      const id = keyGenerator();
      const registration_date = format(new Date(), 'yyyy/MM/dd');
      const animal = {
        id,
        name,
        gender,
        specie,
        size,
        age,
        status,
        registration_date,
        image1: images[0].path,
        image2: images[1].path,
        image3: images[2].path,
      };

      await validations.create(response, animal);

      await animalModel.create(animal);
      return response.status(201).json(animalView.render(animal));
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
};