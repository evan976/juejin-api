const express = require('express')
const request = require('../request')

const tagRouter = express.Router()

tagRouter.post('/list', async (req, res) => {
  const data = req.body
  const options = {
    url: 'https://api.juejin.cn/tag_api/v1/query_tag_list',
    method: 'POST',
    body: {
      cursor: data.cursor || '40',
      limit: data.limit || 20,
      sort_type: data.sort_type || 1
    }
  }
  const { body } = await request(options)
  res.send(body)
})

tagRouter.post('/detail', async(req, res) => {
  const data = req.body
  const options = {
    url: `https://api.juejin.cn/tag_api/v1/query_tag_detail`,
    method: "POST",
    body: {
      key_word: data.key_word
    }
  };
  const { body } = await request(options)
  res.send(body)
})

module.exports = tagRouter
