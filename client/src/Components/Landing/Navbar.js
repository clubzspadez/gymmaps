import React, { Component } from "react";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="#home">GymMaps</a>
          </li>
        </ul>
        <ul style={{ float: "right" }}>
          <li>
            <a href="default.asp">Home</a>
          </li>
          <li>
            <a href="news.asp">Deals</a>
          </li>
          <li>
            <a href="contact.asp">About Gym Maps</a>
          </li>
          <li>
            <a href="about.asp">Contact Us</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
