import React, { Component } from "react";
import "./App.css";

import Navbar from "./Components/Landing/Navbar";
import Landing from "./Components/Landing/Landing";
import "./App.css";

class App extends Component {
  render() {
    return (
      <body>
        <div>
          <Navbar />
          <Landing />
        </div>
      </body>
    );
  }
}

export default App;
