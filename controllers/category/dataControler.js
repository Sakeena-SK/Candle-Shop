const Category = require('../../models/category')

exports.createCategory = async (req, res, next) => {
  try {
    const category = await Category.create(req.body)
    res.locals.data = { category }
    next()
  } catch (err) {
    res.status(400).json({ error: 'Failed to create category', details: err })
  }
}

exports.getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find()
    res.locals.data = { categories }
    next()
  } catch (err) {
    res.status(400).json({ error: 'Failed to get categories', details: err })
  }
}

exports.getCategoryById = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id)
    if (!category) {
      return res.status(400).json({ error: 'Category not found' })
    }
    res.locals.data = { category }
    next()
  } catch (err) {
    res.status(400).json({ error: 'Failed to get category', details: err })
  }
}

exports.updateCategory = async (req, res, next) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    if (!updatedCategory) {
      return res.status(400).json({ error: 'Category not found' })
    }
    res.locals.data = { category: updatedCategory }
    next()
  } catch (err) {
    res.status(400).json({ error: 'Failed to update category', details: err })
  }
}

exports.deleteCategory = async (req, res, next) => {
  try {
    const deleted = await Category.findByIdAndDelete(req.params.id)
    if (!deleted) {
      return res.status(400).json({ error: 'Category not found' })
    }
    res.locals.data = { message: 'Category deleted', deleted }
    next()
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete category', details: err })
  }
}
