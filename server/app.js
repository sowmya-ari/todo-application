const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors= require('cors')
const controller = require('./controllers/todo')

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/allTasks',controller.getAllTasks)
app.get('/task/active',controller.getActiveTasks)
app.get('/task/completed',controller.getCompletedTasks)
app.post('/newTask',controller.postNewTask)
app.delete('/task/:id',controller.deleteTask)
app.put('/task/:id',controller.editTask)
app.patch('/task/:id',controller.markTaskAsCompleted)

module.exports = app