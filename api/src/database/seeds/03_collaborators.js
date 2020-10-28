exports.seed = function (knex) {
  return knex('collaborators')
    .del()
    .then(function () {
      return knex('collaborators').insert([
        {
          id: 'efg456',
          access_code: '2444900A435D7D9A95E6D7435F5',
          user_id: 'abc123',
        },
      ]);
    });
};
