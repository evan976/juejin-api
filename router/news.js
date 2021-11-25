const express = require('express')
const request = require('../request')

const newsRouter = express.Router()

newsRouter.post('/list', async (req, res) => {
  const data = req.body
  const options = {
    url: 'https://api.juejin.cn/recommend_api/v1/news/list',
    method: 'POST',
    body: {
      cursor: data.cursor || '',
      limit: data.limit || 20,
      recommend_mode: data.recommend_mode || 1,
      sort_type: data.sort_type || 600
    }
  }
  const { body } =await request(options)
  res.send(body)
})

module.exports = newsRouter
