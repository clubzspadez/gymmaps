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
      .then(dataBeingSent => console.log(dataBeingSent.data))
      .catch(err => this.setState({ errors: err.response.data }));
    // axios library makes http requests so we take our current data from the front end and send it to our interface with the created post request on /register
  }

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className={classnames("form-control", {
              "is-invalid": errors.name
            })}
            placeholder="First and Last Name"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="form-group">
          <input
            type="email"
            className={classnames("form-control", {
              "is-invalid": errors.email
            })}
            placeholder="Email address"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        <input
          type="password"
          className={classnames("form-control", {
            "is-invalid": errors.password
          })}
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.onChange}
        />
        {errors.password && (
          <div className="invalid-feedback">{errors.password}</div>
        )}
        <input
          type="password"
          className={classnames("form-control", {
            "is-invalid": errors.password2
          })}
          placeholder="Re-enter Password"
          name="password2"
          value={this.state.password2}
          onChange={this.onChange}
        />
        {errors.password2 && (
          <div className="invalid-feedback">{errors.password2}</div>
        )}
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
