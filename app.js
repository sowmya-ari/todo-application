const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors= require('cors')
const routes = require('./routes')

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/allTasks',routes)
app.get('/allTasks/active',routes)
app.get('/allTasks/completed',routes)
app.post('/allTasks',routes)
app.delete('/allTasks/:id',routes)
app.put('/allTasks/:id',routes)
app.patch('/allTasks/:id',routes)
app.use(routes)

module.exports = app