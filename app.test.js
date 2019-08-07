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
})