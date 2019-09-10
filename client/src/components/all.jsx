import React from "react";
import Todos from "./todos.jsx";

class All extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasklist: this.props.tasks
    };
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.tasks, prevProps.tasks);
  } 
  render() {
    return (
      <div className="allTodos">
        <Todos tasks={this.props.tasks} type='all'/>
      </div>
    );
  }
}
export default All;
