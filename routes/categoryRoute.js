const express = require('express')
const router = express.Router()

const dataController = require('../controllers/category/dataController')
const apiController = require('../controllers/category/apiController')
const viewController = require('../controllers/category/viewController')
console.log('dataController', dataController)
console.log('viewController', viewController)

// API Routes
router.get('/api', dataController.getAllCategories, apiController.index)
router.get('/api/:id', dataController.getCategoryById, apiController.show)
router.post('/api', dataController.createCategory, apiController.create)
router.put('/api/:id', dataController.updateCategory, apiController.show)
router.delete('/api/:id', dataController.deleteCategory, apiController.destroy)

// View Routes
router.get('/', dataController.getAllCategories, viewController.showCategories)
router.get('/:id/edit', dataController.getCategoryById, viewController.editCategory)

module.exports = router
