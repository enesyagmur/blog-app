import React from "react";
import "./home.scss";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Posts from "./Posts";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home-main">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
