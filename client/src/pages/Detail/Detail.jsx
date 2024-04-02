import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./detail.scss";
import moment from "moment";
import { TiDeleteOutline } from "react-icons/ti";
import { PiPencilCircle } from "react-icons/pi";

const Detail = () => {
  const [blog, setBlog] = useState("asd");
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
      navigate("/");
    } else {
      console.log(response.hata);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div className="detail">
      {blog && (
        <div className="blog">
          <PiPencilCircle className="update-icon" />
          <TiDeleteOutline className="delete-icon" onClick={deleteBlog} />
          <img src={img} alt="" />
          <div className="blog-info">
            <p className="time">{moment(new Date(blog.updatedAt)).fromNow()}</p>
            <p className="title">{blog.title}</p>
            <p className="category">{blog.category} </p>
          </div>
          <p className="text">{blog.text}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
