const request = require('supertest')
const app = require('../app')
const model = require('../models/index')

describe('GET /allTasks', function () {
    var id=0;
    before(function() {
        model.Todo.create({
           task   : 'As a user, I should be able to test my story',
           status : 'completed'
        }).then((task)=> {
            id=task.dataValues.id
        })
    })
    after(function() {
        model.Todo.destroy({
            where : {
             id : id
            }
        })
    })
    it('respond with an array containing a list of all tasks', function (done) {
        request(app)
        .get('/todos')
        .set('Accept', 'application/json')
        .expect(200,done);
    });
    it('respond with an array containing a list of all active tasks', function (done) {
        request(app)
        .get('/todos/active')
        .set('Accept', 'application/json')
        .expect(200,done);
    });
    it('respond with an array containing a list of all completed tasks', function (done) {
        request(app)
        .get('/todos/completed')
        .set('Accept', 'application/json')
        .expect(200,done);
    });
})

describe('POST /allTasks', function () {
    after(function() {
        model.Todo.destroy({
            where : {
             task: 'dummy' 
            }
        })
    })
    it('add a new task to the list', function (done) {
        request(app)
        .post('/todo')
        .send({"task": "dummy","status": "dummy"})
        .set('Accept', 'application/json')
        .expect(201,done);
    });
});

describe('delete /allTasks/:id', function () {
    var id=0
    before(function() {
        model.Todo.create({
           task   : 'As a user, I should be able to test my story',
           status : 'completed'
        }).then((task)=> {
            id = task.dataValues.id
        })
    })
    it('It should delete the task from todo list according to the given id', function (done) {
        request(app)
        .delete('/todo/'+id)
        .set('Accept', 'application/json')
        .expect(200,done);
    });
});

describe('edit /allTasks/:id', function () {
    var id=0
    before(function() {
        model.Todo.create({
           task   : 'As a user, I should be able to test my story',
           status : 'completed'
        }).then((task)=> {
            id=task.dataValues.id
        })
    })
    after(function() {
        model.Todo.destroy({
            where : {
             id: id
            }
        })
    })
    it('It should edit a task', function (done) {
        request(app)
        .patch('/todo/'+id)
        .send({task:"dummy"})
        .set('Accept', 'application/json')
        .expect(200,done);
    });
    it('It should mark the task status as completed', function (done) {
        request(app)
        .patch('/todo/'+id)
        .send({status:"completed"})
        .set('Accept', 'application/json')
        .expect(200,done);
    });
});
