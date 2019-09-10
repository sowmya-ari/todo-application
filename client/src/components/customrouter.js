import React from "react";
import { Route, Switch } from "react-router-dom";
import All from "./all.jsx";
import Active from "./active.jsx";
import Completed from "./completed.jsx";

class Customrouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.tasks
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.tasks !== this.props.tasks) {
      this.setState({ value: this.props.tasks });
    }
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <All {...props} tasks={this.props.tasks} />}/>
          <Route path="/active"  render={(props) => <Active {...props} tasks={this.props.tasks} />} />
          <Route path="/completed" render={(props) => <Completed {...props} tasks={this.props.tasks} />} />
        </Switch>
      </div>
    );
  }
}
export default Customrouter;
