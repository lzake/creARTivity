var knex = require('./connection')

module.exports = {
  getUsers: function() {
    return knex('users').select()
  },
  getUserById: function(id) {
    return knex('users').select().where('id', id)
  },
  getSecretsByUserId: function(id) {
    return knex('secrets')
      .select('id', 'secret')
      .where('user_id', id)
  },
  getGalleryById: function(id) {
    return knex("gallery").where("users_id", id)
  },
  postGalleryById: function(data){
  return knex("gallery").insert({
    imageURL:data.imageURL,
    users_id:data.users_id
   })
 },
  deleteGalleryById: function(id){
    return knex("gallery")
            .where("id", id)
            .del()
 }
}
