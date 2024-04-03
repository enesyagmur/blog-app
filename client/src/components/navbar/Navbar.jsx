import React, { useState } from "react";
import "./navbar.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const navigate = useNavigate();

  const logoutFunc = () => {
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="social-media">
        <FaFacebookSquare className="social-media-icon" />
        <FaSquareInstagram className="social-media-icon" />
        <FaPinterestSquare className="social-media-icon" />
        <FaSquareTwitter className="social-media-icon" />
      </div>
      <div className="links">
        <p onClick={() => navigate("/")}>HOME</p>
        <p>ABOUT</p>
        <p>CONTACT</p>
        <p onClick={() => navigate("/write")}>WRITE</p>
        <p onClick={logoutFunc}>LOGOUT</p>
      </div>
      <div className="profile">
        <FaSearch className="search-icon" />
        {currentUser.name ? <p className="name">{currentUser.name}</p> : null}

        {currentUser.image ? (
          <img
            src={currentUser.image}
            alt=""
            onClick={() => navigate("/account")}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
