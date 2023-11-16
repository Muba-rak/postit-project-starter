import React, { useState } from "react";
import "../../styles/Signin.css";
import "../../styles/Getstarted.css";
import Navbar from "../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const [show, setShow] = useState(false);
  const toggleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <div>
      <Navbar />
      <ToastContainer />
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
              <div className="inputInfo position-relative">
                <label htmlFor="password">Password</label>
                <input type={show ? "text" : "password"} id="password" />
                <button className="toggleBtn" onClick={toggleShow}>
                  {" "}
                  {show ? "Hide" : "Show"}{" "}
                </button>
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
