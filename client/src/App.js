import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import Form from "./components/form";
import Customrouter from "./components/customrouter";
import Links from "./components/links";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      todolist: []
    };
    this.onDataChange = this.onDataChange.bind(this);
  }
  onDataChange(newData) {
    this.setState({ todolist: this.state.todolist }, () => {
      console.log("Data 1 changed by Sidebar");
    });
  }

  getAllTasks = () => {
    fetch("http://localhost:8080/allTasks")
      .then(res => res.json())
      .then(res => {
        var tasklist = res.map(r => r);
        this.setState({ todolist: tasklist });
      });
  };

  componentDidMount() {
    this.getAllTasks();
  }

  handleChange = event => {
    this.setState({ task: event.target.value });
    console.log(event.target.value);
  };

  postNewTask(event) {
    event.preventDefault();
    let data = {
      task: this.state.task,
      status: "active"
    };
    fetch("http://localhost:8080/allTasks", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    var tasklist = this.state.todolist;
    tasklist.push(data);
    this.setState({
      todolist: tasklist,
      task: " "
    });
  }

  render() {
    return (
      <div className="todo">
        <header id="header">
          <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <h1>todos</h1>
          </div>
          <Form
            handleChange={this.handleChange.bind(this)}
            postNewTask={this.postNewTask.bind(this)}
            task={this.state.task}
          />
        </header>
        <div>
          <BrowserRouter>
            <Customrouter tasks={this.state.todolist} />
          </BrowserRouter>
        </div>
        <footer id="footer" style={{ display: "block" }}>
          <Links />
        </footer>
      </div>
    );
  }
}

export default App;
