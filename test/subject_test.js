const assert = require('assert')
const mongoose = require('mongoose')
const SubjectSchema = require('../database/models/subjects')

describe('Unit tests on Subject object', function () {

    var Subject = mongoose.model('Subject', SubjectSchema)

    it('Saving a new subject', function (done) {
        var subject = new Subject({
            code: 'CO324',
            name: 'Web design'
        })
        subject.save(() => {
            assert(subject.isNew === false)
            done()
        })
    })

    it('Adding a subject notice to previously added subject', function (done) {
        Subject.findOne({ code: "CO324" }, function (err, subject) {           
                            
            subject.notice.push({ content: 'No lectures today', author: 'Mr. Marikkar' })            

            subject.save(function (err) {
                if (err) {
                    assert(false)
                    done()
                } else {
                    assert(true)
                    done()
                }
            });
        })
    })

    it('Deleting a subject', (done) => {
        Subject.deleteOne({ code: "CO324" }, (err) => {
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