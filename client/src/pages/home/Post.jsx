import React from "react";
import "./post.scss";

const Post = ({ img, title, text, category, updateTime }) => {
  return (
    <div className="post">
      <img src={img} alt="" />
      <p className="category">{category}</p>
      <p className="title">{title}</p>
      <p className="time">{updateTime}</p>
      <p className="detail">{text}</p>
    </div>
  );
};

export default Post;
