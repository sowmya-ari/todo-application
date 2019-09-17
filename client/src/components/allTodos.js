import React from "react";
import Todos from "./todos.js";

class AllTodos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  
  componentDidUpdate(){
    this.getAllTasks();
  }
  componentDidMount() {
    this.getAllTasks();
  }  
  getAllTasks = () => {
    fetch('/todos')
    .then(response => response.json())
    .then(data=>this.setState({todos:data})) 
  }

  render() {
    return (
      <div className="activeTodos">
        <Todos tasks={this.state.todos}/>
      </div>
    );
  }
}
export default AllTodos;
