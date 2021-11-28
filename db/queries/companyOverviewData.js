require('dotenv').config();
const { Pool } = require("pg");

const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "upswing",
});

/**
 * Create A Company Overview Table For A Stock
 * @param {{ticker: string}}
 */
exports.createCompanyOverview = function(ticker) {
  return pool
    .query(
      `
      DROP TABLE IF EXISTS ${ticker}_company_overview CASCADE;
      CREATE TABLE ${ticker}_company_overview
      (
          id SERIAL PRIMARY KEY NOT NULL,
          name VARCHAR(255) NOT NULL,
          exchange VARCHAR(255) NOT NULL,
          country VARCHAR(255) NOT NULL,
          currency VARCHAR(255) NOT NULL,
          sector VARCHAR(255) NOT NULL,
          description TEXT NOT NULL
       );
      `
    );
};

/**
 * Add Data To A Company Overview Table For A Stock
 * @param {{name:string, description:string, exchange:string, currency:string, country:string, sector:string}}
 */
exports.addCompanyOverview = function(ticker, name, description, exchange, currency, country, sector) {
  return pool
    .query(
      `
      INSERT INTO ${ticker}_company_overview (name, exchange, country, currency, sector, description)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
      `,
      [
        name,
        exchange,
        country,
        currency,
        sector,
        description
      ]
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log("addCompanyOverviewData error = " + err.message);
    });
};
