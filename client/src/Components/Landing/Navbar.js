import React, { Component } from "react";
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
                <a href="index.html"> Home </a>{" "}
              </li>
              <li>
                <a href="about.html"> About </a>{" "}
              </li>
              <li>
                <a href="services.html"> Services </a>{" "}
              </li>
              <li>
                <a href="deals.html"> Deals </a>{" "}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
