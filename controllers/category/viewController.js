exports.showCategories = (req, res, next) => {
  const categories = res.locals.data.categories || []
  res.render('category/index', { categories })
}

exports.redirectToCategories = (req, res, next) => {
  res.redirect('/category')
}

exports.editCategory = (req, res, next) => {
  const category = res.locals.data.category
  if (!category) {
    return res.status(400).send('Category not found')
  }
  res.render('category/edit', { category })
}
