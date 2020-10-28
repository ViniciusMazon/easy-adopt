exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {
          id: 'abc123',
          name: 'Catarina de Luz e Paiva',
          birth_date: new Date('2020/10/23'),
          cpf: '815.594.760-28',
          email: 'catarina@easyAdopt.com',
          hash_password: '46070D4BF934FB0D4B',
          phone: '(11)9999-9999',
        },
      ]);
    });
};
