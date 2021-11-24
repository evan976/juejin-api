const express = require('express')
const request = require('../request')

const categoryRouter = express.Router()

categoryRouter.get('/list', async (req, res) => {
  const data = req.query
  const options = {
    url: 'https://api.juejin.cn/tag_api/v1/query_category_briefs',
    method: 'GET',
    params: {
      show_type: data.show_type
    }
  }
  const { body } = await request(options)
  res.send(body)
})

categoryRouter.post('/tags', async (req, res) => {
  const data = req.body
  const options = {
    url: 'https://api.juejin.cn/recommend_api/v1/tag/recommend_tag_list',
    method: 'POST',
    body: {
      cate_id: data.cate_id
    }
  }
  const { body } = await request(options)
  res.send(body)
})

module.exports = categoryRouter