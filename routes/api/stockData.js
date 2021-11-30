const express      = require('express');
const router       = express();
const { Pool }     = require('pg');
const { dbParams } = require('../../db/params/dbParams');

const pool = new Pool(dbParams);

router.get(`/`, (req, res) => {
  const ticker = req.body.ticker;
  pool
    .query(
      `
      SELECT
        json_build_object(
          '${ticker}_ts_daily', (SELECT json_agg(row_to_json(a) ORDER BY date ASC) FROM ${ticker}_ts_daily a),
          '${ticker}_ts_weekly', (SELECT json_agg(row_to_json(b) ORDER BY date ASC) FROM ${ticker}_ts_weekly b),
          '${ticker}_ts_monthly', (SELECT json_agg(row_to_json(c) ORDER BY date ASC) FROM ${ticker}_ts_monthly c),
          '${ticker}_company_overview', (SELECT json_agg(row_to_json(d)) FROM ${ticker}_company_overview d),
          '${ticker}_balance_sheet', (SELECT json_agg(row_to_json(e)) FROM ${ticker}_balance_sheet e)
        )
      `
    )
    .then((results) => {
      const tsTickerData = results.rows[0].json_build_object;
      res.json({ tsTickerData });
    })
    .catch((err) => {
      console.log(err.message);
    });
  return router;
});

module.exports = router;
