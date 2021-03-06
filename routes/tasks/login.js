const express      = require('express');
const router       = express();
const { Pool }     = require('pg');
const { dbParams } = require('../../db/params/dbParams');
const cookieSession = require('cookie-session');

const pool = new Pool(dbParams);

router.use(cookieSession({
  name: 'UpSwing',
  keys: ['upswing is the way and key']
}));

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
      const dbUser = result.rows[0].id;

      if (password === loggedPass) {
        req.session.user_id = dbUser;
        res.send(result.rows[0]);
      } else {
        res.status(401).send({message: "A user with this password does not exist, please try again"});
      }
    })
    .catch((err) => {
      res.send(err.message);
    });
});

module.exports = router;
