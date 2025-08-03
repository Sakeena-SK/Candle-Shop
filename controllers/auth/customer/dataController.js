const User = require('../../../models/user')
const bcrypt = require('bcrypt')

exports.registerCustomer = async (req, res, next) => {
  try {
    const { name, email, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)
    const customer = await User.create({
      name,
      email,
      password: hashedPassword,
      role: 'customer'
    })

    res.locals.user = customer
    next()
  } catch (err) {
    res.status(400).json({ error: 'Registration failed' })
  }
}

exports.loginCustomer = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const customer = await User.findOne({ email, role: 'customer' })

    if (!customer) {
      return res.status(401).json({ error: 'Customer not found' })
    }

    const passwordMatch = await bcrypt.compare(password, customer.password)
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' })
    }

    res.locals.user = customer
    next()
  } catch (err) {
    res.status(500).json({ error: 'Login failed' })
  }
}
