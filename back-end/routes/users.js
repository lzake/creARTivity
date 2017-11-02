var express = require('express');
var queries = require('../db/queries')

var router = express.Router();

router.get('/', (req, res) => {
  queries.getUsers().then(users => {
    res.json({data:users});
  })
});

router.get('/:id', (req, res) => {
  queries.getUserById(req.params.id).then(user => {
    res.json({data:user});
  })
});

router.get('/:id/secrets', (req, res) => {
  queries.getSecretsByUserId(req.params.id).then(secrets => {
    res.json({data:secrets});
  })
});

module.exports = router;
