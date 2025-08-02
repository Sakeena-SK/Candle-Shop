exports.showCreatedProduct = (req, res) => {
  res.json(res.locals.data.product)
}

exports.showAllProducts = (req, res) => {
  res.json(res.locals.data.products)
}

exports.showDeletedProduct = (req, res) => {
  res.json(res.locals.data)
}
