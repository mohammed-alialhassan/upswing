const express = require('express');
const router  = express();

router.get("/", (req, res) => {
  res.json("screener page");
});

module.exports = router;
