const express = require('express')
const router = express.Router()

const viewController = require('../controllers/auth/viewController')
const routeController = require('../controllers/auth/routeController')


router.get('/login', viewController.showLogin)


router.post('/login', routeController)

module.exports = router
