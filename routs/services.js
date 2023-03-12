const express = require('express')
const router = express.Router()

const {

    createServices,
    updateServices,
    getServices,
    getSingleSerivice,
    deleteService
} = require('../controller/services')

router.post('/',createServices)

router.get('/:servicesId',getSingleSerivice)

router.get('/',getServices)

router.patch('/:servicesId',updateServices)

router.delete('/:servicesId',deleteService)


module.exports = router;
