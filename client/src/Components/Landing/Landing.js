import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div>
        <section id="showcase">
          <div className="container">
            <h1>GymMaps</h1>
            <p>
              Find gyms near you that fit your style. Pay for what you need, and
              maximize comfort!
            </p>
            <Link to="/register" className="btn btn-lg btn-gym mr-2">
              Sign Up
            </Link>
            <a href="/login.html" className="btn btn-lg btn-secondary">
              Login
            </a>
          </div>
        </section>
        <section id="boxes">
          <div className="container">
            <div className="box">
              <div className="image1" />
              <h3>Find Your Perfect Fit</h3>
              <p>
                GymMaps will narrow down your choices so you only get optimized
                options.
              </p>
            </div>
            <div className="box">
              <div className="image2" />
              <h3>Get Local Deals</h3>
              <p>
                Get real time offers on gym deals and promotions, helping you
                save big money.
              </p>
            </div>
            <div className="box">
              <div className="image3" />
              <h3>Online Advising</h3>
              <p>
                Sign up for advising with certified professionals to get your
                health up to par.
              </p>
            </div>
          </div>
        </section>
      </div>
      /*<div className="container">
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
      </div>*/
    );
  }
}
export default Landing;
