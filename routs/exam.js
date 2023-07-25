const express = require('express')
const router = express.Router()
const {
    createExam,
    returnAllExam,
    returnSingleExam,
    editExam,
    deleteExam
    
} = require('../controller/exam')

router.post('/',createExam)

router.get('/',returnAllExam)

router.get('/:examId',returnSingleExam)

router.patch('/:examId',editExam)

router.delete('/:examId',deleteExam)

module.exports = router