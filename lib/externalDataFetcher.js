require('dotenv').config();
const { default: axios } = require('axios');
const { externalDataTableCreator } = require('./externalDataTableCreator');
const { tsFormatter, companyOverviewFormatter, balanceSheetFormatter } = require("./externalDataValueAdder");

exports.externalDataFetcher = (ticker) => {
  externalDataTableCreator(ticker);

  const API_KEY            = process.env.API_KEY;
  const tsDailyUrl         = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${API_KEY}`;
  const tsWeeklyUrl        = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${ticker}&outputsize=compact&apikey=${API_KEY}`;
  const tsMonthlyUrl       = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${ticker}&outputsize=compact&apikey=${API_KEY}`;
  const companyOverviewUrl = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${API_KEY}`;
  const balanceSheetUrl    = `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${ticker}&apikey=${API_KEY}`;

  Promise.all([
    axios.get(tsDailyUrl),
    axios.get(tsWeeklyUrl),
    axios.get(tsMonthlyUrl),
    axios.get(companyOverviewUrl),
    axios.get(balanceSheetUrl),
  ])
    .then((res) => {
      const tsDailyData         = res[0].data;
      const tsWeeklyData        = res[1].data;
      const tsMonthlyData       = res[2].data;
      const companyOverviewData = res[3].data;
      const balanceSheetData    = res[4].data;

      tsFormatter("Daily", tsDailyData, ticker);
      tsFormatter("Weekly", tsWeeklyData, ticker);
      tsFormatter("Monthly", tsMonthlyData, ticker);
      companyOverviewFormatter(companyOverviewData, ticker);
      balanceSheetFormatter(balanceSheetData, ticker);
    })
    .catch((error) => {
      console.log(error);
    });
};
