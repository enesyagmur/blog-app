import React, { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const loginFunc = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const responseJson = await response.json();

    if (!response.ok) {
      console.log(responseJson.hata);
    }

    if (response.ok) {
      alert("giriş başarılı");
      navigate("/");
    }
  };

  return (
    <div className="login">
      <form onSubmit={loginFunc}>
        <p className="form-title">Giriş</p>
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
        <button type="submit">Giriş</button>
        <p className="go-register" onClick={() => navigate("/register")}>
          Hesabım Yok!
        </p>
      </form>
    </div>
  );
};

export default Login;
