
exports.showCreatedCategory = (req, res) => {
  res.json(res.locals.data.category)
}


exports.showAllCategories = (req, res) => {
  res.json(res.locals.data.categories)
}


exports.showDeletedCategory = (req, res) => {
  res.json(res.locals.data)
}
