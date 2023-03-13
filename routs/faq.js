const express = require('express')
const router = express.Router()
const {
    createFaq,
    returnFaq,
    returnSingleFaq,
    updateFaq,
    deleteFaq

}= require('../controller/faq')

router.post('/',createFaq)

router.get('/',returnFaq)

router.get('/:faqId',returnSingleFaq)

router.patch('/:faqId',updateFaq)

router.delete('/:faqId',deleteFaq)


module.exports=router