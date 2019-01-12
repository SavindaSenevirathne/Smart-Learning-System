const mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');// for jwt tokens
//user model
var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  regNo:{
    type: String,
    required: true
  },
  role:{
    type: String,
    required: true
  },
  address:{
    type: String,
    required: false
  },
  profileImg:{
    type: String,
    default: 'assets/img/faces/default.png',
    required: false
  },
  hash: String,
  salt: String
});


//Setting the password
userSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

// Validating password
userSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

// JWT token
userSchema.methods.generateJwt = function () {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);// setting valid period of 1 week

  return jwt.sign({
    _id: this._id,
    email: this.email,
    fname: this.fname,
    lname: this.lname,
    regNo: this.regNo,
    role: this.role,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

module.exports = userSchema;