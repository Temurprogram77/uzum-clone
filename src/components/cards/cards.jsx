import React from "react";
import cardsDataBase from "../cardsData";

import verified from "../../assets/verified.png";

const Cards = () => {
  return (
    <div className="max-w-[1255px] mx-auto flex items-center justify-between flex-wrap">
      {cardsDataBase.map((element) => {
        return (
          <div className="card-box w-[234px] h-[460px] rounded-2xl overflow-hidden">
            <div className="image relative">
              <img
                className="relative"
                src={element.image}
                alt={element.title}
              />
              {element.bigSale && (
                <p className="absolute bottom-1 bg-[#FFFF00] left-1 flex items-center gap-1 px-2 py-[2px] text-[10px] font-semibold rounded-2xl">Katta Savdo</p>
              )}
              {element.original && (
                <p className="absolute bottom-1 left-1 flex items-center gap-1 bg-white px-2 py-[2px] text-[10px] font-semibold rounded-2xl"><img className="w-[15px] h-[15px]" src={verified} alt="verified" /> Original</p>
              )}
            </div>
            <p className="title">{element.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
