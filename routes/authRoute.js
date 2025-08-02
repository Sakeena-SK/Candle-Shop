const express = require('express')
const router = express.Router()

const authData = require('../controllers/auth/dataController')
const authAPI = require('../controllers/auth/apiController')

// Sign Up & Login
router.post('/users', authData.createUser, authAPI.show)
router.post('/users/login', authData.loginUser, authAPI.show)

// User profile operations
router.get('/users/profile', authData.auth, authData.getProfile, authAPI.show)
router.put('/users/:id', authData.auth, authData.updateUser, authAPI.show)
router.delete('/users/:id', authData.auth, authData.deleteUser, authAPI.show)

module.exports = router
