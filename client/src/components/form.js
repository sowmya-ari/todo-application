import React, { Component } from 'react';
import "../styles/form.css";
class Form extends Component {
  render() {
    return (
      <div className="inputContainer">
        <form onSubmit={(event) => this.props.postNewTask(event)}>
          <input 
            placeholder="What needs to be done?" 
            type="text" value={this.props.task} 
            onChange={(event)=>this.props.handleChange(event)} 
          />
        </form>
      </div>
    )
  }
}
export default Form;