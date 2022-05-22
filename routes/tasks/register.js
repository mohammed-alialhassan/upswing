const express     = require('express');
const router      = express();
const { Pool }     = require('pg');
const { dbParams } = require('../../db/params/dbParams');
const { addUser } = require('../../db/queries/users');

const pool = new Pool(dbParams);

router.post('/', (req, res) => {
  return pool
    .query(
      `
      SELECT *
      FROM users
      WHERE email = $1 OR username = $2
      `,
      [
        req.body.email,
        req.body.username
      ])
    .then((result) => {
      if (result.rows[0]) {
        res.status(401).send({message: 'A user with this email or username already exists.'});
      } else {
        res.status(200).send({message: 'User has been successfully registered.'});
        addUser(req.body);
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
});

module.exports = router;
