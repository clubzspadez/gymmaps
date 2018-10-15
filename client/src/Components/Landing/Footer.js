import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copyRight: new Date().getFullYear()
    };
  }

  render() {
    return (
      <footer className="bg-dark text-white mt-5 p-4 text-center">
        Copyright &copy; {this.state.copyRight} DevConnector
      </footer>
    );
  }
}
export default Footer;
