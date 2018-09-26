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
        <input
          type="text"
          className="form-control"
          placeholder="First and Last Name"
          name="name"
          value={this.state.name}
          required
          autoFocus
        />
        <input
          type="email"
          className="form-control"
          placeholder="Email address"
          name="email"
          value={this.state.email}
          autoFocus
        />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="password"
          value={this.state.password}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Re-enter Password"
          name="password2"
          value={this.state.password2}
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
