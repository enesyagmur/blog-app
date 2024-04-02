import React, { useEffect, useState } from "react";
import "./posts.scss";
import Post from "./Post";
import { useDispatch } from "react-redux";
import { getPosts } from "../../redux/postsSlice";

const Posts = () => {
  const [blogs, setBlogs] = useState();
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (blogs) {
      blogs.map((blog) => {
        dispatch(getPosts(blog));
      });
    }
  }, [blogs]);

  return (
    <div className="posts">
      {blogs && blogs.map((blog) => <Post key={blog._id} blog={blog} />)}
    </div>
  );
};

export default Posts;
