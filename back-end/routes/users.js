var express = require('express');
var queries = require('../db/queries')

var jwt = require('jsonwebtoken')
var router = express.Router();
require('dotenv').config(); //access to .env file with the SECRET_TOKEN

router.get('/', (req, res) => {
  queries.getUsers().then(users => {
    res.json({data: users});
  })
});

router.get('/:id', (req, res) => {
  queries.getUserById(req.params.id).then(user => {
    res.json({data: user});
  })
});

router.get('/:id/secrets', (req, res) => {

  if (req.headers.authorization) {
    let id = req.params.id;
    let token = req.headers.authorization.substring(7)
    let decoded = jwt.verify(token, process.env.TOKEN_SECRET);
      //console.log(decoded);
    if (decoded.id == id) {
      queries.getSecretsByUserId(req.params.id).then(secrets => {
        res.json({data: secrets});
      })
    } else {
      es.status(401);
      res.json({error: `You are not authorized/don't have access`});
    }
  } else {
    res.status(401);
    res.json({error: `You are not authorized/don't have access`});
  }

});

module.exports = router;
