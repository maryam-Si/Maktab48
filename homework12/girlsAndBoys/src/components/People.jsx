import React, { useState } from "react";
import Person from "./Person";
import Favorites from "./Favorites";
const People = ({ people }) => {
  const [favorites, setFavorites] = useState(null);
  function addToFavoriteList(add) {
    setFavorites(favorites ? [...favorites, add] : [add]);
  }
  function deleteFavorite(id) {
    setFavorites(favorites.filter(favorite => favorite.id !== id));
  }
  console.log(favorites ? "true" : "false");
  return (
    <div className="people">
      {favorites && (
        <Favorites favorites={favorites} deleteFavorite={deleteFavorite} />
      )}
      {people.map(person => {
        return (
          <Person
            key={person.id}
            person={person}
            addToFavoriteList={addToFavoriteList}
          />
        );
      })}
    </div>
  );
};
export default People;
