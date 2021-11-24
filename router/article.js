const express = require('express')
const request = require('../request')

const articleRouter = express.Router()

articleRouter.post('/index_list', async (req, res) => {
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

articleRouter.get('/detail', async (req, res) => {
  const data = req.query
  const options = {
    url: 'https://api.juejin.cn/content_api/v1/article/detail',
    method: 'POST',
    body: {
      article_id: data.article_id
    }
  }
  const { body } = await request(options)
  res.send(body)
})

articleRouter.post('/related_entry', async (req, res) => {
  const data = req.body
  const options = {
    url: 'https://api.juejin.cn/recommend_api/v1/article/recommend_article_detail_feed',
    method: 'POST',
    body: { 
      cursor: '0',
      id_type: 2,
      item_id: data.item_id,
      tag_ids: data.tag_ids,
      user_id: data.user_id
    }
  }
  const { body } = await request(options)
  res.send(body)
})

articleRouter.post('/recommend_entry_by_tag_ids', async (req, res) => {
  const data = req.body
  const options = {
    url: 'https://api.juejin.cn/recommend_api/v1/article/recommend_tag_feed',
    method: 'POST',
    body: { 
      cursor: data.cursor || '',
      id_type: 2,
      item_id: data.item_id,
      sort_type: data.sort_type,
      tag_ids: data.tag_ids
    }
  }
  const { body } = await request(options)
  res.send(body)
})

articleRouter.get('/search', async (req, res) => {
  const data = req.query
  const options = {
    url: 'https://api.juejin.cn/search_api/v1/search',
    method: 'POST',
    body: { 
      cursor: data.cursor || '0',
      id_type: Number(data.id_type),
      key_word: data.key_word,
      limit: Number(data.limit),
      search_type: Number(data.search_type),
    }
  }
  const { body } = await request(options)
  res.send(body)
})

module.exports = articleRouter