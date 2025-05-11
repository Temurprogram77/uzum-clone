import React, { useState } from "react";
import locations from "./cityBase";

import close from "../../assets/close.svg";
import search from "../../assets/search.svg";
import arrow from "../../assets/arrow-right.svg";

const CityModal = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = locations.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <div className="w-full h-[500px] overflow-y-scroll my-5 relative">
          <div className="bg-[#EDEFF2] rounded-xl flex items-center gap-2 mb-3 p-2 sticky top-0">
            <img src={search} alt="search" />
            <input
              className="bg-transparent outline-none w-full font-medium"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Shaharni topish"
            />
          </div>
          <div className="w-full">
            {filteredData.map((location) => {
              return (
                <div className="w-full flex items-center justify-between py-3 px-2 duration-200 cursor-pointer border-b border-[#D7D7D9] hover:bg-[#F5F5F5]">
                  <p>{location}</p>
                  <img src={arrow} alt="arrow" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CityModal;
