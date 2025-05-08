import React from "react";
import cardsDataBase from "../cardsData";

import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";

const images = {
  "1.jpg": img1,
  "2.jpg": img2,
};

const Cards = () => {
  return (
    <div>
      {cardsDataBase.map((element) => {
        return (
          <div className="card-box w-[200px] overflow-hidden">
            <div className="image">
              <img src={images[element.image]} alt={element.title} />
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
