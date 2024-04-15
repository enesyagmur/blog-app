import React from "react";
import "./updateUser.scss";
import { ImImages } from "react-icons/im";

const UpdateUser = () => {
  return (
    <div className="updateUser">
      <p className="title">Profil Güncelleme</p>
      <label className="image" htmlFor="image">
        <p>Profil Resmi</p>
        <ImImages className="icon" />
      </label>
      {/* <input type="file" id="image" style={{ display: "none" }} /> */}
      <label htmlFor="user">Kullanıcı</label>
      <input type="text" id="user" />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" />
      <label htmlFor="sifre">Şifre</label>
      <input type="password" id="sifre" />
      <button>Güncelle</button>
      <button className="delete">Hesabımı Sil</button>
    </div>
  );
};

export default UpdateUser;
