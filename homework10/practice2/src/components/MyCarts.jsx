import React, { useState } from "react";
import Cart from "./Cart";
import "../style/main.css";
import "../style/carts.css";
const MyCarts = ({ carts, handleClick }) => {
  return (
    <div className="cart-container">
      {carts.map(cart => (
        <Cart
          key={cart.id}
          cart={cart}
          id={cart.id}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
export default MyCarts;
