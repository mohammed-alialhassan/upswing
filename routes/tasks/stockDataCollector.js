const express = require("express");
const router = express.Router();
const { externalDataFetcher } = require("../../lib/externalDataFetcher");

router.get('/', (req, res) => {
  externalDataFetcher(req.body.ticker);
});

module.exports = router;
