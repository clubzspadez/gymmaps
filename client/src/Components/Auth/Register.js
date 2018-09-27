import React, { Component } from "react";
import "./Login.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    return {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
  }

  render() {
    return (
      <form className="form-signin" onSubmit={this.onSubmit}>
        <h1 className="branding">
          <span className="highlight">G</span>
          <span className="highlight2">M</span>
        </h1>
        <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
        <input
          type="text"
          className="form-control"
          placeholder="First and Last Name"
          name="name"
          value={this.state.name}
          onChange={this.onChange}
          autoFocus
        />
        <input
          type="email"
          className="form-control"
          placeholder="Email address"
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          autoFocus
        />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.onChange}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Re-enter Password"
          name="password2"
          value={this.state.password2}
          onChange={this.onChange}
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
