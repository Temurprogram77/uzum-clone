import React from "react";
import locations from "./cityBase";

import close from "../../assets/close.svg";
import search from "../../assets/search.svg";

const CityModal = ({ onClose }) => {
  return (
    <>
      <div
        onClick={onClose}
        className="w-full h-full bg-[#00000084] fixed top-0 z-10"
      ></div>
      <div className="bg-white w-[660px] fixed z-11 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-xl">
        <div className="flex items-center justify-between">
          <h2 className="text-[22px] font-medium">Shaharni tanlang</h2>
          <img
            onClick={onClose}
            className="cursor-pointer"
            src={close}
            alt="close"
          />
        </div>
        <div className="w-full h-[500px] overflow-y-scroll my-5">
          <div className="bg-[#EDEFF2] rounded-xl flex items-center gap-2 mb-3 p-2">
            <img src={search} alt="search" />
            <input
              className="bg-transparent outline-none w-full font-medium"
              type="text"
              placeholder="Shaharni topish"
            />
          </div>
          <div className="w-full">
            {locations.map((location)=>{
              return <div className="w-full flex items-center justify-between">
                <p>{location}</p>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CityModal;
