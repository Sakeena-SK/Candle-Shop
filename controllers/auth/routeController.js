const express = require('express')
const router = express.Router()
const userData = require('./dataController')
const userViews = require('./viewController')

router.post('/', userData.createUser, userViews.redirectToLogin)
router.get('/', userViews.signUp)

router.post('/login', userData.loginUser, userViews.apiAuth)
router.get('/login', userViews.signIn)

router.put('/:id', userData.updateUser)
router.delete('/:id', userData.auth, userData.deleteUser)

module.exports = router
