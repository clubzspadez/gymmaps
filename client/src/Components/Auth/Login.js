import React, { Component } from "react";
import "./Login.css";
class Login extends Component {
  render() {
    return (
      <form className="form-signin">
        <h1 className="branding">
          <span className="highlight">G</span>
          <span className="highlight2">M</span>{" "}
        </h1>
        <h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1>
        <label for="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autofocus
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
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
