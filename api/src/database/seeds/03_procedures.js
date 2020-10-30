exports.seed = function (knex) {
  return knex('procedures')
    .del()
    .then(function () {
      return knex('procedures').insert([
        {
          id: 'fh37as',
          date: new Date('2020/10/23'),
          name: 'Castração',
          comments: 'Peso do animal: 6kg',
          animal_id: '1bc2',
          collaborator_id: 'abc123',
        },
        {
          id: 'gh31kd',
          date: new Date('2020/10/26'),
          name: 'Vacina conta Raiva',
          comments: 'Peso do animal: 6,2kg',
          animal_id: '1bc2',
          collaborator_id: 'abc123',
        },
      ]);
    });
};
