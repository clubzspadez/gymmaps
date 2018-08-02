import React, { Component } from "react";
import "./App.css";

import Navbar from "./Components/Landing/Navbar";
import Landing from "./Components/Landing/Landing";
import "./App.css";
import Footer from "./Components/Landing/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Components/Auth/Register";

class App extends Component {
  render() {
    return (
      <Router>
        <body>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Footer />
          </div>
        </body>
      </Router>
    );
  }
}

export default App;
