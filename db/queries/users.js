require('dotenv').config();
const { Pool }     = require('pg');
const { dbParams } = require('../params/dbParams');
const bcrypt       = require('bcrypt');

const pool = new Pool(dbParams);

/**
 * Add A New User
 * @param {*} user
 * @returns Newly Created User
 */
exports.addUser = function(body) {
  return pool
    .query(
      `
      INSERT INTO users (first_name, last_name, username, email, password)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
      `,
      [
        body.firstName,
        body.lastName,
        body.username,
        body.email,
        body.password
      ]
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log("addUser error = " + err.message);
    });
};
