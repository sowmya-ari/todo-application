const express = require( 'express' )
const router  = express.Router()
const model = require('./models/index')

router.get( '/allTasks', ( req, res ) => {
    model.findAll()
    .then((result) => {
      res.status( 200 ).json(result)
    })
    .catch(error => {
      res.status( 500 ).send(error)
    })
})

router.get( '/allTasks/completed', ( req, res ) => {
    model.todolist.findAll({
      where:{
        status : 'completed'
      }
    })
    .then((result) => {
      res.status( 200 ).json(result)
    })
    .catch(error => {
      res.status( 500 ).send(error)
    })
})