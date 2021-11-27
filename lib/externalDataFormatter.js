const { createTsDaily, addTsDaily } = require('../db/queries/timeSeriesData');

exports.tsFormatter = function(timespan, tsData, ticker) {

  const interval     = Object.keys(tsData)[1];
  const intervalData = Object.entries(tsData[interval]);

  const dbFormat = function(createTable, insertValues) {
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
    dbFormat(createTsDaily, addTsDaily);
    return;
  } else if (timespan === "Weekly") {

    return;
  } else if (timespan === "Monthly") {

    return;
  }

  return `Something went wrong, no values were added for the ${timespan} ${ticker} table.`;
};

// exports.companyOverviewFormatter = function(data, ticker) {

// };

// exports.balanceSheetFormatter = function(data, ticker) {

// };
