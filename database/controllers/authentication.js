var passport = require('passport');
var mongoose = require('mongoose');
var userSchema = require('../models/users');


var User = mongoose.model('User',userSchema);

module.exports.register = function (req, res) {
    var user = new User();

    user.name = req.body.name;
    user.email = req.body.email;
    user.regNo = req.body.regNo;

    user.setPassword(req.body.password);
    console.log('user object = ', user);
    
    user.save(function (err) {
        var token;
        token = user.generateJwt();
        res.status(200);
        res.json({
            "token": token
        });
    });
};

module.exports.login = function (req, res) {
    console.log('login method called');   
    
    passport.authenticate('local', function (err, user, info) {
        console.log('login passport called');   
        
        var token;

        // If Passport throws/catches an error
        if (err) {
            res.status(404).json(err);
            return;
        }

        // If a user is found
        if (user) {
            token = user.generateJwt();
            res.status(200);
            res.json({
                "token": token
            });
        } else {
            // If user is not found
            res.status(401).json(info);
        }
    })(req, res);

};