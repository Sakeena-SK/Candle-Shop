const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  owner: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product