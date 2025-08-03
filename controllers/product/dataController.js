const Product = require('../../models/product')

exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body)
    res.locals.data = { product }
    next()
  } catch(error){
    res.status(400).json({message: error.message})
  }
}

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find().populate('category')
    res.locals.data = { products }
    next()
  } catch(error){
    res.status(400).json({message: error.message})
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
  } catch(error){
    res.status(400).json({message: error.message})
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
  } catch(error){
    res.status(400).json({message: error.message})
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
  } catch(error){
    res.status(400).json({message: error.message})
  }
}
