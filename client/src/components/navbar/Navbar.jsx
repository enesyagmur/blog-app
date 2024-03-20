import React from "react";
import "./navbar.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="social-media">
        <FaFacebookSquare className="social-media-icon" />
        <FaSquareInstagram className="social-media-icon" />
        <FaPinterestSquare className="social-media-icon" />
        <FaSquareTwitter className="social-media-icon" />
      </div>
      <div className="links">
        <p>HOME</p>
        <p>ABOUT</p>
        <p>CONTACT</p>
        <p onClick={() => navigate("/write")}>WRITE</p>
        <p>LOGOUT</p>
      </div>
      <div className="profile">
        <FaSearch className="search-icon" />
        <img
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          onClick={() => navigate("/account")}
        />
      </div>
    </div>
  );
};

export default Navbar;
