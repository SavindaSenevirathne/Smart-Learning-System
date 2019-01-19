var mongoose = require('mongoose');
var subjectSchema = require('../models/subjects');


var Subject = mongoose.model('Subject', subjectSchema);

module.exports.newSubject = function (req, res) {

    var subject = new Subject();

    subject.code = req.body.code;
    subject.name = req.body.name;
    subject.save(function (err) {
        if (err) {
            console.log(err);
            res.status(500).json({
                "message": err.message
            });
        } else {
            res.status(200).json({
                "message": "Success"
            });

        }
    });    
};

module.exports.allSubjects = function (req, res) {

    Subject.find({}).then(function (subjects) {
        
            res.status(200).json(subjects)
        
    })
};

module.exports.oneSubject = function (req, res) {

    code = req.params.id

    Subject.findOne({ code: code }, function (err, subject) {
        if(err){
            res.status(500).json({
                message: "no subject found"
            })
        }
        res.status(200).json(subject)
     });
};

module.exports.oneSubjectNotice = function (req, res) {

    code = req.params.id

    Subject.findOne({ code: code }, function (err, subject) {
        if (err) {
            res.status(500).json({
                message: "no subject found"
            })
        }else{
            if (req.body.content) {
                subject.notice.push({ content: req.body.content, author: req.body.author})
            }
            
            subject.save(function (err) {
                if (err) {
                    console.log(err);
                    res.status(500).json({
                        "message": err.message
                    });
                } else {
                    res.status(200).json(subject)

                }
            });   
        } 
        
    });
};