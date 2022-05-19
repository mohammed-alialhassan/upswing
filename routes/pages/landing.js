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
        res.send(true);
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
