var express = require('express');
var router = express.Router();
//Additional connections & modules
var knex = require('../db/connection');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config();
//native bycrpt alternate to bycrpt const bcrypt = require('bcryptjs')
function hashSHA256(str) {
    const crypto = require('crypto');
    const hash = crypto.createHash('sha256');
    hash.update(str)
    return hash.digest('hex')
}
router.post('/login', function(req, res, next) {
  let email = req.body.email;
  //console.log(email);
  let password = req.body.password;
  let query = {password: hashSHA256(password, 12) , email}
  console.log(query);
  knex('users')
  //implicitly returned
  .select('*')
  .where(query)
  .then ( user => {
    if (user.length === 0) {
      res.json({message: 'login failed, try again'});
    } else {
      let payload = JSON.parse(JSON.stringify(user[0])); //just the way knex needs to conver the array to a single object
      //console.log(newUser);
      console.log(payload);
      //remove password from payload to the front end bc you don't want to send that password to the front-end (security reasons)
      delete payload.password;
      let token = jwt.sign(payload, process.env.TOKEN_SECRET);
      res.json({user, token, message: 'login successful'});
    }
  })
});
router.post('/signup', function(req, res, next) {
  //res.json({message: 'signup successful'});
  let email = req.body.email;
  //console.log(email);
  let password = req.body.password;
  knex('users')
  //implicitly returned
  .select('*')
  .where('email' , email)
  .then(user => {
    if (user.length === 0) {
      let saltRounds = 12
      console.time('inputs')
      let hash = hashSHA256(password, saltRounds);
      console.timeEnd('inputs')
      //Insert into database
      req.body.password = hash;
      knex('users')
        .insert(req.body)
        .returning('*')
        .then(newUser => {
          let payload = JSON.parse(JSON.stringify(newUser[0])); //just the way knex needs to conver the array to a single object
          //console.log(newUser);
          console.log(payload);
          //remove password from payload to the front end bc you don't want to send that password to the front-end (security reasons)
          delete payload.password;
          let token = jwt.sign(payload, process.env.TOKEN_SECRET);
          //console.log(process.env.TOKEN_SECRET);
          res.json({token}); //for es6 syntax your don't have to duplicate your object variable
        })
    } else {
      res.json({error: 'Email already exists, please try another email.'})
    }
  })
});
function insertUser(user){
  return knex('users')
    .insert(user)
    .returning('*')
    .then(newUser => {
      console.log(newUser);
    })
}
module.exports = router;
