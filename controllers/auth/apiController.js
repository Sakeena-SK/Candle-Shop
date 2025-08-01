exports.apiAuth = (req, res) => {
  res.json({ user: req.user, token: res.locals.data.token })
}

exports.apiDelete = async (req, res) => {
  res.json({ message: 'User deleted successfully' })
}
