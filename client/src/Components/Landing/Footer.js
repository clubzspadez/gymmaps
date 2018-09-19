import React, { Component } from "react";
import { get } from "http";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copyRight: new Date().getFullYear()
    };
  }

  render() {
    return (
      <footer>
        <p>Hoxha and Co, Copyright &copy; {this.state.copyRight}</p>
      </footer>
    );
  }
}
export default Footer;
