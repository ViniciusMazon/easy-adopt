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
          image1:
            'https://defatoonline.com.br/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-04-at-10.26.06-PM-e1599269302582.jpeg',
        },
      ]);
    });
};
