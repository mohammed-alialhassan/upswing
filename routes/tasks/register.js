const express     = require('express');
const router      = express();
const { addUser } = require('../../db/queries/users');

router.post('/', (req, res) => {
  const userDetails = req.body;
  addUser(userDetails);
  res.redirect('/dashboard');
});

module.exports = router;
