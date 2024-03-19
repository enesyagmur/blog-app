import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <p className="login-title">Giriş</p>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Şifre</label>
        <input type="password" id="password" />
        <button>Giriş</button>
      </form>
    </div>
  );
};

export default Login;
