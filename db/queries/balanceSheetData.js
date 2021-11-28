require('dotenv').config();
const { Pool }     = require("pg");
const { dbParams } = require("../params/dbParams");

const pool = new Pool(dbParams);

/**
 * Create A Balance Sheet Table For A Stock
 * @param {{ticker: string}}
 */
exports.createBalanceSheet = function(ticker) {
  return pool
    .query(
      `
      DROP TABLE IF EXISTS ${ticker}_balance_sheet CASCADE;
      CREATE TABLE ${ticker}_balance_sheet
      (
            id SERIAL PRIMARY KEY NOT NULL,
            fiscal_date_ending VARCHAR(255) NOT NULL,
            reported_currency VARCHAR(255) NOT NULL,
            total_assets VARCHAR(255) NOT NULL,
            inventory VARCHAR(255) NOT NULL,
            property_plant_equipment VARCHAR(255) NOT NULL,
            goodwill VARCHAR(255) NOT NULL,
            long_term_investments VARCHAR(255) NOT NULL,
            short_term_investments VARCHAR(255) NOT NULL,
            total_liabilities VARCHAR(255) NOT NULL,
            current_debt VARCHAR(255) NOT NULL,
            common_stock VARCHAR(255) NOT NULL,
            common_stock_shares_outstanding VARCHAR(255) NOT NULL
       );
      `
    );
};

/**
 * Add Data To A Balance Sheet Table For A Stock
 * @param {{fiscal_date_ending:string, reported_currency:string, total_assets:string, inventory:string, property_plant_equipment:string, goodwill:string, long_term_investments:string, short_term_investments:string, total_liabilities:string, current_debt:string, common_stock:string, common_stock_shares_outstanding:string}}
 */
exports.addBalanceSheetData = function(ticker, annualReports) {
  return pool
    .query(
      `
      INSERT INTO ${ticker}_balance_sheet (fiscal_date_ending, reported_currency, total_assets, inventory, property_plant_equipment, goodwill, long_term_investments, short_term_investments, total_liabilities, current_debt, common_stock, common_stock_shares_outstanding)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING *;
      `,
      [
        annualReports["fiscalDateEnding"],
        annualReports["reportedCurrency"],
        annualReports["totalAssets"],
        annualReports["inventory"],
        annualReports["propertyPlantEquipment"],
        annualReports["goodwill"],
        annualReports["longTermInvestments"],
        annualReports["shortTermInvestments"],
        annualReports["totalLiabilities"],
        annualReports["currentDebt"],
        annualReports["commonStock"],
        annualReports["commonStockSharesOutstanding"],
      ]
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log("addBalanceSheetData error = " + err.message);
    });
};
