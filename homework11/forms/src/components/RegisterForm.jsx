import React, { useState } from "react";
import "../style/register.css";
import showPassword from "../assets/images/view.svg";
import hidePassword from "../assets/images/visibility.svg";

const RegisterForm = ({ getInfo, changeFlag }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [degree, setDegree] = useState("");
  const [educationPlace, setEducationPlace] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [errors, setErrors] = useState({});
  let information = {
    name,
    lastName,
    email,
    degree,
    educationPlace,
    province,
    city
  };
  const handleSelect = e => {
    setDegree(e.target.value);
  };
  const handleSelectProvince = e => {
    setProvince(e.target.value);
  };

  const PROVINCE = [
    { id: 1, name: "تهران", city: ["ورامین", "تهران"] },
    { id: 2, name: "البرز", city: ["کرج", "طالقان"] },
    { id: 3, name: "فارس", city: ["آباده", "شیراز"] },
    { id: 4, name: "مازندران", city: ["آمل", "رامسر"] },
    { id: 5, name: "اصفهان", city: ["شاهین شهر", "اصفهان"] },
    { id: 6, name: "خوزستان", city: ["اهواز", "آبادان"] },
    { id: 7, name: "آذربایجان شرقی", city: ["تبریز", "خوی"] },
    { id: 8, name: "لرستان", city: ["خرم آباد", "الیگودرز"] },
    { id: 9, name: "کردستان", city: ["سنندج", "بانه"] },
    { id: 10, name: "گیلان", city: ["لاهیجان", "فومن"] }
  ];
  const handleValidation = () => {
    let errors = {};
    let formIsValid = true;

    //Name
    if (!name) {
      formIsValid = false;
      errors["name"] = "لطفا نام خود را وارد کنید";
    }

    if (name) {
      if (!name.match(/^[\u0600-\u06FF\s]+$/)) {
        formIsValid = false;
        errors["name"] = " نام معتبر نیست";
      }
    }
    //lastName
    if (!lastName) {
      formIsValid = false;
      errors["lastName"] = "لطفا نام خانوادگی خود را وارد کنید";
    }

    if (lastName) {
      if (!lastName.match(/^[\u0600-\u06FF\s]+$/)) {
        formIsValid = false;
        errors["lastName"] = " نام خانوادگی معتبر نیست";
      }
    }
    //degree
    if (!degree) {
      formIsValid = false;
      errors["degree"] = "لطفا تحصیلات خود را وارد کنید";
    }

    //educationPlace
    if (degree && !educationPlace) {
      formIsValid = false;
      errors["educationPlace"] = "لطفا محل تحصیل خود را وارد کنید";
    }

    //provice
    if (!province) {
      formIsValid = false;
      errors["province"] = "لطفا نام استان را وارد کنید";
    }

    //city
    if (province && !city) {
      formIsValid = false;
      errors["city"] = "لطفا نام شهر  را وارد کنید";
    }

    //Email
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
      getInfo(information);
      changeFlag(5);
    } else {
      alert("فرم دارای خطاست");
    }
  };

  return (
    <div className="register-container">
      <h1>رایگان ثبت نام کنید</h1>

      <form action="#" onSubmit={contactSubmit}>
        <div className="inline">
          <div>
            <input
              type="text"
              value={lastName}
              placeholder="نام خانوادگی"
              className="inline-btn"
              onChange={e => setLastName(e.target.value)}
            />
            <p style={{ color: "red" }}>{errors["lastName"]}</p>
            <br />
          </div>
          <div>
            <input
              type="text"
              value={name}
              placeholder="نام"
              className="inline-btn"
              onChange={e => setName(e.target.value)}
            />
            <p style={{ color: "red" }}>{errors["name"]}</p>
            <br />
          </div>
        </div>

        <div className="select-container">
          <select value={degree} onChange={handleSelect}>
            <option value=""> </option>
            <option value="دیپلم">دیپلم</option>
            <option value="کارشناسی">کارشناسی</option>
            <option value="کارشناسی ارشد">کارشناسی ارشد</option>
            <option value="دکترا">دکترا</option>
          </select>
          <label htmlFor="">: تحصیلات</label>
        </div>
        <p style={{ color: "red" }}>{errors["degree"]}</p>
        <br />
        {degree && (
          <input
            type="text"
            value={educationPlace}
            placeholder="محل تحصیل"
            onChange={e => setEducationPlace(e.target.value)}
          />
        )}
        <p style={{ color: "red" }}>{errors["educationPlace"]}</p>
        <br />

        <div className="select-container">
          <select value={province} onChange={handleSelectProvince}>
            <option value="">---انتخاب استان--- </option>
            {PROVINCE.map(option => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
          <label htmlFor="">: محل تولد</label>
          <p style={{ color: "red" }}>{errors["province"]}</p>
          <br />
          {province && (
            <select value={city} onChange={e => setCity(e.target.value)}>
              <option value="">---انتخاب شهر--- </option>
              {PROVINCE.find(p => p.name === province).city.map(p => (
                <option key={p.id} value={p}>
                  {p}
                </option>
              ))}
            </select>
          )}
          <p style={{ color: "red" }}>{errors["city"]}</p>
          <br />
        </div>
        <input
          type="text"
          value={email}
          placeholder="پست الکترونیک"
          onChange={e => setEmail(e.target.value)}
        />
        <p style={{ color: "red" }}>{errors["email"]}</p>
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
        <p style={{ color: "red" }}>{errors["password"]}</p>
        <br />
        <button type="submit " className="btn btn-submit">
          ثبت نام
        </button>
      </form>
    </div>
  );
};
export default RegisterForm;
