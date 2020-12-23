exports.seed = function (knex) {
  return knex('collaborators')
    .del()
    .then(function () {
      return knex('collaborators').insert([
        {
          id: 'cdb321',
          access_code: '1A2B3C4D',
          name: 'Marcos de Lacerda',
          birth_date: new Date('1986/04/13'),
          cpf: '488.446.340-40',
          email: 'catarina@easyAdopt.com',
          hash_password:
            '$2b$10$yZa1Py6fqKeSsvmG/baiKeoho2l1hSq8CsojFHaIseuwe/JrHgB0C',
          phone: '(11)8888-6258',
          role: 'collaborator',
          address_id: '1hj3ge',
        },
        {
          id: 'abc123',
          access_code: '2444900A435D7D9A',
          name: 'Catarina de Luz e Paiva',
          birth_date: new Date('1986/10/23'),
          cpf: '815.594.760-28',
          email: 'catarina@easyAdopt.com',
          hash_password:
            '$2b$10$yZa1Py6fqKeSsvmG/baiKeoho2l1hSq8CsojFHaIseuwe/JrHgB0C',
          phone: '(11)9999-9999',
          role: 'collaborator',
          address_id: '1hg3gge',
        },
      ]);
    });
};
