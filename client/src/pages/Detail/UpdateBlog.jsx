import React, { useState } from "react";
import "./updateBlog.scss";

const UpdateBlog = ({ blog, setBlogUpdateCheck }) => {
  const [inputTitle, setInputTitle] = useState(blog.title);
  const [inputText, setInputText] = useState(blog.text);

  const updateBlogFunc = async () => {
    const newBlog = {
      category: blog.category,
      title: inputTitle,
      text: inputText,
      image: blog.image,
      authorName: blog.authorName,
      authorEmail: blog.authorEmail,
      authorImage: blog.authorImage,
    };

    const response = await fetch("/api/notes/" + blog._id, {
      method: "PATCH",
      body: JSON.stringify(newBlog),
      headers: { "Content-Type": "application/json" },
    });
    const responseJson = await response.json();

    if (response.ok) {
      alert("Blog güncellendi");
      setBlogUpdateCheck(false);
    } else {
      alert(responseJson.hata);
    }
  };

  return (
    <div className="update-blog">
      <input
        className="title"
        type="text"
        placeholder="Başlık"
        onChange={(e) => setInputTitle(e.target.value)}
        value={inputTitle}
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="20"
        placeholder="Herhangi bir metin yazın..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>

      <button onClick={updateBlogFunc}>Güncelle</button>
    </div>
  );
};

export default UpdateBlog;
