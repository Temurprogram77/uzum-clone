import React from "react";
import cardsDataBase from "../data/cardsData";

import verified from "../../assets/verified.png";
import starIcon from "../../assets/star-icon.svg";
import basket from "../../assets/basket.svg";
import arrow from "../../assets/arrow-right2.svg";

const Cards = () => {
  return (
    <>
      <h2 className="text-[30px] cursor-pointer items-end font-bold max-w-[1255px] mx-auto md:flex hidden">
        Mashhur <img src={arrow} alt="arrow" />
      </h2>
      <div className="max-w-[1255px] my-4 mx-auto flex items-center justify-between gap-5 flex-wrap">
        {cardsDataBase.map((element) => {
          return (
            <div
              key={element.id}
              className="card-box w-[234px] h-[470px] rounded-2xl hover:shadow-md overflow-hidden hover:shadow-[0 0 10px red] duration-300 cursor-pointer relative"
            >
              <div className="image relative h-[310px] overflow-hidden rounded-2xl">
                <img
                  className="relative image-card"
                  src={element.image}
                  alt={element.title}
                />
                {element.bigSale && (
                  <p className="absolute bottom-1 bg-[#FFFF00] left-1 flex items-center gap-1 px-2 py-[2px] text-[10px] font-semibold rounded-2xl">
                    Katta Savdo
                  </p>
                )}
                {element.original && (
                  <p className="absolute bottom-1 left-1 flex items-center gap-1 bg-white px-2 py-[2px] text-[10px] font-semibold rounded-2xl">
                    <img
                      className="w-[15px] h-[15px]"
                      src={verified}
                      alt="verified"
                    />{" "}
                    Original
                  </p>
                )}
              </div>
              <p className="text-[13px] font-semibold p-2">
                {element.title.slice(0, 60)}...
              </p>
              <div className="flex items-center gap-2 px-2">
                <img src={starIcon} alt="star icon" />
                <p className="text-[13px] font-semibold text-[#A0A2AA]">
                  {element.star} ({element.comments} sharhlar)
                </p>
              </div>
              <p className="text-[12px] font-semibold mx-2 px-2 rounded-xl bg-[#FFFF00] w-fit">
                {element.monthlyPayment} so'm/oyiga
              </p>
              <p className="mt-3 text-[#FF4DB1] px-2 text-[12px] font-medium">
                {element.advancePayment}
              </p>
              <p className="px-2">{element.money}</p>
              <div className="absolute bottom-2 right-2 border-1 border-[#EAEAEB] hover:bg-[#DEE0E5] duration-150 p-1 rounded-full">
                <img src={basket} alt="basket" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
