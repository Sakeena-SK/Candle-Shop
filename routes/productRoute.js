const express = require('express')
const router = express.Router()

const productData = require('../controllers/product/dataController')
const productAPI = require('../controllers/product/apiController')

router.get('/products', productData.getAllProducts, productAPI.showAllProducts)
router.get('/products/:id', productData.getProductById, productAPI.showCreatedProduct)
router.post('/products', productData.createProduct, productAPI.showCreatedProduct)
router.put('/products/:id', productData.updateProduct, productAPI.showCreatedProduct)
router.delete('/products/:id', productData.deleteProduct, productAPI.showDeletedProduct)

module.exports = router
