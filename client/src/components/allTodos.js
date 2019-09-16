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
    fetch('http://localhost:8080/allTasks')
    .then(res => res.json())
    this.setState({todos:res});
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
