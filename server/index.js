require('dotenv').config();
const express    = require('express');
const bodyParser = require('body-parser');

const app  = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({extended: true}));

/// Pages

// Landing Page
const landingRoute = require('../routes/pages/landing');
app.use('/', landingRoute);

// Dashboard Page
const dashboardRoute = require('../routes/pages/dashboard');
app.use('/dashboard', dashboardRoute);

// About Page
const aboutRoute = require('../routes/pages/about');
app.use('/about', aboutRoute);

// Screener Page
const screenerRoute = require('../routes/pages/screener');
app.use('/screener', screenerRoute);

/// API Routes

// Users API Route
const usersRoute = require('../routes/api/users');
app.use('/api/users', usersRoute);

// Stock Data API Route
const stockDataRoute = require('../routes/api/stockData');
app.use('/api/stock-data', stockDataRoute);

/// Tasks

// Stock Data Collector Route
const stockDataCollectorRoute = require('../routes/tasks/stockDataCollector');
app.use('/stock-data-collector', stockDataCollectorRoute);

// Register Route
const registerRoute = require('../routes/tasks/register');
app.use('/register', registerRoute);

// // Login Route
// const loginRoute = require('../routes/tasks/login');
// app.use('/login', loginRoute);

// // Logout Route
// const logoutRoute = require('../routes/tasks/logout');
// app.use('/logout', logoutRoute);

/// Server Listener

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
