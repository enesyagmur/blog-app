import React from "react";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-main">
        <p className="title">HAKKIMDA</p>
        <img
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />

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
      </div>
    </div>
  );
};

export default Sidebar;
