exports.seed = function (knex) {
  return knex('tutors')
    .del()
    .then(function () {
      return knex('tutors').insert([
        {
          id: 'hrg123',
          gender: 'Feminino',
          name: 'Fabíola de Camargo Correia',
          birth_date: new Date('1990/02/23'),
          cpf: '890.491.240-70',
          email: 'fabiola@gmail.com',
          hash_password: '46070D4BF934FB0D4B',
          phone: '(11)8888-8888',
          role: 'tutor',
          avatar_id: 'img5',
          address_id: 'j3k45jh',
        },
      ]);
    });
};
