var express = require('express');
var router = express.Router();
const controller = require('../controllers/todo')

router.get('/todos',controller.getAllTasks)
router.get('/todos/active',controller.getActiveTasks)
router.get('/todos/completed',controller.getCompletedTasks)
router.post('/todo',controller.postNewTask)
router.delete('/todo/:id',controller.deleteTask)
router.put('/todo/:id',controller.editTask)
router.patch('/todo/:id',controller.markTaskAsCompleted)

module.exports = router;