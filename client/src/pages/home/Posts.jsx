import React, { useEffect, useState } from "react";
import "./posts.scss";
import Post from "./Post";

const Posts = () => {
  const [blogs, setBlogs] = useState();
  const img =
    "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
  const category = "Müzik - Hayat";

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
            title={blog.title}
            text={blog.text}
            category={category}
            updateTime={blog.updatedAt}
          />
        ))}
    </div>
  );
};

export default Posts;
