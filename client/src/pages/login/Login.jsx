import React from "react";
import "./login.scss";

const Login = () => {
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
        <p className="go-register">Hesabım Yok!</p>
      </form>
    </div>
  );
};

export default Login;
