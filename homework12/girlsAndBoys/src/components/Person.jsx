import React from "react";

const Person = ({ person, addToFavoriteList }) => {
  return (
    <span
      onClick={() => {
        addToFavoriteList(person);
      }}
      className={`person ${person.sex === "boy" ? "boy" : "girl"}`}>
      {person.name}
    </span>
  );
};
export default Person;
