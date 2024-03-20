import React from "react";
import "./write.scss";
import { GoPlusCircle } from "react-icons/go";

const Write = () => {
  return (
    <div className="write">
      <img
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <input className="title" type="text" placeholder="Başlık" />
      <GoPlusCircle className="title-icon" />

      <textarea
        name=""
        id=""
        cols="30"
        rows="30"
        placeholder="Herhangi bir metin yazın..."
      ></textarea>

      <button>Yayınla</button>
    </div>
  );
};

export default Write;
