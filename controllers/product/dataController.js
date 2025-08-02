const Product = require('../../models/product')

exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body)
    res.locals.data = { product }
    next()
  } catch (err) {
    res.status(400).json({ error: 'Failed to create product', details: err })
  }
}

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find().populate('category')
    res.locals.data = { products }
    next()
  } catch (err) {
    res.status(400).json({ error: 'Failed to get products', details: err })
  }
}

exports.getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).populate('category')
    if (!product) {
      return res.status(400).json({ error: 'Product not found' })
    }
    res.locals.data = { product }
    next()
  } catch (err) {
    res.status(400).json({ error: 'Failed to get product', details: err })
  }
}

exports.updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('category')
    if (!updatedProduct) {
      return res.status(400).json({ error: 'Product not found' })
    }
    res.locals.data = { product: updatedProduct }
    next()
  } catch (err) {
    res.status(400).json({ error: 'Failed to update product', details: err })
  }
}

exports.deleteProduct = async (req, res, next) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id)
    if (!deleted) {
      return res.status(400).json({ error: 'Product not found' })
    }
    res.locals.data = { message: 'Product deleted', deleted }
    next()
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete product', details: err })
  }
}
