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
      image1_url,
      image2_url,
      image3_url,
    } = animalView.render(animal);

    return {
      id,
      name,
      gender,
      specie,
      size,
      age,
      status,
      image1_url,
      image2_url,
      image3_url,
      procedures: proceduresView.renderMany(procedures),
    };
  },
};
