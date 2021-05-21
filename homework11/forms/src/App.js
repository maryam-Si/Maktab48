import React, { useState } from "react";
import Information from "./components/Information";
import "./App.css";
import Forms from "./components/Forms";
import Welcome from "./components/Welcome";

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [name, setName] = useState("");
  const [flag, setFlag] = useState(0);
  function changeFlag(page) {
    setFlag(page);
  }
  function changeInfo(info) {
    setUserInfo(info);
  }
  function getName(name) {
    setName(name);
  }
  return (
    <div className="App">
      {flag === 5 && <Information information={userInfo} />}
      {flag === 6 && <Welcome information={name} />}
      {flag === 0 && (
        <div className="background">
          <Forms
            changeFlag={changeFlag}
            changeInfo={changeInfo}
            getName={getName}
          />
        </div>
      )}
    </div>
  );
}

export default App;
