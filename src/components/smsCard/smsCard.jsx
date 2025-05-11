import React from "react";
import close from "../../assets/close.svg";

const SmsCard = ({ onClose }) => {
  return (
    <>
      <div
        onClick={onClose}
        className="w-full h-full bg-[#00000084] fixed top-0 z-10"
      ></div>
      <div className="bg-white w-[410px] fixed z-11 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-xl">
        <div className="flex justify-end w-full">
          <img
            onClick={onClose}
            className="cursor-pointer mb-5 mt-3 "
            src={close}
            alt="close"
          />
        </div>
        <h2 className="text-[24px] font-medium">Telefon raqamini kiriting</h2>
        <p className="text-[16px] font-medium text-[#432026] mb-5">
          Tasdiqlash kodini SMS orqali yuboramiz
        </p>
        <input
          className="bg-[#EDEFF2] w-full px-3 py-2 text-[20px] font-semibold"
          type="text"
          placeholder="+998 00 000-00-00"
        />
        <button className="bg-[#7000FF] text-[16px] w-full py-2 text-white font-semibold rounded-xl my-6">
          Kodni olish
        </button>
        <p className="mt-16 text-[14px] font-medium tracking-wide leading-4 text-center">
          Avtotizatsiyadan o'tish orqali siz
          <a href="#" className="text-[#3377FF]">
            shaxsiy <br /> ma'lumotlarni qayta ishlash siyosatiga rozilik <br />{" "}
            bildirasiz
          </a>
        </p>
      </div>
    </>
  );
};

export default SmsCard;
