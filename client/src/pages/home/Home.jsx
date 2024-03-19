import React from "react";
import "./home.scss";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home-main">
        <div className="left"></div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
