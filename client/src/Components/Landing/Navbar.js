import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div id="branding">
            <h1>
              <span className="highlight">Gym</span>
              <span className="highlight2">Maps</span>{" "}
            </h1>
          </div>
          <nav>
            <ul>
              <li className="current">
                <Link to="/"> Home </Link>{" "}
              </li>
              <li>
                <Link to="about.html"> About </Link>{" "}
              </li>
              <li>
                <Link to="services.html"> Services </Link>{" "}
              </li>
              <li>
                <Link to="deals.html"> Deals </Link>{" "}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
