const { createTsDaily, createTsWeekly, createTsMonthly } = require('../db/queries/timeSeriesData');
const { createCompanyOverview } = require('../db/queries/companyOverviewData');
const { createBalanceSheet } = require('../db/queries/balanceSheetData');

exports.externalDataTableCreator = function(ticker) {
  createTsDaily(ticker);
  createTsWeekly(ticker);
  createTsMonthly(ticker);
  createCompanyOverview(ticker);
  createBalanceSheet(ticker);
};
