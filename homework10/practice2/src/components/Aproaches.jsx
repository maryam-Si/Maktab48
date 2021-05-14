import React from "react";
import Aproach from "./Aproach";
import "../style/main.css";
import "../style/aproaches.css";

const Aproaches = ({ aproaches }) => {
  return (
    <div className="content">
      {aproaches.map(cart => (
        <Aproach key={cart.id} cart={cart} />
      ))}
    </div>
  );
};
export default Aproaches;
