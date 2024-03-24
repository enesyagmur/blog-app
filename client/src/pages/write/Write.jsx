import React, { useState } from "react";
import "./write.scss";
import { GoPlusCircle } from "react-icons/go";

const Write = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const createBlog = async () => {
    const blog = { title, text };

    const response = await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setTitle("");
      setText("");
      alert("Blog oluşturuldu");
    }
  };

  return (
    <div className="write">
      <label htmlFor="image">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <GoPlusCircle className="icon" />
      </label>
      <input type="file" id="image" style={{ display: "none" }} />

      <input
        className="title"
        type="text"
        placeholder="Başlık"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        name=""
        id=""
        cols="30"
        rows="20"
        placeholder="Herhangi bir metin yazın..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <button onClick={createBlog}>Yayınla</button>
    </div>
  );
};

export default Write;
