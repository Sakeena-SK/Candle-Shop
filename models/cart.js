const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, default: 1 },
      note: { type: String, required: true } // ✨ ملاحظة العميل
    }
  ]
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart
