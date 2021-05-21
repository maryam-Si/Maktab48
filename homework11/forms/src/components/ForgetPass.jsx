import React, { useState } from "react";
import "../style/forget.css";

const ForgetPass = ({ changeForm }) => {
  const [email, setEmail] = useState("");
  return (
    <div className="login-container">
      <h1> بازیابی کلمه عبور</h1>
      <form action="#">
        <input
          type="text"
          value={email}
          placeholder="پست الکترونیک"
          onChange={e => setEmail(e.target.value)}
        />
        <button
          type="submit "
          className="btn btn-submit"
          onClick={() => {
            changeForm(4);
          }}>
          ارسال
        </button>
      </form>
    </div>
  );
};
export default ForgetPass;
