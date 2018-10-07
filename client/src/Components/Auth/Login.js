import React, { Component } from "react";
import "./Login.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    return {
      email: this.state.email,
      password: this.state.password
    };
  }
  render() {
    return (
      <form className="form-signin" onSubmit={this.onSubmit}>
        <h1 className="branding">
          <span className="highlight">G</span>
          <span className="highlight2">M</span>{" "}
        </h1>
        <h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1>

        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          value={this.onChange}
          required
        />

        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          value={this.onChange}
          required
        />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-gym btn-block" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
      </form>
    );
  }
}
export default Login;
