import React from "react";
import dataCards from "../cardBox";

const CardBox = () => {
  return (
    <div className="max-w-[1255px] mx-auto flex justify-between items-center">
      {dataCards.map((item) => {
        return (
          <div className="bg-[#EFEFEF] hover:bg-[#DEE0E5] duration-150 px-15 cursor-pointer my-4 rounded-xl py-4 flex items-center gap-2">
            <img src={item.image} className="w-[40px]" alt={item.title} />
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CardBox;
