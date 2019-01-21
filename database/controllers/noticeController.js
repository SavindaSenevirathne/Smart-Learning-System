var mongoose = require('mongoose');
var noticeSchema = require('../models/notice');


var Notice = mongoose.model('Notice', noticeSchema);

module.exports.allNotices = function (req, res) {

     Notice.find({},function (err,data) {
         if(err){
             console.log(err.message);
             res.status(500).json({
                 message: err.message
             })
         }else{
             res.status(200).json(data)
         }
     })   

};

module.exports.newNotice = function (req, res) {
    var notice = new Notice()

    if(req.body.content){
        notice.content = req.body.content
    }
    if (req.body.author) {
        notice.author = req.body.author
    }
    notice.save((err, notice) => {
        if(err){
            console.log(err);
            res.status(500).json({
                messagge: err.message
            })
        }else{
            res.status(200).json(notice)
        }
    })
    
}

module.exports.deleteNotice = function (req, res) {
    id = req.params.id
    Notice.findByIdAndRemove(id, (err, notice) => {
        if(err){
            res.status(500).json({
                message: err.message
            })
        }else{
            res.status(200).json(notice)
        }
    })
}