require('dotenv').config();
const fs     = require('fs');
const Client = require('pg-native');

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const DB_PORT = process.env.DB_PORT;
const client = new Client();

// PG Connection Setup
const connectionString = `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?sslmode=disable`;

// Load Schema Files From db/schema
const runSchemaFiles = function() {
  console.log(`-> Loading Schema Files ...`);
  const schemaFilenames = fs.readdirSync('./db/schema');

  for (const fn of schemaFilenames) {
    const sql = fs.readFileSync(`./db/schema/${fn}`, 'utf8');
    console.log(`\t-> Running ${fn}`);
    client.querySync(sql);
  }
};

// Load Seed Files From db/seeds
const runSeedFiles = function() {
  console.log(`-> Loading Seeds ...`);
  const schemaFilenames = fs.readdirSync('./db/seeds');

  for (const fn of schemaFilenames) {
    const sql = fs.readFileSync(`./db/seeds/${fn}`, 'utf8');
    console.log(`\t-> Running ${fn}`);
    client.querySync(sql);
  }
};

// Execute Reset
try {
  console.log(`-> Connecting to PG using ${connectionString} ...`);
  client.connectSync(connectionString);
  runSchemaFiles();
  runSeedFiles();
  console.log("Done!");
  client.end();
} catch (err) {
  console.error(err);
  client.end();
}
