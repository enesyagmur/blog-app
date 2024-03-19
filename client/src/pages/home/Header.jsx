import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <div className="header-title">
        <p>React & Node</p>
      </div>
      <p className="title">BLOG</p>
      <img
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </header>
  );
};

export default Header;
