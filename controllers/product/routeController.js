const express = require('express')
const router = express.Router()

const productData = require('./dataController')
const productAPI = require('./apiController')


router.get('/', productData.getAllProducts, productAPI.showAllProducts)
router.post('/', productData.createProduct, productAPI.showCreatedProduct)
router.get('/:id', productData.getProductById, productAPI.showCreatedProduct)
router.put('/:id', productData.updateProduct, productAPI.showCreatedProduct)
router.delete('/:id', productData.deleteProduct, productAPI.showDeletedProduct)

module.exports = router
