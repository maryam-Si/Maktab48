import React, { useState } from "react";
import "../style/login.css";
import showPassword from "../assets/images/view.svg";
import hidePassword from "../assets/images/visibility.svg";

const LoginForm = ({ changeForm, getname, changeFlag }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    let errors = {};
    let formIsValid = true;
    if (!email) {
      formIsValid = false;
      errors["email"] = "لطفا ایمیل خود را وارد کنید";
    }

    if (email) {
      if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        formIsValid = false;
        errors["email"] = " ایمیل معتبر نیست";
      }
    }
    //password
    if (!password) {
      formIsValid = false;
      errors["password"] = "لطفا کلمه عبور خود را وارد کنید";
    }

    setErrors(errors);
    return formIsValid;
  };
  const contactSubmit = e => {
    e.preventDefault();

    if (handleValidation()) {
      alert(" ثبت نام موفقیت آمیز بود");
      changeFlag(6);
      getname(email.substring(0, email.indexOf("@")));
    } else {
      alert("فرم دارای خطاست");
    }
  };
  return (
    <div className="login-container">
      <h1>خوش آمدید</h1>

      <form action="#" onSubmit={contactSubmit}>
        <input
          type="text"
          value={email}
          placeholder="پست الکترونیک"
          onChange={e => setEmail(e.target.value)}
        />

        <div style={{ color: "red" }}>{errors["email"]}</div>
        <br />
        <div className="pass-container">
          <input
            type={showPass ? "text" : "password"}
            value={password}
            placeholder="کلمه عبور"
            onChange={e => setPassword(e.target.value)}
          />
          <img
            alt={showPass ? "hidePassword" : "showPassword"}
            src={showPass ? hidePassword : showPassword}
            onClick={() => setShowPass(!showPass)}
          />
        </div>
        <div style={{ color: "red" }}>{errors["password"]}</div>
        <br />
        <p
          onClick={() => {
            changeForm(3);
          }}>
          فراموش کردید؟
        </p>
        <button type="submit " className="btn btn-submit">
          ورود
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
