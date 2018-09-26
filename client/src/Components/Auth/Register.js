import React, { Component } from "react";
import "./Login.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
  render() {
    return (
      <form className="form-signin">
        <h1 className="branding">
          <span className="highlight">G</span>
          <span className="highlight2">M</span>{" "}
        </h1>
        <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
        <label htmlFor="inputEmail" className="sr-only" />
        <input
          type="text"
          id="inputName"
          className="form-control"
          placeholder="First and Last Name"
          required
          autoFocus
        />
        <label htmlFor="inputEmail" className="sr-only" />
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autoFocus
        />
        <label htmlFor="inputPassword" className="sr-only" />
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <label htmlFor="password2" className="sr-only" />
        <input
          type="password"
          id="inputPassword2"
          className="form-control"
          placeholder="Re-enter Password"
          required
        />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-gym btn-block" type="submit">
          Sign Up
        </button>
      </form>
    );
  }
}

export default Register;
