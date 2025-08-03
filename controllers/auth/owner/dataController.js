const User = require('../../../models/user')
const bcrypt = require('bcrypt')

exports.loginOwner = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const foundOwner = await User.findOne({ email, role: 'owner' })

    if (!foundOwner) {
      return res.status(401).json({ error: 'Owner not found or not authorized' })
    }

    const passwordMatch = await bcrypt.compare(password, foundOwner.password)
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' })
    }

    res.locals.user = foundOwner
    next()
  } catch (err) {
    res.status(500).json({ error: 'Owner login failed' })
  }
}
