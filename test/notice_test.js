const assert = require('assert')
const mongoose = require('mongoose')
const NoticeSchema = require('../database/models/notice')

describe('Unit tests on Notice object', function () {
    var Notice = mongoose.model('Notice', NoticeSchema)

    it('Saving a new notice', function (done) {
        var notice = new Notice({
            content: 'No exams this semester',
            author: 'Dean',
            
        })
        notice.save(function () {
            assert(notice.isNew === false)
            done()
        })
    })

    it('Updating a notice', (done) => {
        Notice.findOne({author: 'Dean'}, (err, notice) => {   
                     
            notice.author = 'Dean of faculty of Engineering'
            notice.save(() => {
                assert(true)
                done()
            })
            
        })
    })

    it('Deleting a notice', (done) => {
        Notice.deleteOne({ author: "Dean of faculty of Engineering" }, (err) => {
            if (!err) {
                assert(true)
                done()
            } else {
                assert(false)
                done()
            }
        })
    })
})