const express = require('express')

const router = express.Router()

router.use('/articles', require('./article'))

router.use('/categories', require('./category'))

router.use('/tags', require('./tag'))

module.exports = router