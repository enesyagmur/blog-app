import React from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <form>
        <p className="form-title">Giriş</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Mailinizi giriniz..." />
        <label htmlFor="password">Şifre</label>
        <input
          type="password"
          id="password"
          placeholder="Şifrenizi giriniz..."
        />
        <button>Giriş</button>
        <p className="go-register" onClick={() => navigate("/register")}>
          Hesabım Yok!
        </p>
      </form>
    </div>
  );
};

export default Login;
