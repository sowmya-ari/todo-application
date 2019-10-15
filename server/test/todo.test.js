var SequelizeMock = require("sequelize-mock")
var dbMock = new SequelizeMock()
var chai = require('chai')
var expect = chai.expect;
var task = dbMock.define('Todo');
task.$queueResult([
    task.build({
      'task': 'Jenkins',
      'status': 'active'
    }),
    task.build({
      'task': 'unit testing',
      'status': 'completed'
    })
  ]);
describe("Test Sequelize Mocking", () => {  
    it("Should get all the values from mock model", async () => {
        const todo = await task.findAll({
            where: {status:"active"}
        });
        expect(todo.length).to.equal(2);
    })
    it("Should create value into the model", async () => {
        const todo = await task.create({
            task: "hello",
            status: "completed"
        });
        expect(todo.get('task')).to.equal('hello');
        expect(todo.get('status')).to.equal('completed');
    })
    it("Should create value into the model", async () => {
      const todo = await task.create({
          task: "hello",
          status: "completed"
      });
      expect(todo.get('task')).to.equal('hello');
      expect(todo.get('status')).to.equal('completed');
    })
   it("Should delete value from the model", async () => {
     const todo = await task.destroy({ 
       where: {
        id: 3
       }
      });
     expect(todo).to.equal(1);
    })
    it("Should update status from the model", async () => {
      const todo = await task.update( 
        {
          status: "completed" 
        }, 
        {where: {
         id: 1
        }
      });
      expect(todo).to.be.an('array').that.includes(1);
    })
})
    
  