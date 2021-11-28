require('dotenv').config();
const { Pool }     = require("pg");
const { dbParams } = require("../params/dbParams");

const pool = new Pool(dbParams);

/**
 * Add A New User
 * @param {*} user
 * @returns Newly Created User
 */
exports.addUser = function(user) {
  return pool
    .query(
      `
      INSERT INTO users (first_name, last_name, username, email, password)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
      `,
      [
        user.first_name,
        user.last_name,
        user.username,
        user.email,
        user.password
      ]
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log("addUser error = " + err.message);
    });
};
