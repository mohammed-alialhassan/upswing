require('dotenv').config();
const fs     = require('fs');
const Client = require('pg-native');
const { dbParams } = require('../db/params/dbParams');

const client  = new Client();

// PG Connection Setup
const connectionString = `postgresql://${dbParams.user}:${dbParams.password}@${dbParams.host}:${dbParams.port}/${dbParams.database}?sslmode=disable`;

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
