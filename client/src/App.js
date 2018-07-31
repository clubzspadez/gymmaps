import React, { Component } from "react";
import "./App.css";

import Navbar from "./Components/Landing/Navbar";
import Landing from "./Components/Landing/Landing";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Landing />
      </div>
    );
  }
}

export default App;
