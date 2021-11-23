const http = require('http')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', require('./router'))

http.createServer(app).listen(8000, () => {
  console.log('Server is running...')
})
