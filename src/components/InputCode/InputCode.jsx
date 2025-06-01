import React, { useState } from "react";
import close from "../../assets/close.svg";
import { toast } from "react-toastify";

const InputCode = ({ onCloseAll, realCode }) => {
  const [inputCode, setInputCode] = useState("");

  const handleSubmit = () => {
    if (inputCode === realCode) {
      toast.success("Kod to‘g‘ri kiritildi!", { autoClose: 2000 });
      setTimeout(() => {
        onCloseAll();
      },2000);
    } else {
      toast.error("Noto‘g‘ri kod. Iltimos, qayta urinib ko‘ring.");
    }
  };

  return (
    <>
      <div
        onClick={onCloseAll}
        className="w-full h-full bg-[#00000084] fixed top-0 z-10"
      ></div>
      <div className="bg-white w-[410px] fixed z-11 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-xl">
        <div className="flex justify-end w-full">
          <img
            onClick={onCloseAll}
            className="cursor-pointer mb-5 mt-3"
            src={close}
            alt="close"
          />
        </div>
        <h2 className="text-[24px] font-medium">Tasdiqlash kodini kiriting</h2>
        <p className="text-[16px] font-medium text-[#432026] mb-5">
          SMS orqali yuborilgan 6 xonali kodni kiriting
        </p>
        <input
          className="bg-[#EDEFF2] w-full px-3 py-2 text-[20px] font-semibold"
          type="text"
          maxLength={6}
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          placeholder="123456"
        />
        <button
          onClick={handleSubmit}
          className="bg-[#7000FF] text-[16px] w-full py-2 text-white font-semibold rounded-xl my-6 cursor-pointer"
        >
          Kirish
        </button>
      </div>
    </>
  );
};

export default InputCode;
