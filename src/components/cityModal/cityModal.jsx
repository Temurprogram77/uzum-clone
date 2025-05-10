import React from "react";

import close from "../../assets/close.svg";

const CityModal = () => {
  return (
    <>
      <div className="w-full h-full bg-[#0000003e] fixed"></div>
      <div className="">
        <div className="">
          <h2>Shaharni tanlang</h2>
          <img src={close} alt="close" />
        </div>
        <input type="text" />
        <div className="">
            
        </div>
      </div>
    </>
  );
};

export default CityModal;
