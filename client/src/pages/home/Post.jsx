import React from "react";
import "./post.scss";
import moment from "moment";
import "moment/locale/tr";
import { useNavigate } from "react-router-dom";

const Post = ({ id, img, title, text, category, createdTime }) => {
  const navigate = useNavigate();
  return (
    <div className="post">
      <img src={img} alt="" onClick={() => navigate(`/detail/${id}`)} />
      <p className="category">{category}</p>
      <p className="title">{title}</p>
      <p className="time">{moment(new Date(createdTime)).fromNow()}</p>
      <p className="detail">{text}</p>
    </div>
  );
};

export default Post;
