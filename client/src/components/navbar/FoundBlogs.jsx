import React from "react";
import "./foundBlogs.scss";
import { useNavigate } from "react-router-dom";

const FoundBlogs = ({ foundBlogs, setFoundBlogs, setText }) => {
  const navigate = useNavigate();
  const goDetailFunc = (id) => {
    navigate(`/detail/${id}`);
    setText("");
    setFoundBlogs("");
  };

  return (
    <div className="found-blogs">
      {foundBlogs &&
        foundBlogs.map((blog) => (
          <p
            className="found-blog"
            key={blog._id}
            onClick={() => goDetailFunc(blog._id)}
          >
            {blog.title}...
          </p>
        ))}
    </div>
  );
};

export default FoundBlogs;
