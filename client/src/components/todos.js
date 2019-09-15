import React from 'react';
import Todo from './todo.js';
import "../styles/todos.css";

class Todos extends React.Component {
  render(){
    return  <ul className="list-group " id="todo-list">
      {this.props.tasks.map((task) => {
        return <Todo
        key={task.id}
        task={task}/>
      })} 
    </ul>
  }
}
export default Todos;