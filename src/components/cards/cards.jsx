import React from "react";
import cardsDataBase from "./cardsData";

const Cards = () => {
  return (
    <div>
      {cardsDataBase.map((element) => {
        return <div className="card-box">
          <div className="image"></div>
          
        </div>;
      })}
    </div>
  );
};

export default Cards;
