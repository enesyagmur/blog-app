import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./detail.scss";
import moment from "moment";
import { TiDeleteOutline } from "react-icons/ti";
import { PiPencilCircle } from "react-icons/pi";

const Detail = () => {
  const posts = useSelector((state) => state.posts.postList);
  const [blog, setBlog] = useState("asd");
  const { id } = useParams();
  const navigate = useNavigate();
  const img =
    "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

  const filterPosts = () => {
    const foundBlog = posts.filter((post) => post._id === id);
    if (foundBlog) {
      setBlog(foundBlog);
    }
  };

  const deleteBlog = async () => {
    const response = await fetch("/api/notes/" + id, {
      method: "DELETE",
    });

    if (response.ok) {
      navigate("/");
    } else {
      console.log(response.hata);
    }
  };

  useEffect(() => {
    filterPosts();
  }, []);

  console.log(blog);
  return (
    <div className="detail">
      {blog && (
        <div className="blog">
          <PiPencilCircle className="update-icon" />
          <TiDeleteOutline className="delete-icon" onClick={deleteBlog} />
          <img src={img} alt="" />
          <div className="blog-info">
            <p className="time">
              {moment(new Date(blog[0].updatedAt)).fromNow()}
            </p>
            <p className="title">{blog[0].title}</p>
            <p className="category">{blog[0].category} </p>
          </div>
          <p className="text">{blog[0].text}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
