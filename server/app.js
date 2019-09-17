const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors= require('cors')
const routes = require('./routes/todoRouter')

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(routes)

module.exports = app