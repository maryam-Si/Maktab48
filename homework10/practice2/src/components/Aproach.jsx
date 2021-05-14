import React from "react";

const Aproach = ({ cart }) => {
  return (
    <div className="cart">
      <div className="img-container">
        <img src={cart.imgUrl} alt="" />
      </div>
      <p>{cart.cartTitle}</p>
    </div>
  );
};
export default Aproach;
