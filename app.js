const express = require('express')
const morgan = require('morgan')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')

const authCustomerRoute = require('./routes/authCustomerRoute')
const authOwnerRoute = require('./routes/authOwnerRoute')
const categoryRoutes = require('./routes/categoryRoute') // ← ✅ الاسم متطابق
const productRoutes = require('./routes/productRoute')
const cartRoutes = require('./routes/cartRoute')

const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(morgan('dev'))

app.use((req, res, next) => {
  res.locals.data = {}
  next()
})

// Routes
app.use('/customer', authCustomerRoute)
app.use('/owner', authOwnerRoute)
app.use('/category', categoryRoutes) // ← ✅ مطابق مع المتغير
app.use('/product', productRoutes)
app.use('/cart', cartRoutes)

module.exports = app
