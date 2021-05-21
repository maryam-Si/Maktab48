import React from "react";
import "../style/information.css";
const Information = ({ information }) => {
  return (
    <div className="info-container">
      <ul>
        <li>{information.name}</li>
        <li>{information.lastName}</li>
        <li>{information.lastName}</li>
        <li>{information.email}</li>
        <li>{information.degree}</li>
        <li>{information.educationPlace}</li>
        <li>{information.province}</li>
        <li>{information.city}</li>
      </ul>
    </div>
  );
};
export default Information;
