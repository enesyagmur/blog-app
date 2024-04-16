import React, { useState } from "react";
import "./sidebar.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const navigate = useNavigate();

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
          <p onClick={() => navigate(`/home/müzik`)}>Müzik</p>
          <p onClick={() => navigate(`/home/teknoloji`)}>Teknoloji</p>
          <p onClick={() => navigate(`/home/spor`)}>Spor</p>
          <p onClick={() => navigate(`/home/tasarım`)}>Tasarım</p>
          <p onClick={() => navigate(`/home/yemek`)}>Yemek</p>
          <p onClick={() => navigate(`/home/seyahat`)}>Seyahat</p>
          <p onClick={() => navigate(`/home/eğlence`)}>Eğlence</p>
          <p onClick={() => navigate(`/home/all`)}>Tüm Kategoriler</p>
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
