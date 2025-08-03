const express = require('express')
const router = express.Router()

const viewController = require('../controllers/auth/owner/viewController')
const routeController = require('../controllers/auth/owner/routeController')


router.get('/login', viewController.showLogin)


router.post('/login', routeController)

module.exports = router
