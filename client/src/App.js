import React from "react";
import { BrowserRouter } from "react-router-dom";

import Form from "./components/form";
import Customrouter from "./components/customrouter";
import Links from "./components/links";

import "./styles/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="todo">
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <h1>todos</h1>
        </div>
        <div id="input">
          <Form/>
        </div>
        <div id="body">
          <BrowserRouter>
            <Customrouter/>
          </BrowserRouter>
        </div>
        <div id="footer" style={{ display: "block" }}>
          <Links />
        </div>
      </div>
    );
  }
}

export default App;
