import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/Postit 1.svg";
import cancel from "../../assets/images/cancel.svg";
import hamburger from "../../assets/images/hamburger.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [expand, setExpand] = useState(true);

  const navHandler = () => {
    setExpand(!expand);
  };

  return (
    <div className="navBar">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div className={expand ? "nav-bar" : "nav-bar nav-bar-NX"}>
        <h3 onClick={navHandler}>Stories</h3>
        <h3 onClick={navHandler}>Contact</h3>
        <Link to="/login" className="link">
          <h3 onClick={navHandler}>Sign In</h3>
        </Link>
        <Link to="/signup" className="link">
          <button className="navBtn" onClick={navHandler}>
            Get Started
          </button>
        </Link>
        <img src={cancel} alt="" className="cancel" onClick={navHandler} />
      </div>
      <img src={hamburger} alt="" className="hamburger" onClick={navHandler} />
    </div>
  );
};

export default Navbar;
