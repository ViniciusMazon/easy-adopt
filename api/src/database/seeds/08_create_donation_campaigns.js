exports.seed = function (knex) {
  return knex('donation_campaigns')
    .del()
    .then(function () {
      return knex('donation_campaigns').insert([
        {
          id: 'ajfh32en123',
          creation_date: new Date('2020/11/06'),
          status: 'ativa',
          title: 'Compra de Ração',
          description: 'Precisamos de dinheiro para comprar ração',
          goal: 1500.50,
          current: 0,
          created_by: 'cdb321',
        },
      ]);
    });
};
