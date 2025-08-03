const express = require('express')
const router = express.Router()

const viewController = require('../controllers/auth/customer/viewController')
const routeController = require('../controllers/auth/customer/routeController')

router.get('/register', viewController.showRegister)
router.get('/login', viewController.showLogin)
router.post('/register', routeController)
router.post('/login', routeController)

module.exports = router
