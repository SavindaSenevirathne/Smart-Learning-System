const mongoose = require('mongoose');

//subject model
var subjectSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true 
    },
    notice:[{
        content: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now
        }
    }]
});

module.exports = subjectSchema;