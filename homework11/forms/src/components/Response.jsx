import React from "react";

const Response = ({ changeForm }) => {
  return (
    <div className="login-container">
      <h1> کلمه عبور ارسال شد</h1>

      <button
        type="submit "
        className="btn btn-submit"
        onClick={() => {
          changeForm(2);
        }}>
        ورود مجدد
      </button>
    </div>
  );
};
export default Response;
