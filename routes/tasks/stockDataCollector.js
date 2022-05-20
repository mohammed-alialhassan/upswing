const express      = require('express');
const router       = express();
const { Pool }     = require('pg');
const { dbParams } = require('../../db/params/dbParams');
const cookieSession = require('cookie-session');
const { externalDataFetcher } = require("../../lib/externalDataFetcher");

const pool = new Pool(dbParams);

router.use(cookieSession({
  name: 'UpSwing',
  keys: ['upswing is the way and key']
}));

router.post('/', (req, res) => {

  let ticker = req.body.ticker;

  // Queries the database to see if company data is already present
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
    ).then((results) => {
      // Data was present in database, send the data object and finish promise without using Alpha Vantage API
      const tsTickerData = results.rows[0].json_build_object;
      console.log(tsTickerData); 
      res.send({ tsTickerData });
    })
    .catch((err) => {
      // Company data was not present in database => Alpha Vantage API fetch
      externalDataFetcher(ticker);
      res.send({message: "Data received by database!"});
    });
  return router;
});

module.exports = router;
