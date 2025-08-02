exports.index = (req, res) => {
  res.json(res.locals.data.categories)
}

exports.show = (req, res) => {
  res.json(res.locals.data.category)
}

exports.create = (req, res) => {
  res.status(201).json(res.locals.data.category)
}

exports.destroy = (req, res) => {
  res.json({ message: 'Category deleted', ...res.locals.data })
}
