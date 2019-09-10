import React from 'react';
import Todos from './todos.jsx';

class Completed extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      tasklist:[]
    }
  }
getCompletedTasks = () => {
  fetch('http://localhost:8080/allTasks/completed')
  .then(res => res.json())
  .then(res => {
    var tasklist = res.map(r => r)
    this.setState({tasklist});
  })
}
componentDidUpdate(){
  this.getCompletedTasks();
}
render(){
  return (   
    <div className="allTodos">
      <Todos
        tasks={this.state.tasklist}/>
    </div>
    );
  }
}
export default Completed;