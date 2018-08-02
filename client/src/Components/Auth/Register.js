import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <form>
        <div className="container1">
          <h1>Sign Up</h1>
          <p>Please fill out this form to create an account</p>
          <hr />

          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label for="psw">
            <b>Password</b>
          </label>
          <input type="text" placeholder="Enter Password" name="psw" required />

          <label for="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="text"
            placeholder="Repeat Password"
            name="psw-repeat"
            required
          />

          <label>
            <input
              type="checkbox"
              checked="checked"
              name="remember"
              style={{ marginBottom: "15px" }}
            />
            Remember Me
          </label>
          <p>
            By crreating an account you agree to our{" "}
            <a href="#" style={{ color: "dodgerblue" }}>
              {" "}
              Terms & Privacy
            </a>
          </p>

          <div className="clearfix">
            <button type="button" className="cancelbtn">
              Cancel
            </button>
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Register;
