const connection = require('../../database/connection');

module.exports = {
  async create(animal) {
    await connection('animals').insert(animal);
    return;
  },
  async edit(id, animal) {
    await connection('animals').where('id', id).update(animal);
    return;
  },
  async index() {
    const animals = await connection('animals')
      .innerJoin('images as images1', 'animals.image1_id', 'images1.id')
      .innerJoin('images as images2', 'animals.image2_id', 'images2.id')
      .innerJoin('images as images3', 'animals.image3_id', 'images3.id')
      .select(
        'animals.id',
        'animals.name',
        'animals.gender',
        'animals.specie',
        'animals.size',
        'animals.age',
        'animals.status',
        'animals.registration_date',
        'animals.image1_id',
        'animals.image2_id',
        'animals.image3_id',
        'images1.name as image1_name',
        'images2.name as image2_name',
        'images3.name as image3_name'
      );

    return animals;
  },
  async show(id) {
    const animal = await connection('animals')
      .innerJoin('images as images1', 'animals.image1_id', 'images1.id')
      .innerJoin('images as images2', 'animals.image2_id', 'images2.id')
      .innerJoin('images as images3', 'animals.image3_id', 'images3.id')
      .where('animals.id', id)
      .select(
        'animals.id',
        'animals.name',
        'animals.gender',
        'animals.specie',
        'animals.size',
        'animals.age',
        'animals.status',
        'animals.registration_date',
        'animals.image1_id',
        'animals.image2_id',
        'animals.image3_id',
        'images1.name as image1_name',
        'images2.name as image2_name',
        'images3.name as image3_name'
      )
      .first();
    return animal;
  },
  async destroy(id) {
    await connection('animals').where('id', id).delete();
    return;
  },
};
