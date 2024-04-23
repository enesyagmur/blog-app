import React, { useState } from "react";

const ForgetPassword = ({ setShowPasswordReset }) => {
  const [email, setEmail] = useState();
  const [hata, setHata] = useState(null);

  return (
    <div className="forget-password">
      <form>
        <p className="form-title">Şifre Sıfırlama</p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Mail giriniz..."
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Gönder</button>
        {hata && <div className="error">{hata}</div>}

        <p className="go-register" onClick={() => setShowPasswordReset(false)}>
          Giriş Yap
        </p>
      </form>
    </div>
  );
};

export default ForgetPassword;
