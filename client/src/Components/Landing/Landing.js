import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <h1 className="mb-5">Find Local Gyms That Match Your Needs! </h1>
          </div>
          <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <form>
              <div className="col-12 col-md-9 mb-2 mb-md-0">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter your email..."
                />
              </div>
              <br />
              <div className="col-12 col-md-3">
                <button
                  type="submit"
                  className="btn btn-block btn-lg btn-primary"
                >
                  Sign up!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
