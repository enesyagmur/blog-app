import React, { useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import "./detail.scss";
import moment from "moment";
import { TiDeleteOutline } from "react-icons/ti";
import { PiPencilCircle } from "react-icons/pi";
import UpdateBlog from "./UpdateBlog";

const Detail = () => {
  const [blog, setBlog] = useState();
  const [blogUpdateCheck, setBlogUpdateCheck] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const { id } = useParams();
  const navigate = useNavigate();
  const img =
    "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

  const getBlog = async () => {
    const response = await fetch("/api/notes/" + id);
    const responseJson = await response.json();
    if (response.ok) {
      setBlog(responseJson);
    } else {
      console.log(response.hata);
    }
  };

  const deleteBlog = async () => {
    const response = await fetch("/api/notes/" + id, {
      method: "DELETE",
    });

    if (response.ok) {
      navigate("/home");
    } else {
      console.log(response.hata);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  useEffect(() => {
    if (blogUpdateCheck === false) {
      getBlog();
    }
  }, [blogUpdateCheck]);

  if (!blogUpdateCheck) {
    return (
      <div className="detail">
        {blog && (
          <div className="blog">
            {currentUser.email === blog.authorEmail ? (
              <>
                <PiPencilCircle
                  className="update-icon"
                  onClick={() => setBlogUpdateCheck(true)}
                />
                <TiDeleteOutline className="delete-icon" onClick={deleteBlog} />
              </>
            ) : null}

            <img src={blog.image} alt="" />
            <p className="title">{blog.title}</p>

            <p className="text">{blog.text}</p>
            <div className="blog-info">
              <div className="author">
                <img src={blog.authorImage} alt="" />
                <p className="author-name">{blog.authorName}</p>
              </div>
              <p className="time">
                {moment(new Date(blog.updatedAt)).fromNow()}
              </p>
              <p className="category">{blog.category} </p>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="detail">
        <UpdateBlog blog={blog} setBlogUpdateCheck={setBlogUpdateCheck} />
      </div>
    );
  }
};

export default Detail;
