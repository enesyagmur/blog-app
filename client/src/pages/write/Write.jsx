import React, { useState } from "react";
import "./write.scss";
import { GoPlusCircle } from "react-icons/go";
import { FiMusic } from "react-icons/fi";
import { IoIosFitness } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { IoAirplaneOutline } from "react-icons/io5";
import { IoFastFoodOutline } from "react-icons/io5";

const Write = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const createBlog = async () => {
    const blog = { category, title, text };

    const response = await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setTitle("");
      setText("");
      setCategory("");
      alert("Blog oluşturuldu");
    }
  };

  return (
    <div className="write">
      <input type="file" id="image" style={{ display: "none" }} />

      <label htmlFor="image">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <GoPlusCircle className="icon" />
      </label>
      <div className="center-blog">
        <input
          className="title"
          type="text"
          placeholder="Başlık"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <div className="categories">
          <FaCode
            className={category === "teknoloji" ? "this-category" : "icon"}
            onClick={() => setCategory("teknoloji")}
          />
          <FiMusic
            className={category === "müzik" ? "this-category" : "icon"}
            onClick={() => setCategory("müzik")}
          />
          <IoIosFitness
            className={category === "spor" ? "this-category" : "icon"}
            onClick={() => setCategory("spor")}
          />
          <IoAirplaneOutline
            className={category === "seyahat" ? "this-category" : "icon"}
            onClick={() => setCategory("seyahat")}
          />
          <IoFastFoodOutline
            className={category === "yemek" ? "this-category" : "icon"}
            onClick={() => setCategory("yemek")}
          />
        </div>
      </div>

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
