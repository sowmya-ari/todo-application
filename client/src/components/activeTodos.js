import React from 'react';
import Todos from './todos.js';

class ActiveTodos extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      todos:[]
    }
  }

  componentDidMount(){
    this.getActiveTasks();
  }
  componentDidUpdate(){
    this.getActiveTasks();
  }
  getActiveTasks = () => {
   fetch('http://localhost:8080/task/active')
   .then(res => res.json())
    this.setState({todos:res});
  }

  render(){
   return (   
    <div className="allTodos">
      <Todos
        tasks={this.state.todos}/>
    </div>
   );
  }
}
export default ActiveTodos;