require('dotenv').config();
const { Pool }     = require('pg');
const { dbParams } = require('../params/dbParams');

const pool = new Pool(dbParams);

/**
 * Add A New User
 * @param {*} user
 * @returns Newly Created User
 */
exports.addUser = function(body) {

  console.log('here is the body: ', body)
  return pool
    .query(
      `
      INSERT INTO users (first_name, last_name, username, email, password)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
      `,
      [
        body.first_name,
        body.last_name,
        body.username,
        body.email,
        body.password
      ]
    )
    .then((result) => {
      console.log("Add user was succcessful!");
    })
    .catch((err) => {
      console.log("addUser error = " + err.message);
    });
};
