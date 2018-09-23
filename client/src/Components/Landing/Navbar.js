import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div id="branding">
            <Link to="/">
              <h1>
                <span className="highlight">Gym</span>
                <span className="highlight2">Maps</span>{" "}
              </h1>
            </Link>
          </div>
          <nav>
            <ul className="clearer">
              <li className="current">
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/about"> About </Link>
              </li>
              <li>
                <Link to="/services"> Services </Link>
              </li>
              <li>
                <Link to="/deals"> Deals </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
