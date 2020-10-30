exports.seed = function (knex) {
  return knex('addresses')
    .del()
    .then(function () {
      return knex('addresses').insert([
        {
          id: '1hg3gge',
          street: 'Rua A',
          number: '123',
          neighborhood: 'Bairro A',
          city: 'Cidade A',
          state: 'Estado A',
          cep: '00.000-000',
        },
        {
          id: 'j3k45jh',
          street: 'Rua B',
          number: '456',
          neighborhood: 'Bairro B',
          city: 'Cidade B',
          state: 'Estado B',
          cep: '11.111-111',
        },
      ]);
    });
};
