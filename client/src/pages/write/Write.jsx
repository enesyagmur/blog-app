import React, { useState } from "react";
import "./write.scss";
import { GoPlusCircle } from "react-icons/go";
import { FiMusic } from "react-icons/fi";
import { IoIosFitness } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { IoAirplaneOutline } from "react-icons/io5";
import { IoFastFoodOutline } from "react-icons/io5";
import FileBase from "react-file-base64";

const Write = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(
    "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  );
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const createBlog = async () => {
    const blog = {
      category,
      title,
      text,
      image,
      authorName: currentUser.name,
      authorEmail: currentUser.email,
      authorImage: currentUser.image,
    };

    const response = await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setTitle("");
      setText("");
      setCategory("");
      setImage(
        "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      );
      alert("Blog oluşturuldu");
    }
  };

  return (
    <div className="write">
      <label>
        <img src={image} alt="" />
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setImage(base64)}
        />
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
            className={category === "sağlık" ? "this-category" : "icon"}
            onClick={() => setCategory("sağlık")}
          />
          <IoAirplaneOutline
            className={category === "seyahat" ? "this-category" : "icon"}
            onClick={() => setCategory("seyahat")}
          />
          <IoFastFoodOutline
            className={category === "eğlence" ? "this-category" : "icon"}
            onClick={() => setCategory("eğlence")}
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
