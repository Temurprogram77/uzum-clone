import React from "react";

const SmsCard = ({onClose}) => {
  return (
    <>
      <div className="w-full h-full bg-[#00000084] fixed top-0 z-10"></div>
      <div className="bg-white w-[660px] fixed z-11 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-xl">
        <img
          onClick={onClose}
          className="cursor-pointer"
          src={close}
          alt="close"
        />
        <h2>Telefon raqamini kiriting</h2>
        <p>Tasdiqlash kodini SMS orqali yuboramiz</p>
        <input type="text" placeholder="+998 00 000-00-00" />
        <button>Kodni olish</button>
        <p>
          Avtotizatsiyadan o'tish orqali siz
          <a href="#" className="text-[#3377FF]">
            shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozilik bildirasiz
          </a>
        </p>
      </div>
    </>
  );
};

export default SmsCard;
