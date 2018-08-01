import React, { Component } from "react";
import "./Landing.css";
import yoga from "../../Images/Yoga.jpg";
import lift from "../../Images/Lifting.jpg";

import Image from "react-image-resizer";
class Landing extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">GymMaps</h1>
        <p className="lead">
          The new way to find a gym that fits your personal style!
        </p>
        <hr className="my-4" />
        <p>Getting Started is easy. Just Sign up below.</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Sign Up
          </a>
        </p>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h1>What can GymMaps offer?</h1>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-sm">
              <h1>Personalized Gym Options</h1>
              <p>
                Based on criteria you selected, GymMaps will help you locate
                gyms that suit your needs.
              </p>
              <Image src={yoga} height={300} width={350} />
            </div>
            <div className="col-sm">
              <h1>Deals, Offers, and Promos </h1>
              <p>
                GymMaps will keep you updated with deals and promos of local
                gyms.
              </p>
              <Image src={lift} height={300} width={350} />
            </div>{" "}
            <div className="col-sm">
              <h1>Real Time Gym Locations</h1>
            </div>
          </div>
        </div>
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
