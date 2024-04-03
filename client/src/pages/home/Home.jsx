import React, { useEffect, useState } from "react";
import "./home.scss";
import Header from "./Header";

import Posts from "./Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const navigate = useNavigate();

  if (currentUser) {
    return (
      <div className="home">
        <Header />
        <div className="home-main">
          <Posts />
          <Sidebar />
        </div>
      </div>
    );
  } else {
    navigate("/");
  }
};

export default Home;
