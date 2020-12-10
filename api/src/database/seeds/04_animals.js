exports.seed = function (knex) {
  return knex('animals')
    .del()
    .then(function () {
      return knex('animals').insert([
        {
          id: '1bc2',
          name: 'Mikka',
          gender: 'Fêmea',
          specie: 'Cachorro',
          size: 'Médio',
          age: 'Adulto',
          status: 'disponível',
          registration_date: new Date('2020/10/23'),
          image1_id: 'img1',
          image2_id: 'img2',
          image3_id: 'img3',
        },
      ]);
    });
};
