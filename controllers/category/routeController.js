const express = require('express')
const router = express.Router()
const categoryData = require('./dataController')
const categoryViews = require('./viewController')


router.get('/', categoryViews.showCategories)


router.post('/', categoryData.createCategory, categoryViews.redirectToCategories)

router.put('/:id', categoryData.updateCategory, categoryViews.redirectToCategories)

router.delete('/:id', categoryData.deleteCategory, categoryViews.redirectToCategories)

router.get('/:id/edit', categoryData.getCategoryById, categoryViews.editCategory)

module.exports = router
