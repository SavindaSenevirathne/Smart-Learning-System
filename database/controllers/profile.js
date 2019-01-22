var mongoose = require('mongoose');
var userSchema = require('../models/users');


var User = mongoose.model('User', userSchema);

module.exports.profileRead = function (req, res) {

    // If no user ID exists in the JWT return a 401
    if (!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        // Otherwise continue
        User
            .findById(req.payload._id)
            .exec(function (err, user) {
                // console.log(user)
                res.status(200).json(user);
            });
        
    }

};

module.exports.usersOnType = function (req, res) {
    type = req.params.type

    User.find({ role: type }, (err, users) => {
        if(err){
            res.status(500).json({
                message: err.message
            })
        }else{
            res.status(200).json(users)
        }
    })
}