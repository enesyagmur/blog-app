import React, { useState } from "react";
import "./sidebar.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Sidebar = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  return (
    <div className="sidebar">
      <div className="sidebar-main">
        <p className="title">HAKKIMDA</p>
        {currentUser.image ? <img src={currentUser.image} alt="" /> : null}

        <p className="explain">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          explicabo molestias excepturi? Unde, deleniti vitae provident,
          accusantium quasi corrupti rerum , magnam ab!
        </p>
        <p className="title">KATEGORİLER</p>
        <div className="categories">
          <p>Müzik</p>
          <p>Teknoloji</p>
          <p>Spor</p>
          <p>Tasarım</p>
          <p>Sağlık</p>
          <p>Hayat</p>
        </div>
        <p className="title">SOSYAL MEDYA</p>
        <div className="social-media">
          <FaFacebookSquare className="social-media-icon" />
          <FaSquareInstagram className="social-media-icon" />
          <FaPinterestSquare className="social-media-icon" />
          <FaSquareTwitter className="social-media-icon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
