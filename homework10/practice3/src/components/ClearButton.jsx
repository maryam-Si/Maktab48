import React from "react";
import "../style/clearButton.css";

const ClearButton = ({ clearInput, handleClick }) => {
  return (
    <div className="clear-btn" onClick={handleClick}>
      {clearInput}
    </div>
  );
};
export default ClearButton;
