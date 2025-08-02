const express = require('express')
const morgan = require('morgan')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const authRoutes = require('./routes/authRoute')
const categoryRoutes = require('./routes/categoryRoute')
const productRoutes = require('./routes/productRoute')
const cartRoutes = require('./routes/cartRoute')

const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})
app.use(express.static('public'))
app.use(morgan('dev'))


app.use('/auth', authRoutes)
app.use('/category', categoryRoutes)
app.use('/product', productRoutes)
app.use('/cart', cartRoutes)

module.exports = app
