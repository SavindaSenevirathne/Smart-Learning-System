var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');

var Authentication = require('../database/controllers/authentication');
var profileControl = require('../database/controllers/profile');

var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//open routes
router.post('/api/login', Authentication.login);
router.post('/api/register', Authentication.register);


//Secure routes
router.get('/api/profile',auth, profileControl.profileRead);


module.exports = router;
