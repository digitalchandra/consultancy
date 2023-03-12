const express = require('express')

const router = express.Router()
const {createProduct,
    returnSingleProduct,
    returnAllProduct,
    updateProduct,
    deleteProduct
} = require('../controller/product')

router.get('/:productId',returnSingleProduct)

router.get('/',returnAllProduct)

router.post('/',createProduct)

router.patch('/:productId',updateProduct)

router.delete('/:productId',deleteProduct)

module.exports=router