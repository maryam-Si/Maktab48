import React from "react";
import Favorite from "./Favorite";

const Favorites = ({ favorites, deleteFavorite }) => {
  return (
    <div className="favorites">
      <h2>Your Favorite</h2>
      <div className="favorite">
        {favorites.map(favor => {
          return (
            <Favorite
              key={favor.id}
              favorite={favor}
              handleDelete={deleteFavorite}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Favorites;
