import React from "react";
import location from "../../assets/location.svg";
import arrow from "../../assets/arrow.svg";

const Nav = () => {
  return (
    <div className="w-full bg-[#F0F2F5] py-1">
      <div className="max-w-[1255px] mx-auto flex items-center justify-between">
        <div className="flex">
          <div className="flex gap-1">
            <img src={location} alt="location" />
            Toshkent
            <img src={arrow} alt="arrow" />
          </div>
          <p className="font-normal text-[14px]">Topshirish punktlari</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
