exports.seed = function (knex) {
  return knex('images')
    .del()
    .then(function () {
      return knex('images').insert([
        {
          id: 'img1',
          name: 'dog.jpeg',
          type: 'animal',
        },
        {
          id: 'img2',
          name: 'dog.jpeg',
          type: 'animal',
        },
        {
          id: 'img3',
          name: 'dog.jpeg',
          type: 'animal',
        },
        {
          id: 'img4',
          name: 'user.jpeg',
          type: 'tutor',
        },
      ]);
    });
};
