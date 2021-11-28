require('dotenv').config();
const express    = require('express');
const bodyParser = require('body-parser');

const app  = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({extended: true}));

/// Pages

// Home Page
const homeRoute = require('../routes/pages/home');
app.use('/', homeRoute);

// About Page
const aboutRoute = require('../routes/pages/about');
app.use('/about', aboutRoute);

// Screener Page
const screenerRoute = require('../routes/pages/screener');
app.use('/screener', screenerRoute);

/// API Routes

// // Users API Route
// const usersRoute = require('../routes/api/users');
// app.use('/api/users', usersRoute);

// Daily Time Series API Route
const tsDataRoute = require('../routes/api/tsData');
app.use('/api/ts-data', tsDataRoute);

// // Company Overview API Route
// const companyOverviewRoute = require('../routes/api/companyOverview');
// app.use('/api/company-overview', companyOverviewRoute);

// // Balance Sheet API Route
// const balanceSheetRoute = require('../routes/api/balanceSheet');
// app.use('/api/balance-sheet', balanceSheetRoute);

/// Tasks

// Stock Data Collector Route
const dataCollectorRoute = require('../routes/tasks/dataCollector');
app.use('/api/data-collector', dataCollectorRoute);

// // Register Page
// const registerRoute = require('../routes/tasks/register');
// app.use('/register', registerRoute);

// // Login Page
// const loginRoute = require('../routes/tasks/login');
// app.use('/login', loginRoute);

/// Server Listener

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
