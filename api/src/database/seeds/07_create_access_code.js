exports.seed = function (knex) {
  return knex('adoption_requests')
    .del()
    .then(function () {
      return knex('adoption_requests').insert([
        {
          id: 'fds5gf43',
          access_code: '2444900A435D7D9A',
          creation_date: new Date('2020/10/23'),
          created_by: 'cdb321',
          date_use: new Date('2020/10/23'),
          used_by: 'abc123',
        },
      ]);
    });
};
