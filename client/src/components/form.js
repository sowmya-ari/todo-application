import React, { Component } from 'react';
import "../styles/form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
  }

  handleChange = event => {
    this.setState({ task: event.target.value });
  };

  postNewTask(event) {
    event.preventDefault();
    let data = {
      task: this.state.task,
      status: "active"
    };
    fetch("/todo", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    this.setState({
      task: " "
    });
  }
  
  render() {
    return (
      <div className="inputContainer">
        <form onSubmit={(event) => this.postNewTask(event)}>
          <input 
            placeholder="What needs to be done?" 
            type="text" value={this.state.task}
            onChange={(event)=>this.handleChange(event)} 
          />
        </form>
      </div>
    )
  }
}
export default Form;