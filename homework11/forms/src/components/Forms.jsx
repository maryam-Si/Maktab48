import React, { useState } from "react";
import SwitchButton from "./SwitchButton";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import "../style/forms.css";
import ForgetPass from "./ForgetPass";
import Response from "./Response";
const Forms = ({ changeFlag, changeInfo, getName }) => {
  const [switchButtons, setSwitchButtons] = useState([
    { id: 1, label: "ثبت نام", isActive: true },
    { id: 2, label: "ورود", isActive: false }
  ]);
  const [currentForm, setCurrentForm] = useState(1);
  const [information, setInformation] = useState(null);
  const routing = id => {
    setCurrentForm(id);
    let newSwitch = switchButtons.map(item =>
      item.id === id
        ? { ...item, isActive: !item.isActive }
        : { ...item, isActive: false }
    );
    setSwitchButtons(newSwitch);
  };
  function changeForm(change) {
    setCurrentForm(change);
  }
  function getInfo(info) {
    changeInfo(info);
  }
  function getname(n) {
    getName(n);
  }
  function flag(c) {
    changeFlag(c);
  }
  console.log(currentForm);
  return (
    <div className="container">
      {currentForm < 3 && (
        <SwitchButton switches={switchButtons} handleClick={routing} />
      )}
      {currentForm === 1 && (
        <RegisterForm getInfo={getInfo} changeFlag={flag} />
      )}
      {currentForm === 2 && (
        <LoginForm
          changeFlag={flag}
          getname={getname}
          changeForm={changeForm}
        />
      )}
      {currentForm === 3 && <ForgetPass changeForm={changeForm} />}
      {currentForm === 4 && <Response changeForm={changeForm} />}
    </div>
  );
};
export default Forms;
