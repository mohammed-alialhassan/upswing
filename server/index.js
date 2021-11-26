require('dotenv').config();
const express    = require('express');
const bodyParser = require('body-parser');

const app  = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({extended: true}));

/// Pages

// Home Page
const homeRoute = require('./routes/pages/home');
app.use('/', homeRoute);

// // Register Page
// const registerRoute = require('./routes/pages/register');
// app.use('/register', registerRoute);

// // Login Page
// const loginRoute = require('./routes/pages/login');
// app.use('/login', loginRoute);

// About Page
const aboutRoute = require('./routes/pages/about');
app.use('/about', aboutRoute);

// Screener Page
const screenerRoute = require('./routes/pages/screener');
app.use('/screener', screenerRoute);

/// API Routes

// // Users API Route
// const usersRoute = require('./routes/api/users');
// app.use('/api/users', usersRoute);

// // Stock Data Collector API Route
// const dataCollectorRoute = require('./routes/api/dataCollector');
// app.use('/api/data-collector', dataCollectorRoute);

// // Daily Time Series API Route
// const tsDailyRoute = require('./routes/api/tsDaily');
// app.use('/api/ts-day', tsDailyRoute);

// // Weekly Time Series API Route
// const tsWeeklyRoute = require('./routes/api/tsWeekly');
// app.use('/api/ts-week', tsWeeklyRoute);

// // Monthly Time Series API Route
// const tsMonthlyRoute = require('./routes/api/tsMonthly');
// app.use('/api/ts-month', tsMonthlyRoute);

// // Company Overview API Route
// const companyOverviewRoute = require('./routes/api/companyOverview');
// app.use('/api/company-overview', companyOverviewRoute);

// // Balance Sheet API Route
// const balanceSheetRoute = require('./routes/api/balanceSheet');
// app.use('/api/balance-sheet', balanceSheetRoute);

/// Server Listener

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
