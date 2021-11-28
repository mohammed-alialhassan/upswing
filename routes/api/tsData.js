const express      = require('express');
const router       = express();
const { Pool }     = require('pg');
const { dbParams } = require('../../db/params/dbParams');

const pool   = new Pool(dbParams);

router.get(`/`, (req, res) => {
  const ticker = 'IBM';
  pool
    .query(
      `
      SELECT
        json_build_object(
          '${ticker}_ts_daily', (SELECT json_agg(row_to_json(a)) FROM ${ticker}_ts_daily a),
          '${ticker}_ts_weekly', (SELECT json_agg(row_to_json(b)) FROM ${ticker}_ts_weekly b),
          '${ticker}_ts_monthly', (SELECT json_agg(row_to_json(c)) FROM ${ticker}_ts_monthly c),
          '${ticker}_company_overview', (SELECT json_agg(row_to_json(d)) FROM ${ticker}_company_overview d),
          '${ticker}_balance_sheet', (SELECT json_agg(row_to_json(e)) FROM ${ticker}_balance_sheet e)
        )
      `
    )
    .then((data) => {
      const tsTickerData = data.rows;
      res.json({ tsTickerData });
    })
    .catch((err) => {
      res.status(500).send({ error: err.message });
    });
  return router;
});

module.exports = router;
