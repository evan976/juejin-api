const express = require('express')
const request = require('../request')

const articleRouter = express.Router()

articleRouter.get('/index_list', async (req, res) => {
  const data = req.body
  const apiName = data.cate_id ? 'recommend_cate_feed' : 'recommend_all_feed'
  const options = {
    url: `https://api.juejin.cn/recommend_api/v1/article/${apiName}`,
    method: 'POST',
    body: { 
      cate_id: data.cate_id || '',
      limit: data.limit || 20, 
      sort_type: Number(data.sort_type) || 200,
      cursor: data.cursor || '0',
      id_type: 2
    }
  }
  const { body } = await request(options)
  res.send(body)
})

// http://localhost:8000/api/v1/articles/detail?article_id=7033585766752223240
articleRouter.get('/detail', async (req, res) => {
  const data = req.query
  const options = {
    url: `https://api.juejin.cn/content_api/v1/article/detail`,
    method: 'POST',
    body: {
      article_id: data.article_id
    }
  }
  const { body } = await request(options)
  res.send(body)
})

module.exports = articleRouter