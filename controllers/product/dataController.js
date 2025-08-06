const Product = require('../../models/product.js');
const Category = require('../../models/category.js')

const dataController = {}

dataController.index = async (req, res, next) => {
   try {
    const Products = await Product.find({})
    res.locals.data.products = Products
    next()
   } catch(error) {
    res.status(400).send({ message: error.message })
  }
}

dataController.categoryProducts = async (req, res, next) => {
   try {
    const products = await Product.find({category: req.params.id})
    res.locals.data.products = products
    next()
   } catch(error) {
    res.status(400).send({ message: error.message })
  }
}

dataController.update = async (req, res, next) => {
  const user = req.user
  try {
if (user.role === 'owner') {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.locals.data.Product = updatedProduct
  next()
} else if(user.role === 'customer') {
  res.status(403).json({ error: 'Unauthorized' })
}
    } catch(error) {
        res.status(400).send({ message: error.message })
    }
}

dataController.create = async (req, res, next) => {
  
  const user = req.user;
  try {
    if (user.role === 'owner') {
      const category = await Category.findById(req.params.id)
      req.body.category = category._id
      const newProduct = await Product.create(req.body);
      // res.locals.data = { product: newProduct }; // ضروري علشان توصل للـ apiController
      next();
    } else if (user.role === 'customer') {
      return res.status(403).json({ error: 'Unauthorized' }); // لازم ترجع الرد وتوقف
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

dataController.show = async (req,res,next) => {
    try {
        res.locals.data.product = await Product.findById(req.params.id)
        if (!res.locals.data.product) {
            throw new error(`could not locate a product with the id ${req.params.id}`)
        }
        next()
    } catch(error) {
        res.status(400).send({ message: error.message })
    }
}

dataController.destroy = async (req, res, next) => {
    const user = req.user
  try {
    if (user.role === 'owner') {
    res.locals.data.product = await Product.findByIdAndDelete(req.params.id)
     
    next()
  } else if (user.role === 'customer'){
    res.status(403).json({ error: 'Unauthorized' })
  }
    } catch(error) {
        res.status(400).send({ message: error.message })
    }
}

module.exports = dataController