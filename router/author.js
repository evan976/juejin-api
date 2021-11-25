const express = require('express')
const request = require('../request')

const authorRouter = express.Router()

authorRouter.get('/recommend', async (req, res) => {
  const data = req.query
  const options = {
    url: 'https://api.juejin.cn/user_api/v1/author/recommend',
    method: 'GET',
    params: {
      category_id: data.category_id,
      cursor: data.cursor || 0,
      limit: data.limit || 20
    }
  }
  const { body } = await request(options)
  res.send(body)
})

module.exports = authorRouter
