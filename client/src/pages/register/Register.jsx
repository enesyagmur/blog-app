import React from "react";
import "./register.scss";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="register">
      <form>
        <p className="form-title">Kayıt</p>
        <label htmlFor="email">Kullanıcı Adı</label>
        <input type="email" id="email" placeholder="Kullanıcı adı giriniz..." />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Mailinizi giriniz..." />
        <label htmlFor="password">Şifre</label>
        <input
          type="password"
          id="password"
          placeholder="Şifrenizi giriniz..."
        />
        <button>Kayıt</button>
        <p className="go-register" onClick={() => navigate("/")}>
          Hesabım Var!
        </p>
      </form>
    </div>
  );
};

export default Register;
