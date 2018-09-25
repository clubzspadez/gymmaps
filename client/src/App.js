import React, { Component } from "react";

import "./build/index.css";

import Navbar from "./Components/Landing/Navbar";
import Landing from "./Components/Landing/Landing";
import Footer from "./Components/Landing/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import About from "./Components/About";
import Services from "./Components/Services";
import Deals from "./Components/Deals";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/deals" component={Register} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
