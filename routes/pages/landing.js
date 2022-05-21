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

router.get("/", (req, res) => {

  const dbUser = req.session.user_id; 

  if (dbUser) {
    pool
      .query(
        `
        SELECT * FROM users WHERE id = ${dbUser};
        `
      )
      .then(result => {
       const first_name = result.rows[0].first_name;
       const last_name = result.rows[0].last_name;
       const username = result.rows[0].username;
       const email = result.rows[0].email;
       const phone_number = result.rows[0].phone_number;
       const load = { user: true, first_name, last_name, username, email, phone_number, dbUser };

       res.send(load);
      })
      .catch((err) => {
        res.send(false); 
      });
  } else {
    res.send(false);
    res.status(404).send('Cannot GET /');
  }
  
});

module.exports = router;
