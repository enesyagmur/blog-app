import React from "react";
import "./register.scss";

const Register = () => {
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
        <p className="go-register">Hesabım Var!</p>
      </form>
    </div>
  );
};

export default Register;
