import React, { useEffect, useState } from "react";
import "./searchbar.scss";
import { LiaSearchSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import FoundBlogs from "./FoundBlogs";

const Searchbar = () => {
  const [text, setText] = useState("");
  const [foundBlogs, setFoundBlogs] = useState();

  const searchBlogs = async () => {
    if (text) {
      const response = await fetch("/api/notes");
      const responseJson = await response.json();

      if (response.ok) {
        const found = responseJson.filter((blog) =>
          blog.title.toLowerCase().includes(text.toLowerCase())
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
      <FoundBlogs
        foundBlogs={foundBlogs}
        setFoundBlogs={setFoundBlogs}
        setText={setText}
      />

      <LiaSearchSolid className="search-icon" />
    </div>
  );
};

export default Searchbar;
