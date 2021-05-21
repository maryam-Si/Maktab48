import React from "react";

const SwitchButton = ({ switches, handleClick, classes }) => {
  return (
    <div>
      {switches.map(item => {
        return (
          <button
            className={`btn ${item.isActive ? "active" : ""}`}
            onClick={() => {
              handleClick(item.id);
            }}
            key={item.id}>
            {item.label}
          </button>
        );
      })}
    </div>
  );
};
export default SwitchButton;
