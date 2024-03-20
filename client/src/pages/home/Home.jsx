import React from "react";
import "./home.scss";
import Header from "./Header";

import Posts from "./Posts";
import Sidebar from "../../components/sidebar/Sidebar";

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
