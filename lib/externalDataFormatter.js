const {
  createTsDaily,
  addTsDaily,
  createTsWeekly,
  addTsWeekly,
  createTsMonthly,
  addTsMonthly
} = require('../db/queries/timeSeriesData');
const { createCompanyOverview, addCompanyOverview } = require('../db/queries/companyOverviewData');
const { createBalanceSheet, addBalanceSheetData } = require('../db/queries/balanceSheetData');

exports.tsFormatter = function(timespan, tsData, ticker) {

  const interval     = Object.keys(tsData)[1];
  const intervalData = Object.entries(tsData[interval]);

  const DbFormat = function(createTable, insertValues) {
    createTable(ticker);

    for (let array of intervalData) {
      const date           = array[0];
      const open           = array[1]['1. open'];
      const high           = array[1]['2. high'];
      const low            = array[1]['3. low'];
      const close          = array[1]['4. close'];
      const adjustedClose  = array[1]['5. adjusted close'];
      const volume         = array[1]['6. volume'];
      insertValues(ticker, date, open, high, low, close, adjustedClose, volume);
    }
  };

  if (timespan === "Daily") {
    DbFormat(createTsDaily, addTsDaily);
    return;
  } else if (timespan === "Weekly") {
    DbFormat(createTsWeekly, addTsWeekly);
    return;
  } else if (timespan === "Monthly") {
    DbFormat(createTsMonthly, addTsMonthly);
    return;
  }

  return `Something went wrong, no values were added for the ${timespan} ${ticker} table.`;
};

exports.companyOverviewFormatter = function(data, ticker) {
  createCompanyOverview(ticker);

  const name = data["Name"];
  const description = data["Description"];
  const exchange = data["Exchange"];
  const currency = data["Currency"];
  const country = data["Country"];
  const sector = data["Sector"];

  addCompanyOverview(ticker, name, description, exchange, currency, country, sector);
  return;
};

exports.balanceSheetFormatter = function(data, ticker) {
  createBalanceSheet(ticker);

  const annualReports = data["annualReports"][0];

  addBalanceSheetData(ticker, annualReports);
  return;
};
