let db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  // check if email already exists

  // save user to the database
  db.saveUser({
    email: email,
    password: password
  })
  // send the welcome email

}