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
   this.setState({todos:res});
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