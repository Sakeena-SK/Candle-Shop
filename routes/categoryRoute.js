const express = require('express')
const router = express.Router()

const authData = require('../controllers/auth/dataController')
const categoryData = require('../controllers/category/dataController')
const categoryAPI = require('../controllers/category/apiController')

// Get all categories
router.get('/categories', categoryData.getAllCategories, categoryAPI.index)

// Get one category by ID
router.get('/categories/:id', categoryData.getCategoryById, categoryAPI.show)

// Create a category (admin only)
router.post('/categories', authData.auth, categoryData.createCategory, categoryAPI.show)

// Update category
router.put('/categories/:id', authData.auth, categoryData.updateCategory, categoryAPI.show)

// Delete category
router.delete('/categories/:id', authData.auth, categoryData.deleteCategory, categoryAPI.show)

module.exports = router
