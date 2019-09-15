import React from 'react';
import Todos from './todos.js';

class CompletedTodos extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      todos:[]
    }
  }

  componentDidMount() {
    this.getCompletedTasks();
  }
  componentDidUpdate(){
    this.getCompletedTasks();
  }
  getCompletedTasks = () => {
   fetch('http://localhost:8080/task/completed')
   .then(res => res.json())
   .then(res => {
    var tasklist = res.map(r => r)
    this.setState({todos:tasklist});
   })
  }

  render(){
   return (   
    <div className="completedTodos">
      <Todos
        tasks={this.state.todos}/>
    </div>
    );
  }
}
export default CompletedTodos;