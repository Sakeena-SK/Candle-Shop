const express = require('express')
const router = express.Router()

const dataController = require('./dataController')
const apiController = require('./apiController')


router.post('/register', dataController.registerCustomer, apiController.apiAuth)


router.post('/login', dataController.loginCustomer, apiController.apiAuth)

module.exports = router
