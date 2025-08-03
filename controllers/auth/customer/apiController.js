const jwt = require('jsonwebtoken')

exports.apiAuth = (req, res) => {
  const user = res.locals.user

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role
    },
    process.env.JWT_SECRET,
    { expiresIn: '3h' }
  )

  res.locals.data = { token }
  res.status(200).json(res.locals.data)
}
