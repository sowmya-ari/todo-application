import React from 'react';
import Eachitem from './todo.jsx';
import "../styles/todos.css";

class Todos extends React.Component {
  
  removeTask(id) {
    const tasks = this.props.tasks;
    let task = tasks.find(task => {
      return task.id === id;
    });
    const request = new Request('http://localhost:8080/allTasks/' + id, {
      method: 'DELETE'
    });
    fetch(request).then(response => {
      tasks.splice(tasks.indexOf(task), 1);
      this.setState({
          tasks
      });
      response.json().then(data => {
        console.log(data);
      });
    });
  }; 

  markAsComplete(id){
    var tasks=this.props.tasks;
    let task = tasks.find(task => {
     return task.id === id;
    });
    var currentStatus=task.status;
    let data=(currentStatus==="active")?"completed":"active"
    fetch('http://localhost:8080/allTasks/' + id, {
      method: 'PATCH',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        "status":data
      })
    })
     task.status=data
     this.setState({
        tasks
     })
  };
 
  render(){
    return  <ul className="list-group " id="todo-list">
      {this.props.tasks.map((task) => {
        return <Eachitem 
        key={task.id}
        removeTask ={this.removeTask.bind(this,task.id)}
        markAsComplete={this.markAsComplete.bind(this,task.id)}
        task={task}/>
      })} 
    </ul>
  }
}
export default Todos;