import React, { useState } from "react";

const Cart = ({ cart, handleClick }) => {
  return (
    <div
      className="cart"
      onClick={() => {
        handleClick(cart.id);
      }}>
      <div className="img-container">
        <img src={cart.imgUrl} alt="" />
      </div>
      <a href="#">{cart.cartTitle}</a>
      <div className={cart.isActive && "green-footer"}></div>
    </div>
  );
};

export default Cart;
