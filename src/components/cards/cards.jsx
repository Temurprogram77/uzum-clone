import React from "react";
import cardsDataBase from "../cardsData";

const Cards = () => {
  return (
    <div>
      {cardsDataBase.map((element) => {
        return (
          <div className="card-box">
            <div className="image">
              <img src={element.image} alt={element.title} />
              <p>{element.bigSale && "Katta Savdo"}</p>
            </div>
            <p className="title">{element.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
