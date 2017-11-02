var express = require('express');
var router = express.Router();
require('dotenv').config();
var knex = require('../db/connection');
var jwt = require('jsonwebtoken');
var queries = require('../db/queries')

router.get('/:id', function(req, res, next){
  var id = req.params.id;
  queries.getGalleryById(id)
  .then(data => {
      res.json(data)
  })
})


router.post("/", function(req, res, next) {
  const data = req.body;
  queries.postGalleryById(data)
  .catch(() => {
    res.send("Error")
  })
  .then(() => {
    res.send("Success")
  })
})

router.delete("/:id", function(req, res, next) {
  let id = req.params.id;
  queries.deleteGalleryById(id)
        .then(() => {
          res.json("deleted")
        })
})

//
// function getUser(token) {
//   try {
//     var decoded = jwt.verify(token, process.env.TOKEN_SECRET);
//     return decoded;
//   } catch (err) {
//     console.log(err);
//   }
// }
module.exports = router;
