const { format } = require('date-fns');
const keyGenerator = require('../../utils/keyGenerator');
const validations = require('../../validations/animalsSchema');

const animalModel = require('../models/Animals');
const proceduresModel = require('../models/Procedures');
const animalView = require('../views/Animals');
const animalAndProceduresView = require('../views/AnimalAndProcedures');

module.exports = {
  async create(request, response) {
    try {
      const { name, gender, specie, size, age, status } = request.body;
      const images = request.files.map((image) => {
        return { path: image.filename };
      });

      const animal = {
        id: keyGenerator(),
        name,
        gender,
        specie,
        size,
        age,
        status,
        registration_date: format(new Date(), 'yyyy/MM/dd'),
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
  async update(request, response) {
    try {
      const { id } = request.params;
      const { name, gender, specie, size, age, status } = request.body;

      const animal = {
        name,
        gender,
        specie,
        size,
        age,
        status,
      };

      await validations.update(response, animal);
      await animalModel.edit(id, animal);
      return response.status(200).send();
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
  async index(request, response) {
    try {
      const animals = await animalModel.index();
      return response.status(200).json(animalView.renderMany(animals));
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
  async show(request, response) {
    try {
      const { id } = request.params;
      await validations.show(response, id);

      const animal = await animalModel.show(id);
      if (animal) {
        const procedures = await proceduresModel.index(animal.id);
        return response
          .status(200)
          .json(animalAndProceduresView.render(animal, procedures));
      } else {
        return response.status(200).json({});
      }
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
  async delete(request, response) {
    try {
      const { id } = request.params;
      await animalModel.destroy(id);
      return response.status(200).send();
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
};
