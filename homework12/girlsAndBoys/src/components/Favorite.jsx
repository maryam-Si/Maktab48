import React from "react";
import { FiXCircle } from "react-icons/fi";

const Favorite = ({ favorite, handleDelete }) => {
  return (
    <span
      onClick={() => handleDelete(favorite.id)}
      className={`person ${favorite.sex === "boy" ? "boy" : "girl"}`}>
      {favorite.name}
      <FiXCircle />
    </span>
  );
};
export default Favorite;
