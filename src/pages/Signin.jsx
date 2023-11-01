import React, { useState } from "react";
import "../../styles/Signin.css";
import "../../styles/Getstarted.css";
import Navbar from "../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <Navbar />
      <div className="getStarted">
        <div className="started">
          <div>
            <h1 className="join2">Welcome Back</h1>

            <form>
              <div className="inputInfo">
                <label htmlFor="username">Your Email Address</label>
                <input type="text" id="username" />
                <small style={{ backgroundColor: "red" }}> </small>
              </div>
              <div className="inputInfo">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
                <small style={{ backgroundColor: "red" }}></small>
              </div>
              <button className="btnContinue2" type="submit">
                Continue
              </button>
            </form>
            <Link to="/signup" className="link1">
              <h6 className="alreadyStart2">
                No account? <span className="span">Sign Up</span>
              </h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
