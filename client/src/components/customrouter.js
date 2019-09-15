import React from "react";
import { Route} from "react-router-dom";

import AllTodos from "./allTodos";
import ActiveTodos from "./activeTodos";
import CompletedTodos from "./completedTodos";

class Customrouter extends React.Component {
  render() {
    return (
      <div className='router'>
        <Route path="/" exact component={AllTodos}/>
        <Route path="/active"  component={ActiveTodos}/>
        <Route path="/completed"  component={CompletedTodos}/>
      </div>
    );
  }
}

export default Customrouter;
