import React from 'react';
import "../styles/todo.css"

class Todo extends React.Component {
  constructor(props){
    super(props)
    this.state={ editing:false,changedText:''}
  }
  componentDidMount(){
    this.setState({
      changedText:this.props.task.task
    })
  }
  handleEditing(){
    this.setState({
      editing:true,
      changedText:this.props.task.task
    })
  }
  handleEditingDone(event){
    var task=this.props.task;
    fetch('http://localhost:8080/task/' + task.id, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        "task":this.state.changedText
      })
    })
    task.task=this.state.changedText
    if(event.keyCode === 13){
      this.setState({
        editing:false
      })
    }
  }
  handleonChange(event){
    var _changedText = event.target.value;
    this.setState({changedText:_changedText})
  }
  removeTask(){
    var task=this.props.task;
    fetch('http://localhost:8080/task/' + task.id, {
      method: 'DELETE'})
  }; 
  markAsComplete(){
    var task=this.props.task; 
    var currentStatus=task.status;
    let data=(currentStatus==="active")?"completed":"active"
    fetch('http://localhost:8080/task/' + task.id, {
      method: 'PATCH',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        "status":data
      })
    })
  };
 
  render(){
    var task = this.props.task;
    var status=(task.status==="active") ? false :true;
    var view={};
    var edit={};
    if(this.state.editing===true){
      view.display='none';
    } else{
      edit.display='none';
    }
    return (<li className="list-group-item" id={ status ? 'completed' : '' } >
      <div style={view} onDoubleClick={this.handleEditing.bind(this)}>
        <input
          className="toggle"
          type="checkbox" 
          checked={status} 
          onChange={this.markAsComplete.bind(this)} 
          style={{fontSize: 'x-large'}}>
        </input> 
        <label>{this.state.changedText}</label> 
        <button className="destroy" onClick={this.removeTask.bind(this)}></button>
      </div> 
        <input 
          className="editing"
          style={edit} 
          type="text" 
          onChange={this.handleonChange.bind(this)}
          onKeyDown={this.handleEditingDone.bind(this)} 
          value={this.state.changedText}
        />     
    </li>
    )
  }
}
export default Todo;