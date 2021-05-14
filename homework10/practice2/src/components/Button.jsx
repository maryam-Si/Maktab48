import React from "react";
import Proptypes from "prop-types";
import "../style/main.css";

const Button = ({ title, classes }) => {
  return <button className={`btn ${classes}`}>{title}</button>;
};
export default Button;
Button.propTypes = {
  title: Proptypes.string,
  classes: Proptypes.string
};
