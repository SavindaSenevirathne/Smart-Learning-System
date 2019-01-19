const mongoose = require('mongoose');


before((done)=>{
    mongoose.connect('mongodb://localhost/sml_test', { useNewUrlParser: true, useCreateIndex: true });

    mongoose.connection.once('open', function () {
        console.log('Successfully connected to the database');
        done()
    }).on('error', function (error) {
        console.log('Error occured! ' + error);
    });  
})

