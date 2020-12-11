const { format } = require('date-fns');
const keyGenerator = require('../../utils/keyGenerator');
const validations = require('../../validations/animalsSchema');

const animalModel = require('../models/Animals');
const imagesModel = require('../models/Images');
const proceduresModel = require('../models/Procedures');
const animalView = require('../views/Animals');
const animalAndProceduresView = require('../views/AnimalAndProcedures');

module.exports = {
  async create(request, response) {
    try {
      const { name, gender, specie, size, age, status } = request.body;
      const images = request.files.map((image) => {
        return {
          id: keyGenerator(),
          name: image.filename,
          type: 'animal',
        };
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
        image1_id: await imagesModel.create(images[0]),
        image2_id: await imagesModel.create(images[1]),
        image3_id: await imagesModel.create(images[2]),
      };

      await validations.create(response, animal);
      await animalModel.create(animal);

      const animalRender = {
        id: animal.id,
        name,
        gender,
        specie,
        size,
        age,
        status,
        registration_date: animal.registration_date,
        image1_url: images[0].name,
        image2_url: images[1].name,
        image3_url: images[2].name,
      };
      return response.status(201).json(animalView.render(animalRender));
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
      var animals = await animalModel.index();

      if (request.query.status) {
        const avaliableAnimals = animals.filter((animal) => {
          if (animal.status === request.query.status) {
            return animal;
          }
        });
        animals = avaliableAnimals;
      }

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
