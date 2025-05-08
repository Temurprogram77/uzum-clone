import React from "react";
import cardsDataBase from "../cardsData";

import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";

const images = {
  "1.jpg": img1,
  "2.jpg": img2,
  "3.jpg": img3,
  "4.jpg": img4,
  "5.jpg": img5,
};

const Cards = () => {
  return (
    <div className="max-w-[1255px] mx-auto flex items-center justify-between">
      {cardsDataBase.map((element) => {
        return (
          <div className="card-box w-[234px] h-[460px] rounded-2xl overflow-hidden">
            <div className="image">
              <img src={images[element.image]} alt={element.title} />
              <p>{element.bigSale && "Katta Savdo"}</p>
              <p>{element.original && "Original"}</p>
            </div>
            <p className="title">{element.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
