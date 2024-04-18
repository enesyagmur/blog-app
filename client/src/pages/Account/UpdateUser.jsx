import React, { useState } from "react";
import "./updateUser.scss";
import { ImImages } from "react-icons/im";

const UpdateUser = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [image, setImage] = useState(currentUser.image);
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState({});

  const updateUser = async () => {
    if (password) {
      setNewUser({
        name: name,
        email: email,
        image: image,
        password: password,
      });
    } else {
      setNewUser({
        name: name,
        email: email,
        image: image,
      });
    }
    const response = await fetch("/api/user/account", {
      method: "PATCH",
      body: JSON.stringify(newUser),
      headers: { "Content-Type": "application/json" },
    });
    const responseJson = await response.json();

    if (response.ok) {
      alert("kullanıcı güncellendi");
    } else {
      alert(responseJson.hata);
    }
  };

  return (
    <div className="updateUser">
      <p className="title">Profil Güncelleme</p>
      <label className="image" htmlFor="image">
        <p>Profil Resmi</p>
        <ImImages className="icon" />
      </label>
      {/* <input type="file" id="image" style={{ display: "none" }} /> */}
      <label htmlFor="name">Kullanıcı</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Şifre</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={updateUser}>Güncelle</button>
      <button className="delete">Hesabımı Sil</button>
    </div>
  );
};

export default UpdateUser;
