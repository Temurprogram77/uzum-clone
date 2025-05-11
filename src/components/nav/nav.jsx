import React, { useState } from "react";
import location from "../../assets/location.svg";
import arrow from "../../assets/arrow.svg";
import uzb from "../../assets/uzb.png";
import CityModal from "../cityModal/cityModal";

const Nav = () => {
  const [modal, setModal] = useState(false);

  const openModal = ()=>{
    return setModal(true)
  }

  const closeModal = ()=>{
    return setModal(false)
  }

  return (
    <div className="w-full bg-[#F0F2F5] py-1">
      <div className="max-w-[1255px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div onClick={openModal} className="font-medium flex gap-1 cursor-pointer">
            <img src={location} alt="location" />
            Toshkent
            <img src={arrow} alt="arrow" />
          </div>
          <p className="font-medium text-[14px] cursor-pointer">Topshirish punktlari</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-[#8E4DFF] text-[15px] font-medium">Sotuvchi bo'lish</a>
          <a href="#" className="text-[#8E4DFF] text-[15px] font-medium">Topshirish punktini ochish</a>
          <a href="#" className="text-[#4D4F59] text-[15px] font-medium">Savol-javob</a>
          <a href="#" className="text-[#4D4F59] text-[15px] font-medium">Buyurtmalarim</a>
          <div className="flex items-center gap-2 cursor-pointer">
            <img className="w-[20px] h-[20px]" src={uzb} alt="uzb" />
            O'zbekcha
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
