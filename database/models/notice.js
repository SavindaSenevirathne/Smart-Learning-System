const mongoose = require('mongoose');

//subject model
var noticeSchema = new mongoose.Schema({
  
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
    
});

module.exports = noticeSchema;