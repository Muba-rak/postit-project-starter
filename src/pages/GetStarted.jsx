import React, { useState } from "react";
import "../../styles/Getstarted.css";
import Navbar from "../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";

const Getstarted = () => {
  return (
    <div>
      <Navbar />
      <div className="getStarted">
        <div className="started">
          <div>
            <h1 className="join">
              Join Post<span className="span">it</span>.
            </h1>
            <p className="enter">
              Enter your email address to create an account on Postit.
            </p>
            <form>
              <div className="inputInfo">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
              </div>
              <div className="inputInfo">
                <label htmlFor="email">Your Email Address</label>
                <input type="text" id="email" />
              </div>
              <div className="inputInfo">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <button className="btnContinue" type="submit">
                Continue
              </button>
            </form>
            <Link to="/login" className="link1 text-decoration-none">
              <h6 className="alreadyStart">
                Already have an account? <span className="span">Sign In</span>
              </h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getstarted;
