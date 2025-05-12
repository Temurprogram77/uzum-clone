import React from "react";
import searchCardsDataBase from "../data/searchCard";

import verified from "../../assets/verified.png";
import starIcon from "../../assets/star-icon.svg";
import basket from "../../assets/basket.svg";

const SearchModal = ({onClose}) => {
  return (
    <>
      <div onClick={onClose} className="bg-[#0000007a] fixed left-0 w-full h-full z-10"></div>
      <div className="bg-white px-3 pb-4 max-w-[520px] h-[600px] mx-auto fixed z-11 left-1/2 transform -translate-x-1/2 flex flex-wrap overflow-y-scroll">
        <div className="text-[20px] font-semibold py-2 sticky w-full top-0 z-10 bg-[#ffffffdd]">Tavsiya etamiz</div>
        <div className=" flex flex-wrap justify-between">
          {searchCardsDataBase.map((element) => {
            return (
              <div
                key={element.id}
                className="card-box md:w-[150px] w-[177px] md:h-[350px] h-[400px] rounded-2xl hover:shadow-md overflow-hidden hover:shadow-[0 0 10px red] duration-300 cursor-pointer relative"
              >
                <div className="image relative md:h-[200px] h-[230px] overflow-hidden rounded-2xl">
                  <img
                    className="relative image-card"
                    src={element.image}
                    alt={element.title}
                  />
                  {element.bigSale && (
                    <p className="absolute bottom-1 bg-[#FFFF00] left-1 flex items-center gap-1 px-1 py-[1px] text-[9px] font-semibold rounded-2xl">
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
                <p className="text-[13px] font-semibold p-2 leading-3">
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
      </div>
    </>
  );
};

export default SearchModal;
