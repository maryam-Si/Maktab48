import React from "react";
import "../style/button.css";

const Button = ({ title, handleClick }) => {
  const isOperator = val => {
    return !isNaN(val) || val === "=" || val === ".";
  };
  return (
    <div
      className={`button ${isOperator(title) ? "" : "operator"}`}
      onClick={handleClick}>
      {title}
    </div>
  );
};
export default Button;
