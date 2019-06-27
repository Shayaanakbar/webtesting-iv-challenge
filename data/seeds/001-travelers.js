
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('travelers').del()
    .then(function () {
      // Inserts seed entries
      return knex('travelers').insert([
        {id: 1, name: 'Shayaan'},
        {id: 2, name: 'Malcolm'},
        {id: 3, name: 'Tony'},
        {id: 4, name: 'Mike'},
      ]);
    });
};