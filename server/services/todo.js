const models = require('../models/index');

const getAllTasks = async function(){
    try{
        var tasks= await models.Todo.findAll()
        return tasks;
    }
    catch (error){
        throw Error('database error')
    }
}
const getActiveTasks= async function(){
   try{
       var tasks= await models.Todo.findAll({
            where: {
              status: 'active'
            }
        })
        return tasks;
    }
    catch (error){
        throw Error('database error')
    }
}
const getCompletedTasks= async function(){
    try{
        var tasks= await models.Todo.findAll({
            where: {
               status: 'completed'
            }
        })
        return tasks;
    }
    catch (error){
        throw Error('database error')
    }
}
const postNewTask = async function(task,status){
   try{
     var result=await models.Todo.create({
        task: task,
        status: status
     })
     return result
    }
    catch (error){
     throw Error('database error')
    }
}

const editTask = async function(id,task){
    try{
      var result=await models.Todo.update(
        {
        task : task
        },
        {
        where: {id :id}
        }
      )
      return result
    }
    catch (error){
      throw Error('database error')
    }
}
const markTaskAsCompleted = async function(id,status){
    try{
     var result=await models.Todo.update(
        {
         status: status
        }, 
        {
        where: {id: id}
        })
     return result
    }
    catch (error){
        throw Error('database error')
    }
}
const deleteTask = async function(id) {
   try{
    var result=await models.Todo.destroy({
        where: {
            id: id
        }
    })
    return result
    }
    catch (error){
        throw Error('database error')
    }
}
   
module.exports = {
    getAllTasks,
    getActiveTasks,
    getCompletedTasks,
    postNewTask,
    editTask,
    markTaskAsCompleted,
    deleteTask
}