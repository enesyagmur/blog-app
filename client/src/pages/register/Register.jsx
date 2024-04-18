import React, { useState } from "react";
import "./register.scss";
import { useNavigate } from "react-router-dom";
import FileBase from "react-file-base64";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [hata, setHata] = useState(null);

  const navigate = useNavigate();
  const signupFunc = async (e) => {
    e.preventDefault();
    setHata(null);

    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, image }),
    });

    const responseJson = await response.json();

    if (!response.ok) {
      setHata(responseJson.hata);
    }
    if (response.ok) {
      alert("Kayıt başarılı");
      navigate("/");
    }
  };

  return (
    <div className="register">
      <form onSubmit={signupFunc}>
        <p className="form-title">Kayıt</p>
        <label htmlFor="name" className="input-title">
          isim
        </label>
        <input
          className="form-input"
          type="text"
          id="name"
          placeholder="İsim giriniz..."
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email" className="input-title">
          Email
        </label>
        <input
          className="form-input"
          type="email"
          id="email"
          placeholder="Mail giriniz..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="input-title">
          Şifre
        </label>
        <input
          className="form-input"
          type="password"
          id="password"
          placeholder="Şifre giriniz..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="image" className="form-input">
          Resim
        </label>

        <label className="image-label">
          <img
            src="https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setImage(base64)}
          />
        </label>
        <button type="submit">Kayıt</button>
        {hata && <div className="error">{hata}</div>}
        <p className="go-register" onClick={() => navigate("/")}>
          Hesabım Var!
        </p>
      </form>
    </div>
  );
};

export default Register;
