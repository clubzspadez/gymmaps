import React, { Component } from "react";
import "./App.css";

import Navbar from "./Components/Landing/Navbar";
import Landing from "./Components/Landing/Landing";
import "./App.css";
import Footer from "./Components/Landing/Footer";

class App extends Component {
  render() {
    return (
      <body>
        <div>
          <Navbar />
          <Landing />
          <Footer />
        </div>
      </body>
    );
  }
}

export default App;
