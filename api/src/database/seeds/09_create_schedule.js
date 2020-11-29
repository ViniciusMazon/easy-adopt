const { format } = require('date-fns');

exports.seed = function (knex) {
  return knex('schedule')
    .del()
    .then(function () {
      return knex('schedule').insert([
        {
          id: 'sks8348fd',
          date: format(new Date(), 'yyyy/MM/dd'),
          period: '15:00 às 17:00',
          adoption_request_id: 'fdas878',
        },
      ]);
    });
};
