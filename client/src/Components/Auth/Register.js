import React, { Component } from "react";
import "./Login.css";
import axios from "axios";
// A simple JavaScript utility for conditionally joining classNames together.
import classnames from "classnames";

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
    let userInfo = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    axios
      .post("/api/users/register", userInfo)
      .then(dataBeingSent => console.log(dataBeingSent))
      .catch(err => this.setState({ errors: err }));
    // axios library makes http requests so we take our current data from the front end and send it to our interface with the created post request on /register
  }

  render() {
    const { errors } = this.state;
    return (
      <form className="form-signin" onSubmit={this.onSubmit}>
        <h1 className="branding">
          <span className="highlight">G</span>
          <span className="highlight2">M</span>
        </h1>
        <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
        <input
          type="text"
          className={
            ("form-control",
            {
              "invalid-feedback": errors.name
            })
          }
          placeholder="First and Last Name"
          name="name"
          value={this.state.name}
          onChange={this.onChange}
          autoFocus
        />
        <input
          type="email"
          className={
            ("form-control",
            {
              "invalid-feedback": errors.email
            })
          }
          placeholder="Email address"
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          autoFocus
        />
        <input
          type="password"
          className={
            ("form-control",
            {
              "invalid-feedback": errors.password
            })
          }
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.onChange}
        />
        <input
          type="password"
          className={
            ("form-control",
            {
              "invalid-feedback": errors.password2
            })
          }
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
