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
        <div>
          <p>Hoxha and Rodriguez Co, Copyright &copy; {this.state.copyRight}</p>
        </div>
      </footer>
    );
  }
}
export default Footer;
