const express = require("express");
const router = express.Router();
const { externalDataFetcher } = require("../../lib/externalDataFetcher");

router.post('/', (req, res) => {
  externalDataFetcher(req.body.ticker);
  res.send({message: "Data received by database!"});
});

module.exports = router;
