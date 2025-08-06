const express = require('express');
const router = express.Router();
const viewController = require('./viewController.js')
const dataController = require('./dataController.js')

router.get('/', dataController.categoryIndex, dataController.productIndex, viewController.home)

module.exports = router