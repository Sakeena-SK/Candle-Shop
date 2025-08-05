const Category = require('../../models/category.js');
const Product = require('../../models/product.js');

const dataController = {}

dataController.index = async (req, res, next) => {
   try {
    const categories = await Category.find({})
    res.locals.data.categories = categories
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
  const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.locals.data.category = updatedCategory
  next()
} else if (user.role === 'customer'){
  res.status(403).json({ error: 'Unauthorized' })
}
    } catch(error) {
        res.status(400).send({ message: error.message })
    }
}

dataController.create = async (req, res, next) => {
    const user = req.user
  try {
    if (user.role === 'owner') {
      const newCategory = await Category.create(req.body)
      next()
    }else if (user.role === 'customer'){
        next()
    }
    } catch(error) {
        res.status(400).send({ message: error.message })
    }
}

dataController.show = async (req,res,next) => {  

    try {
        res.locals.data.category = await Category.findById(req.params.id)
        if (!res.locals.data.category) {
            throw new error(`could not locate a category with the id ${req.params.id}`)
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
    res.locals.data.category = await Category.findByIdAndDelete(req.params.id)
     
    next()
  } else if( user.role === 'customer') {
    res.status(403).json({ error: 'Unauthorized' })
  }
    } catch(error) {
        res.status(400).send({ message: error.message })
    }
}

module.exports = dataController