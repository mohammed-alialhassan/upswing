const express      = require('express');
const router       = express();
const { Pool }     = require("pg");
const { dbParams } = require("../../db/params/dbParams");

const pool = new Pool(dbParams);

router.get(`/`, (req, res) => {

  const dbUser = req.session.user_id; 

  if (dbUser) {
    pool
    .query(
      `
      SELECT * FROM USERS;
      `
    )
    .then((results) => {
      const users = results.rows;
      res.json({ users });
    })
    .catch((err) => {
      console.log(err.message);
    });
  } else {
    res.status(404).send('Cannot GET /');
  }

  return router;
});

module.exports = router;
