const { format } = require('date-fns');

exports.seed = function (knex) {
  return knex('schedule')
    .del()
    .then(function () {
      return knex('schedule').insert([
        {
          id: 'sks8348fd',
          date: format(new Date(), 'yyyy/MM/dd'),
          time: '14:00',
          tutor_id: 'hrg123',
          animal_id: '1bc2',
        },
      ]);
    });
};
