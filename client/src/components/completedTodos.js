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
   fetch('/todos/completed')
   .then(response => response.json())
   .then(data=>this.setState({todos:data}))
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