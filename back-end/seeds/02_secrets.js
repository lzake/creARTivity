exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM secrets; ALTER SEQUENCE secrets_id_seq RESTART WITH 6;')
    .then(function () {
      return knex('secrets').insert([
        {id: 1, secret: 'I hate rugs', user_id: 1},
        {id: 2, secret: 'I have never seen Wizard Of Oz', user_id: 1},
        {id: 3, secret: 'I like cows more than llamas', user_id: 1},
        {id: 4, secret: 'I only have fun socks', user_id: 2},
        {id: 5, secret: 'I was a member of an acapella band', user_id: 2},
      ])
    });
};
