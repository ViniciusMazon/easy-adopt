exports.seed = function (knex) {
  return knex('adoption_requests')
    .del()
    .then(function () {
      return knex('adoption_requests').insert([
        {
          id: 'fdas878',
          opening_date: new Date('2020/10/23'),
          status: 'novo',
          residence_type: 'Casa',
          adults_home: '2',
          children_home: '1',
          smokers_home: 'Não',
          adopted_before: 'Não',
          other_animals: 'Não',
          sick_animals: 'Não',
          aware_cost: 'Sim',
          why_want_adopt:
            'Me mudei a trabalho e minha filha precisa de um novo amigo',
          animal_id: '1bc2',
          tutor_id: 'hrg123',
        },
      ]);
    });
};
