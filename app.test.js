const request = require('supertest')
const app = require('./app')
const model = require('./models/index')

describe('GET /allTasks', function () {
    var id=0;
    before(function() {
        model.todolist.create({
           task   : 'As a user, I should be able to test my story',
           status : 'completed'
        }).then((task)=> {
            id=task.dataValues.id
        })
    })
    after(function() {
        model.todolist.destroy({
            where : {
             id : id
            }
        })
    })
    it('respond with an array containing a list of all tasks', function (done) {
        request(app)
        .get('/allTasks')
        .set('Accept', 'application/json')
        .expect(200,done);
    });
    it('respond with an array containing a list of all active tasks', function (done) {
        request(app)
        .get('/allTasks/active')
        .set('Accept', 'application/json')
        .expect(200,done);
    });
    it('respond with an array containing a list of all completed tasks', function (done) {
        request(app)
        .get('/allTasks/completed')
        .set('Accept', 'application/json')
        .expect(200,done);
    });
})

describe('POST /allTasks', function () {
    after(function() {
        model.todolist.destroy({
            where : {
             task: 'dummy' 
            }
        })
    })
    it('add a new task to the list', function (done) {
        request(app)
        .post('/allTasks')
        .send({"task": "dummy","status": "dummy"})
        .set('Accept', 'application/json')
        .expect(201,done);
    });
});

describe('delete /allTasks/:id', function () {
    var id=0
    before(function() {
        model.todolist.create({
           task   : 'As a user, I should be able to test my story',
           status : 'completed'
        }).then((task)=> {
            id=task.dataValues.id
        })
    })
    it('It should delete the task from todo list according to the given id', function (done) {
        request(app)
        .delete('/allTasks/'+id)
        .set('Accept', 'application/json')
        .expect(200,done);
    });
});