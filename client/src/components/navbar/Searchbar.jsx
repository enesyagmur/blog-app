import React, { useEffect, useState } from "react";
import "./searchbar.scss";
import { LiaSearchSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [text, setText] = useState("");
  const [foundBlogs, setFoundBlogs] = useState();
  const navigate = useNavigate();

  const searchBlogs = async () => {
    if (text) {
      const response = await fetch("/api/notes");
      const responseJson = await response.json();

      if (response.ok) {
        const found = responseJson.filter((blog) =>
          blog.title.includes(text.toLowerCase())
        );
        if (found) {
          setFoundBlogs(found);
        }
      } else {
        alert(responseJson.hata);
      }
    } else {
      setFoundBlogs(null);
    }
  };

  const goDetailFunc = () => {
    // navigate(`/detail/${id}`);
    console.log("tıkla");
  };

  useEffect(() => {
    searchBlogs();
  }, [text]);

  return (
    <div className="searchbar">
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      {foundBlogs && (
        <div className="found-blogs">
          {foundBlogs.map((blog) => (
            <p key={blog._id} onClick={goDetailFunc}>
              {blog.title}
            </p>
          ))}
        </div>
      )}

      <LiaSearchSolid className="search-icon" />
    </div>
  );
};

export default Searchbar;
