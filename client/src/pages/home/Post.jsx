import React, { useEffect, useState } from "react";
import "./post.scss";
import moment from "moment";
import "moment/locale/tr";
import { useNavigate } from "react-router-dom";

const Post = ({ blog }) => {
  const navigate = useNavigate();

  return (
    <div className="post">
      <img src={blog.image} alt="" />

      <p className="title">{blog.title}</p>

      <p
        className="post-detail"
        onClick={() => navigate(`/detail/${blog._id}`)}
      >
        {blog.text.substring(0, 300) + "..."}
      </p>
      <div className="more-info">
        <div className="author">
          <img src={blog.authorImage} alt="" />
          <p className="author-name">{blog.authorName}</p>
        </div>

        <p className="category">{blog.category}</p>
        <p className="time">{moment(new Date(blog.createdAt)).fromNow()}</p>
      </div>
    </div>
  );
};

export default Post;
