exports.up = function(knex, Promise) {
  return knex.schema.createTable('secrets', function(table){
    table.increments();
    table.string('secret');
    table.integer('user_id').references('users.id').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('secrets');
};
