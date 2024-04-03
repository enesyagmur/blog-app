import React, { useState } from "react";
import "./register.scss";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const signupFunc = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, image }),
    });

    const responseJson = await response.json();

    if (!response.ok) {
      console.log(responseJson.hata);
    }
    if (response.ok) {
      alert("Kayıt başarılı");
      navigate("/login");
    }
  };

  return (
    <div className="register">
      <form onSubmit={signupFunc}>
        <p className="form-title">Kayıt</p>
        <p className="form-title">Giriş</p>
        <label htmlFor="name">isim</label>
        <input
          type="text"
          id="name"
          placeholder="İsim giriniz..."
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Mail giriniz..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Şifre</label>
        <input
          type="password"
          id="password"
          placeholder="Şifre giriniz..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="image">Resim</label>
        <input
          type="text"
          id="image"
          placeholder="Url giriniz..."
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Kayıt</button>
        <p className="go-register" onClick={() => navigate("/")}>
          Hesabım Var!
        </p>
      </form>
    </div>
  );
};

export default Register;
