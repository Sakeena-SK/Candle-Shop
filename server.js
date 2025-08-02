require('dotenv').config()
const app = require('./app')
const db = require('./models/db')
const PORT = process.env.PORT || 3000


db.once('open', () => {
  console.log(' connected to MongoDB')
})


db.on('error', (error) => {
  console.error(' MongoDB connection error:', error.message)
})


app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`)
})
