import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="social-media"></div>
      <div className="links">
        <p>HOME</p>
        <p>ABOUT</p>
        <p>CONTACT</p>
        <p>WRITE</p>
        <p>LOGOUT</p>
      </div>
      <div className="profile">
        <img
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
