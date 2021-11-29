const express = require("express");
const router = express.Router();
const { externalDataFetcher } = require("../../lib/externalDataFetcher");

router.get('/', (req, res) => {
  externalDataFetcher(req.body.ticker);
  res.redirect('/api/stock-data');
});

module.exports = router;
