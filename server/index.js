require('dotenv').config();
const express    = require('express');
const cors       = require('cors');
const helmet     = require("helmet");
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

const app  = express();
const PORT = process.env.SERVER_PORT;

app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(helmet());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json()); 
app.use(cookieSession({
  name: 'UpSwing',
  keys: ['upswing is the way and key']
}));

/// Pages

// Single Page App Route
const landingRoute = require('../routes/pages/landing');
app.use('/', landingRoute);

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

// Login Route
const loginRoute = require('../routes/tasks/login');
app.use('/login', loginRoute);

// Logout Route 
const logoutRoute = require('../routes/tasks/logout');
app.use('/logout', logoutRoute);

/// Server Listener

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
