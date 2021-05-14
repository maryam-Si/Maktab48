import React, { useState } from "react";

const Cart = ({ cart }) => {
  const [addclass, setAddclass] = useState("");
  function handleClick() {
    setAddclass(cart.id);
  }
  return (
    <div className="cart" onClick={handleClick}>
      <div className="img-container">
        <img src={cart.imgUrl} alt="" />
      </div>
      <p>{cart.cartTitle}</p>
      <div className={addclass == cart.id ? "green-footer" : ""}></div>
    </div>
  );
};

export default Cart;
