
const express = require('express')
const router = express.Router()
const {
    createSlider,
    returnSlider,
    returnSingleSlide,
    updateSlider,
    deleteSlider
} = require('../controller/slider')


router.post('/',createSlider);

router.get('/',returnSlider)

router.get('/:sliderId',returnSingleSlide)

router.patch('/:silderId',updateSlider)

router.delete('/:sliderId',deleteSlider)

module.exports = router;