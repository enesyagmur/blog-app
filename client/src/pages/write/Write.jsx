import React, { useState } from "react";
import "./write.scss";
import { GoPlusCircle } from "react-icons/go";

const Write = () => {
  const [text, setText] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. At deserunt saepe obcaecati quis temporibus reiciendis a dicta placeat, eum ipsum quas vitae dolorem voluptate harum commodi error ut molestiae, neque optio? Aliquam consequatur nam, ad harum, expedita quasi aut nobis quaerat voluptates, nihil perspiciatis velit consectetur ex? Pariatur ab voluptas mollitia magnam, cupiditate illum nihil obcaecati at asperiores. Non ratione a inventore fugit sunt reprehenderit repellendus porro consectetur ea animi laudantium numquam veritatis, accusantium ipsum facere sequi vitae reiciendis ad, obcaecati sint voluptate possimus atque iure. Minus necessitatibus, similique totam adipisci vero maxime culpa qui fugiat doloremque enim ut iure."
  );
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

      <input className="title" type="text" placeholder="Başlık" />

      <textarea
        name=""
        id=""
        cols="30"
        rows="20"
        placeholder="Herhangi bir metin yazın..."
        value={text}
      ></textarea>

      <button>Yayınla</button>
    </div>
  );
};

export default Write;
