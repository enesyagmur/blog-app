import React, { useEffect, useState } from "react";
import "./posts.scss";
import Post from "./Post";
import moment from "moment";
import "moment/locale/tr";

const Posts = () => {
  const [blogs, setBlogs] = useState();
  const img =
    "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

  const takeBlogs = async () => {
    const response = await fetch("api/notes");
    const responseJson = await response.json();

    if (response.ok) {
      setBlogs(responseJson);
    }
  };
  useEffect(() => {
    takeBlogs();
  }, []);

  return (
    <div className="posts">
      {blogs &&
        blogs.map((blog) => (
          <Post
            key={blog._id}
            img={img}
            category={blog.category}
            title={blog.title}
            text={blog.text}
            updateTime={moment(new Date(blog.createdAt)).fromNow()}
          />
        ))}
    </div>
  );
};

export default Posts;
