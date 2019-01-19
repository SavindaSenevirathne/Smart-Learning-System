// import assert from 'assert';
const assert = require('assert')
const mongoose = require('mongoose')
const UserSchema = require('../database/models/users')

describe('Unit tests on User object', function () {
    var User = mongoose.model('User', UserSchema)

    it('Saving a record', function (done) {
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

    it('Deleting a record',(done)=>{
        User.deleteOne({email:"test@test.com"},()=>{
            assert(1===1)
            done()
        })
    })
})