require('dotenv').config()
const app = require('./app')
const db = require('./models/db')
const PORT = process.env.PORT || 3000

// عند الاتصال الناجح بقاعدة البيانات
db.once('open', () => {
  console.log(' connected to MongoDB')
})

// عند حدوث خطأ في الاتصال
db.on('error', (error) => {
  console.error(' MongoDB connection error:', error.message)
})

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`)
})
