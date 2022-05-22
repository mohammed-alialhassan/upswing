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

  return pool
    .query(
      `
      INSERT INTO users (first_name, last_name, phone_number, username, email, password)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
      `,
      [
        body.first_name,
        body.last_name,
        body.phone_number,
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

/**
 * Update a user's account settings
 */
 exports.editUser = function(values) {
    
  return pool
   .query(
        `
      UPDATE users 
      
      SET id = $1, first_name = $2, last_name = $3, phone_number = $4, username = $5,
      email = $6

      WHERE id = ${values.id}
    `,
    [
      values.id,
      values.first_name,
      values.last_name,
      values.phone_number,
      values.username,
      values.email
    ]
    ).then((res) => {
     console.log('Account settings has been updated');
     }).catch((err) => {
      console.log('Unfortunately unable to update settings... ', err.message);
    });
};
