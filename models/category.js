const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true},
    color: {type: String, required: true},
    readyToEat: Boolean
})

module.exports = mongoose.model('Category',categorySchema)