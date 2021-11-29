const express                 = require('express');
const router                  = express();
const { addUser }             = require('../../db/queries/users');
const { getUserWithEmail }    = require('../../db/queries/users');
const { getUserWithUsername } = require('../../db/queries/users');

router.post('/', (req, res) => {
  const userDetails = req.body;

  if (!getUserWithEmail(userDetails.email) && !getUserWithUsername(userDetails.username)) {
    addUser(userDetails);
    res.redirect('/dashboard');
  } else {
    res.status(400).send("<html><body>Error: A user with this e-mail already exists.</body></html>\n");
  }
});

module.exports = router;
