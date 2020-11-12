const { format } = require('date-fns');

exports.seed = function (knex) {
  return knex('donations')
    .del()
    .then(function () {
      return knex('donations').insert([
        {
          id: 'jfjf83jsd7',
          date: format(new Date(), 'yyyy/MM/dd'),
          amount: 100.0,
          status: 'pago',
          donation_campaign_id: 'ajfh32en123',
          tutor_id: 'hrg123',
        },
        {
          id: 'fdafd63443',
          date: format(new Date(), 'yyyy/MM/dd'),
          amount: 50.0,
          status: 'pago',
          donation_campaign_id: 'ajfh32en123',
          tutor_id: 'hrg123',
        },
        {
          id: '43tdfasd',
          date: format(new Date(), 'yyyy/MM/dd'),
          amount: 10.0,
          status: 'novo',
          donation_campaign_id: 'ajfh32en123',
          tutor_id: 'hrg123',
        },
      ]);
    });
};
