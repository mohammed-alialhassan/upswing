const { addTsDaily, addTsWeekly, addTsMonthly } = require('../db/queries/timeSeriesData');
const { addCompanyOverview } = require('../db/queries/companyOverviewData');
const { addBalanceSheetData } = require('../db/queries/balanceSheetData');

exports.tsFormatter = function(timespan, tsData, ticker) {
  const interval     = Object.keys(tsData)[1];
  const intervalData = Object.entries(tsData[interval]);

  const tsAdd = function(insertValues) {
    for (let array of intervalData) {
      const date          = array[0];
      const open          = array[1]['1. open'];
      const high          = array[1]['2. high'];
      const low           = array[1]['3. low'];
      const close         = array[1]['4. close'];
      const adjustedClose = array[1]['5. adjusted close'];
      const volume        = array[1]['6. volume'];
      insertValues(ticker, date, open, high, low, close, adjustedClose, volume);
    }
  };

  if (timespan === "Daily") {
    tsAdd(addTsDaily);
  } else if (timespan === "Weekly") {
    tsAdd(addTsWeekly);
  } else if (timespan === "Monthly") {
    tsAdd(addTsMonthly);
  }
};

exports.companyOverviewFormatter = function(data, ticker) {
  const name = data["Name"];
  const description = data["Description"];
  const exchange = data["Exchange"];
  const currency = data["Currency"];
  const country = data["Country"];
  const sector = data["Sector"];

  addCompanyOverview(ticker, name, description, exchange, currency, country, sector);
};

exports.balanceSheetFormatter = function(data, ticker) {
  const annualReports = data["annualReports"][0];

  addBalanceSheetData(ticker, annualReports);
};
