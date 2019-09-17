var services = require('../services/todo')

const getAllTasks =async function(req,res){
  try{
    const result=await services.getAllTasks();
    return res.status( 200 ).json(result)
  }
  catch (error){
    return res.status( 500 ).json(error)
  }
}

const getCompletedTasks=async function(req,res){
    try{
        const result=await services.getCompletedTasks();
        return res.status(200).json(result)
    }
    catch (error){
        return res.status(500).json(error)
    }
}

const getActiveTasks= async function(req,res){
    try{
        const result=await services.getActiveTasks();
        return res.status(200).json(result)
    }
    catch (error){
        return res.status(500).json(error)
    }
}

const postNewTask=async function(req,res){
   const task = req.body.task
   const status= req.body.status
   if (task === "") {
       console.log(" task can't be blank")
   }
   else{
    try{
        const result=await services.postNewTask(task,status)
        return res.status(200).json(result)
    }
    catch (error){
        return res.status( 500 ).json(error)
    }
  }
}
  
const deleteTask=async function(req,res){
    var id = req.params.id
    try{
        const result=await services.deleteTask(id);
        if(result == 0){
            return res.status(404).send('page not found')
        } 
        else{
            return res.status(200).send('task is deleted')
        }
    }
    catch (error){
        return res.status(500).json(error)
    }
}

const editTask=async function(req,res){
    var id = req.params.id
    var task= req.body.task
    try{
      const result=await services.editTask(id,task);
      if(result == 0){
        return res.status(404).send('page not found')
      } 
      else{
        return res.status(200).send('task is updated')
      }
    }
    catch (error){
        return res.status( 500 ).json(error)
    }
}

const markTaskAsCompleted=async function(req,res){
    var id = req.params.id
    var status=req.body.status
    try{
      const result=await services.markTaskAsCompleted(id,status);
      if(result == 0){
        return res.status(404).send('page not found')
      } 
      else{
        return res.status(200).send('status is marked as completed')
      }
    }
    catch (error){
        return res.status( 500 ).json(error)
    }
}
       
module.exports = {
    getActiveTasks,
    getAllTasks,
    getCompletedTasks,
    postNewTask,
    editTask,
    markTaskAsCompleted,
    deleteTask
}
     