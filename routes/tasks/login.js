const express      = require('express');
const router       = express();
const { Pool }     = require('pg');
const { dbParams } = require('../../db/params/dbParams');

const pool = new Pool(dbParams);

router.post('/', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  pool
    .query(
      `
      SELECT *
      FROM users
      WHERE username = $1 AND password = $2
      `,
      [username, password]
    )
    .then((results) => {
      if (results) {
        res.send(results);
      } else {
        res.send({message: 'Incorrect username or password, please try again'});
      }
    })
    .then(() => {
      res.redirect('/dashboard');
    })
    .catch((err) => {
      console.log(err.message);
    });
});

module.exports = router;
