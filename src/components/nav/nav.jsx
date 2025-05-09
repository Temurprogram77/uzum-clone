import React from "react";
import location from  "../../assets/location.svg"
import arrow from  "../../assets/arrow.svg"

const Nav = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1255px] mx-auto">
        <div className="">
          <div className="">
            <img src={location} alt="location" />
            Toshkent
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
