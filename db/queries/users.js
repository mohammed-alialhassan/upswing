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
  const password = body.password;
  const hashedPassword = bcrypt.hashSync(password, 8);

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
        hashedPassword
      ]
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log("addUser error = " + err.message);
    });
};

/**
 * Get a user by their email address
 * @param {*} email
 * @returns found user or undefined
 */
exports.getUserWithEmail = function(email) {
  return pool
    .query(
      `
      SELECT *
      FROM users
      WHERE email = $1
      `, [email]
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

/**
 * Get a user by their username
 * @param {*} username
 * @returns found user or undefined
 */
exports.getUserWithUsername = function(username) {
  return pool.query(`
    SELECT *
    FROM users
    WHERE username = $1
  `, [username])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};
