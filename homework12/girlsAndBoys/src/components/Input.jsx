import React, { useState, useEffect } from "react";

const Input = ({ handleFilter }) => {
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    handleFilter(inputValue);
  }, [inputValue]);
  const handleClick = () => {
    setInputValue("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="filter"
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
        }}
      />
      {inputValue && (
        <button className="btn btn--blue" onClick={handleClick}>
          clear search
        </button>
      )}
    </div>
  );
};
export default Input;
