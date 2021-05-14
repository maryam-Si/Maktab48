import React from "react";
import Cart from "./Cart";
import "../style/main.css";
import "../style/carts.css";
const MyCarts = ({ carts }) => {
  return (
    <div className="cart-container">
      {carts.map(cart => (
        <Cart key={cart.id} cart={cart} />
      ))}
    </div>
  );
};
export default MyCarts;
