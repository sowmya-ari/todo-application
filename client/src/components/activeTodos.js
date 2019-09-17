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
   fetch('/todos/active')
   .then(res => res.json())
   .then(data=>this.setState({todos:data}))
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