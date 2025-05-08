import React from "react";
import cardsDataBase from "./cardsData";

const Cards = () => {
  return <div>{cardsDataBase.map((element) => {
    return <p>{element.title}</p>;
  })}
  </div>;
};

export default Cards;
