const express = require('express')

const router = express.Router()

router.use('/articles', require('./article'))

module.exports = router