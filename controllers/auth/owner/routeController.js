const express = require('express')
const router = express.Router()

const dataController = require('./dataController')
const apiController = require('./apiController')

router.post('/login', dataController.loginOwner, apiController.apiAuth)

module.exports = router
