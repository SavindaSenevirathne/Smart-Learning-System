const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sml',{ useNewUrlParser: true });

mongoose.connection.once('open', function(){
    console.log('Successfully connected to the database');
}).on('error', function(error){
    console.log('Error occured! ' + error);
});

module.exports = mongoose;