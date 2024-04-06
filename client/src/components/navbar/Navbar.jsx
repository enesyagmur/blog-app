import React, { useState } from "react";
import "./navbar.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const navigate = useNavigate();

  const logoutFunc = () => {
    localStorage.removeItem("user");

    navigate("/");
    window.location.reload();
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
        <p onClick={() => navigate("/home")}>HOME</p>
        <p>ABOUT</p>
        <p>CONTACT</p>
        <p onClick={() => navigate("/write")}>WRITE</p>
        <p onClick={logoutFunc}>LOGOUT</p>
      </div>
      <Searchbar />
      <div className="profile">
        {currentUser ? <p className="name">{currentUser.name}</p> : null}

        {currentUser ? (
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
