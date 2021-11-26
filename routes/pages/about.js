const express = require('express');
const router  = express();

router.get("/", (req, res) => {
  res.json("about page");
});

module.exports = router;
