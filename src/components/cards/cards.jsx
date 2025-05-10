import React from "react";
import cardsDataBase from "../cardsData";

import verified from "../../assets/verified.png";
import starIcon from "../../assets/star-icon.svg";


const Cards = () => {
  return (
    <div className="max-w-[1255px] my-4 mx-auto flex items-center justify-between gap-2 flex-wrap">
      {cardsDataBase.map((element) => {
        
        return (
          <div key={element.id} className="card-box w-[234px] h-[460px] rounded-2xl overflow-hidden hover:shadow-[0 0 10px red] duration-300 cursor-pointer">
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
            <p className="text-[13px] font-semibold p-2">{(element.title).slice(0,60)}...</p>
            <div className="flex items-center gap-2">
              <img src={starIcon} alt="star icon" />
              <p className="text-[13px] font-semibold text-[#A0A2AA]">{element.star} ({element.comments} sharhlar)</p>
            </div>
              <p className="text-[12px] font-semibold  px-2 rounded-xl bg-[#FFFF00] w-fit">{element.monthlyPayment} so'm/oyiga</p>
              <p className="mt-3 text-[#FF4DB1] text-[12px] font-medium">{element.advancePayment}</p>
              <p className="">{element.money}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
