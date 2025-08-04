const express = require('express')
const router = express.Router()
const userApiController = require('../controllers/auth/apiController')
const categoryAPIController = require('../controllers/category/apiController')
const categoryDataController = require('../controllers/category/dataController')

// User API Routes
router.post('/users', userApiController.createUser)
router.post('/users/login', userApiController.loginUser)
router.get('/users/profile', userApiController.auth, userApiController.getProfile)
router.put('/users/:id', userApiController.auth, userApiController.updateUser)
router.delete('/users/:id', userApiController.auth, userApiController.deleteUser)

// Fruit API Routes
router.get('/category', userApiController.auth, categoryDataController.index, categoryAPIController.index)
router.get('/category/:id', userApiController.auth, categoryDataController.show, categoryAPIController.show)
router.post('/category', userApiController.auth, categoryDataController.create, categoryAPIController.create)
router.put('/category/:id', userApiController.auth, categoryDataController.update, categoryAPIController.show)
router.delete('/category/:id', userApiController.auth, categoryDataController.destroy, categoryAPIController.destroy)

module.exports = router 