const assert = require('assert')
const mongoose = require('mongoose')
const UserSchema = require('../database/models/users')

describe('Unit tests on User object', function () {
    var User = mongoose.model('User', UserSchema)

    it('Saving a new user', function (done) {
        var user = new User({
            email: 'test@test.com',
            fname: 'test',
            lname: 'test',
            regNo: 'E/xx/xxx',
            role: 'student'
        })
        user.setPassword('abc123')
        user.save(function () {
            assert(user.isNew === false)
            done()
        })
    })

    it('Updating a user', (done) => {
        User.findOne({ regNo: 'E/xx/xxx' }, (err, user) => {

            user.address = 'Kandy'
            user.save(() => {
                assert(true)
                done()
            })

        })
    })

    it('Deleting a user',(done)=>{
        User.deleteOne({email:"test@test.com"},(err)=>{
            if(!err){
                assert(true)
                done()
            }else{
                assert(false)
                done()
            }
        })
    })
})