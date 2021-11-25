require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app  = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
