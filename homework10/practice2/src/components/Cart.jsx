import React, { useState } from "react";

const Cart = ({ cart }) => {
  const [addclass, setAddclass] = useState(false);
  function handleClick() {
    setAddclass(true);
  }
  return (
    <div className="cart" onClick={handleClick}>
      <div className="img-container">
        <img src={cart.imgUrl} alt="" />
      </div>
      <p>{cart.cartTitle}</p>
      <div className={addclass ? "green-footer" : ""}></div>
    </div>
  );
};

export default Cart;
