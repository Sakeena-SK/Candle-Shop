const express = require('express')
const router = express.Router()

const auth = require('../controllers/auth/apiController')
const productData = require('../controllers/product/dataController')
const productAPI = require('../controllers/product/apiController')

// Get all products
router.get('/products', auth.auth, productData.getAllProducts, productAPI.index)

// Get one product by ID
router.get('/products/:id', auth.auth, productData.getProductById, productAPI.show)

// Create a product
router.post('/products', auth.auth, productData.createProduct, productAPI.show)

// Update a product
router.put('/products/:id', auth.auth, productData.updateProduct, productAPI.show)

// Delete a product
router.delete('/products/:id', auth.auth, productData.deleteProduct, productAPI.destroy)

module.exports = router
