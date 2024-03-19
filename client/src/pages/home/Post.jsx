import React from "react";
import "./post.scss";

const Post = ({ img }) => {
  return (
    <div className="post">
      <img src={img} alt="" />
      <p className="category">Müzik - Hayat</p>
      <p className="title">Lorem ipsum dolor sit amet.</p>
      <p className="time">1 saat önce</p>
      <p className="detail">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
        expedita animi tempore unde consequuntur voluptatibus sunt sed minima
        quis, odit inventore, explicabo nostrum delectus! Repellendus saepe hic
        minima accusantium nisi!
      </p>
    </div>
  );
};

export default Post;
