
exports.up = function(knex, Promise) {
  return knex.schema.createTable('gallery', function(table){
    table.increments();
    table.text('imageURL')
    table.integer('users_id')
    .references('users.id')
    .onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('gallery');
};
