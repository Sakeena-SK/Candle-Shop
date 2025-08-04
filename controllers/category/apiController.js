const Category = require('../../models/category.js')

// API category controllers - returns JSON responses
const apiController = {
  // Get all category for authenticated user
  index(req, res) {
    res.json(res.locals.data.Category)
  },

  // Get single category
  show(req, res) {
    res.json(res.locals.data.Category)
  },

  // Create new Category
  create(req, res) {
    res.status(201).json(res.locals.data.Category)
  },

 

  // Delete Category
  destroy(req, res) {
    res.status(200).json({ message: 'Categories successfully deleted' })
  }
}

module.exports = apiController 