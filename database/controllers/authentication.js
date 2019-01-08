var passport = require('passport');
var mongoose = require('mongoose');
var userSchema = require('../models/users');


var User = mongoose.model('User',userSchema);

module.exports.register = function (req, res) {
    var user = new User();

    user.fname = req.body.fname;
    user.lname = req.body.lname;
    user.email = req.body.email;
    user.regNo = req.body.regNo;

    user.setPassword(req.body.password);
    console.log('user object = ', user);
    
    user.save(function (err) {
        if(err){
            console.log(err);
            res.status(500).send
        }
        var token;
        token = user.generateJwt();
        res.status(200);
        res.json({
            "token": token
        });
    });
};

module.exports.update = function (req, res) {
    console.log('update method')
    // If no user ID exists in the JWT return a 401
    if (!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        // Otherwise continue
        User.findById(req.payload._id).exec(function (err, user) {
            // console.log(user)
            if(err){
                console.log('No user found with given id')
                res.status(404).json({
                    "message": "No user found with given id"
                });
            }
            // console.log(req.body.email)
            // res.status(200).send
            if(req.body.email){
                user.email = req.body.email;
            }
            if (req.body.fname) {
                user.fname = req.body.fname;
            }
            if (req.body.lname) {
                user.lname = req.body.lname;
            }
            if (req.body.address) {
                user.address = req.body.address;
            }
            if (req.body.profileImg) {
                user.profileImg = req.body.profileImg;
            }            
            user.save(function (err, newUser) {
                if(err){
                    console.log(err)
                    res.status(500).json({
                        "message": err
                    });
                }else{
                    res.status(200).json(newUser);
                }
            })
        });
    }
};

module.exports.login = function (req, res) {
    console.log('login method called');   
    // console.log(user);
    
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