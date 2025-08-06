const Category = require('../../models/category.js')
const Product = require('../../models/product.js');

const dataController = {}

dataController.categoryIndex = async (req, res, next) => {
   try {
    const categories = await Category.find({})
    res.locals.data.categories = categories
    next()
   } catch(error) {
    res.status(400).send({ message: error.message })
  }
}


dataController.productIndex = async (req, res, next) => {
   try {
    const products = await Product.find({})
    res.locals.data.products = products
    next()
   } catch(error) {
    res.status(400).send({ message: error.message })
  }
}



module.exports = dataController