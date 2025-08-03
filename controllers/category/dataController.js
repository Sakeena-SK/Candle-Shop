const Category = require('../../models/category')

exports.createCategory = async (req, res, next) => {
  try {
    const category = await Category.create(req.body)
    res.locals.data = { category }
    next()
  } catch(error){
    res.status(400).json({message: error.message})
  }
}

exports.getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find()
    res.locals.data = { categories }
    next()
  } catch(error){
    res.status(400).json({message: error.message})
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
  } catch(error){
    res.status(400).json({message: error.message})
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
  } catch(error){
    res.status(400).json({message: error.message})
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
  } catch(error){
    res.status(400).json({message: error.message})
  }
}
