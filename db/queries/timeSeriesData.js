require('dotenv').config();
const { Pool }     = require("pg");
const { dbParams } = require("../params/dbParams");

const pool = new Pool(dbParams);

/// Daily TS Data Schema/Seed

/**
 * Create Daily Adjusted Timeseries Table For A Stock
 * @param {{ticker: string}}
 */
exports.createTsDaily = function(ticker) {
  return pool
    .query(
      `
      DROP TABLE IF EXISTS ${ticker}_ts_daily CASCADE;
      CREATE TABLE ${ticker}_ts_daily
      (
        id SERIAL PRIMARY KEY NOT NULL,
        date VARCHAR(255) NOT NULL,
        open VARCHAR(255) NOT NULL,
        high VARCHAR(255) NOT NULL,
        low VARCHAR(255) NOT NULL,
        close VARCHAR(255) NOT NULL,
        adjusted_close VARCHAR(255) NOT NULL,
        volume VARCHAR(255) NOT NULL
      );
      `
    );
};

/**
 * Add Daily Adjusted Timeseries Data For A Stock
 * @param {{date: string, open: string, high: string, low: string, close: string, adjustedClose: string, volume: string}}
 * @return {Promise<{}>} A promise to the user.
 */
exports.addTsDaily = function(ticker, date, open, high, low, close, adjustedClose, volume) {

  return pool
    .query(
      `
      INSERT INTO ${ticker}_ts_daily (date, open, high, low, close, adjusted_close, volume)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
      `,
      [
        date,
        open,
        high,
        low,
        close,
        adjustedClose,
        volume
      ]
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log("addTsDaily error = " + err.message);
    });
};

/// Weekly TS Data Schema/Seed

/**
 * Create Weekly Adjusted Timeseries Table For A Stock
 * @param {{ticker: string}}
 */
exports.createTsWeekly = function(ticker) {
  return pool
    .query(
      `
      DROP TABLE IF EXISTS ${ticker}_ts_weekly CASCADE;
      CREATE TABLE ${ticker}_ts_weekly
      (
        id SERIAL PRIMARY KEY NOT NULL,
        date VARCHAR(255) NOT NULL,
        open VARCHAR(255) NOT NULL,
        high VARCHAR(255) NOT NULL,
        low VARCHAR(255) NOT NULL,
        close VARCHAR(255) NOT NULL,
        adjusted_close VARCHAR(255) NOT NULL,
        volume VARCHAR(255) NOT NULL
      );
      `
    );
};

/**
 * Add Weekly Adjusted Timeseries Data For A Stock
 * @param {{date: string, open: string, high: string, low: string, close: string, adjustedClose: string, volume: string}}
 * @return {Promise<{}>} A promise to the user.
 */
exports.addTsWeekly = function(ticker, date, open, high, low, close, adjustedClose, volume) {

  return pool
    .query(
      `
      INSERT INTO ${ticker}_ts_weekly (date, open, high, low, close, adjusted_close, volume)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
      `,
      [
        date,
        open,
        high,
        low,
        close,
        adjustedClose,
        volume
      ]
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log("addTsWeekly error = " + err.message);
    });
};

/// Monthly TS Data Schema/Seed

/**
 * Create Monthly Adjusted Timeseries Table For A Stock
 * @param {{ticker: string}}
 */
exports.createTsMonthly = function(ticker) {
  return pool
    .query(
      `
      DROP TABLE IF EXISTS ${ticker}_ts_monthly CASCADE;
      CREATE TABLE ${ticker}_ts_monthly
      (
        id SERIAL PRIMARY KEY NOT NULL,
        date VARCHAR(255) NOT NULL,
        open VARCHAR(255) NOT NULL,
        high VARCHAR(255) NOT NULL,
        low VARCHAR(255) NOT NULL,
        close VARCHAR(255) NOT NULL,
        adjusted_close VARCHAR(255) NOT NULL,
        volume VARCHAR(255) NOT NULL
      );
      `
    );
};

/**
 * Add Monthly Adjusted Timeseries Data For A Stock
 * @param {{date: string, open: string, high: string, low: string, close: string, adjustedClose: string, volume: string}}
 * @return {Promise<{}>} A promise to the user.
 */
exports.addTsMonthly = function(ticker, date, open, high, low, close, adjustedClose, volume) {

  return pool
    .query(
      `
      INSERT INTO ${ticker}_ts_monthly (date, open, high, low, close, adjusted_close, volume)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
      `,
      [
        date,
        open,
        high,
        low,
        close,
        adjustedClose,
        volume
      ]
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log("addTsMonthly error = " + err.message);
    });
};
