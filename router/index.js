const express = require('express')

const router = express.Router()

router.use('/articles', require('./article'))

router.use('/categories', require('./category'))

router.use('/tags', require('./tag'))

router.use('/author', require('./author'))

router.use('/news', require('./news'))

module.exports = router