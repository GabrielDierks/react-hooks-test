import React, { Component } from "react";
import "./App.css";

import UseState from "./Components/UseState";
import UseReducer from "./Components/UseReducer";
import UseContext from "./Components/UseContext";
import UseEffect from "./Components/UseEffect";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">Trying out Hooks on Twitch</div>
        <UseState />
        <div className="seperator" />
        <UseEffect />
        <div className="seperator" />
        <UseContext />
        <div className="seperator" />
        <UseReducer />
      </div>
    );
  }
}

export default App;
