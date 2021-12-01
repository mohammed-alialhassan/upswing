const express = require('express');
const router  = express();

router.get("/", (req, res) => {
  res.send('this loads.');
});

module.exports = router;
