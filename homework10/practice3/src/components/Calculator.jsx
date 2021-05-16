import React, { useState } from "react";
import Button from "./Button";
import "../style/calculator.css";
import Input from "./Input";
import ClearButton from "./ClearButton";
const Calculator = () => {
  const [input, setInput] = useState("");
  const [prevNumber, setPrevNumber] = useState("");
  const [currentNumber, setCurrentNumber] = useState("");
  const [operator, setOperator] = useState("");

  function addInput(val) {
    setInput(input + val);
    setCurrentNumber(input + val);
  }
  function addZero(val) {
    if (input !== "") {
      setInput(input + val);
    }
  }
  function addDecimalPoint(val) {
    if (input.indexOf(".") === -1) {
      setInput(input + val);
    }
  }
  function clearInput() {
    setInput("");
  }
  function add() {
    setPrevNumber(currentNumber);
    setCurrentNumber("");
    setInput("");
    setOperator("plus");
  }
  function subtraction() {
    setPrevNumber(currentNumber);
    setCurrentNumber("");
    setInput("");
    setOperator("minus");
  }
  function divide() {
    setPrevNumber(currentNumber);
    setCurrentNumber("");
    setInput("");
    setOperator("divide");
  }
  function multiply() {
    setPrevNumber(currentNumber);
    setInput("");
    setCurrentNumber("");
    setOperator("multiply");
  }
  function equal() {
    setCurrentNumber(input);

    switch (operator) {
      case "plus":
        setInput(parseInt(prevNumber) + parseInt(currentNumber));
        setCurrentNumber(parseInt(prevNumber) + parseInt(currentNumber));

        break;
      case "minus":
        setInput(parseInt(prevNumber) - parseInt(currentNumber));
        setCurrentNumber(parseInt(prevNumber) - parseInt(currentNumber));
        break;
      case "divide":
        setInput(parseInt(prevNumber) / parseInt(currentNumber));
        setCurrentNumber(parseInt(prevNumber) / parseInt(currentNumber));
        break;
      case "multiply":
        setInput(parseInt(prevNumber) * parseInt(currentNumber));
        setCurrentNumber(parseInt(prevNumber) * parseInt(currentNumber));
        break;

      default:
        break;
    }
  }

  return (
    <div className="calc-wrapper">
      <div className="row">
        <Input input={input} />
      </div>
      <div className="row">
        <Button
          title="7"
          handleClick={() => {
            addInput("7");
          }}
        />
        <Button
          title="8"
          handleClick={() => {
            addInput("8");
          }}
        />
        <Button
          title="9"
          handleClick={() => {
            addInput("9");
          }}
        />
        <Button title="/" handleClick={divide} />
      </div>
      <div className="row">
        <Button
          title="4"
          handleClick={() => {
            addInput("4");
          }}
        />
        <Button
          title="5"
          handleClick={() => {
            addInput("5");
          }}
        />
        <Button
          title="6"
          handleClick={() => {
            addInput("6");
          }}
        />
        <Button title="*" handleClick={multiply} />
      </div>
      <div className="row">
        <Button
          title="1"
          handleClick={() => {
            addInput("1");
          }}
        />
        <Button
          title="2"
          handleClick={() => {
            addInput("2");
          }}
        />
        <Button
          title="3"
          handleClick={() => {
            addInput("3");
          }}
        />
        <Button title="+" handleClick={add} />
      </div>
      <div className="row">
        <Button
          title="."
          handleClick={() => {
            addDecimalPoint(".");
          }}
        />
        <Button
          title="0"
          handleClick={() => {
            addZero("0");
          }}
        />
        <Button title="=" handleClick={equal} />
        <Button title="-" handleClick={subtraction} />
      </div>
      <ClearButton clearInput="clear" handleClick={clearInput} />
    </div>
  );
};
export default Calculator;
