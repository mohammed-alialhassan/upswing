const express      = require('express');
const router       = express();
const { Pool }     = require('pg');
const { dbParams } = require('../../db/params/dbParams');

const pool = new Pool(dbParams);

router.post('/', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  return pool
    .query(
      `
      SELECT *
      FROM users
      WHERE email = $1
      `, [email]
    )
    .then((result) => {
      const loggedPass = result.rows[0].password;
      if (password === loggedPass) {
        res.send(result.rows[0]);
      } else {
        res.send({message: "A user with this password does not exist, please try again"});
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
});

module.exports = router;
