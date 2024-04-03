import React from "react";
import "./register.scss";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="register">
      <form>
        <p className="form-title">Kayıt</p>
        <p className="form-title">Giriş</p>
        <label htmlFor="name">isim</label>
        <input type="text" id="name" placeholder="İsim giriniz..." />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Mail giriniz..." />
        <label htmlFor="password">Şifre</label>
        <input type="password" id="password" placeholder="Şifre giriniz..." />
        <label htmlFor="image">Resim</label>
        <input type="text" id="image" placeholder="Url giriniz..." />
        <button>Kayıt</button>
        <p className="go-register" onClick={() => navigate("/")}>
          Hesabım Var!
        </p>
      </form>
    </div>
  );
};

export default Register;
