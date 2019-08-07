const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
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
module.exports = app