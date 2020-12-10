const animalView = require('./Animals');
const proceduresView = require('./Procedures');

module.exports = {
  render(animal, procedures) {
    const {
      id,
      name,
      gender,
      specie,
      size,
      age,
      status,
      images,
    } = animalView.render(animal);

    return {
      id,
      name,
      gender,
      specie,
      size,
      age,
      status,
      images,
      procedures: proceduresView.renderMany(procedures),
    };
  },
};
