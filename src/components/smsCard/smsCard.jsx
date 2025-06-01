import React, { useRef, useState } from "react";
import close from "../../assets/close.svg";

const formatUzbekNumber = (digits) => {
  const part1 = digits.slice(0, 2);
  const part2 = digits.slice(2, 5);
  const part3 = digits.slice(5, 7);
  const part4 = digits.slice(7, 9);
  return `${part1} ${part2} ${part3} ${part4}`.trim();
};

const formatRussianNumber = (digits) => {
  const part1 = digits.slice(0, 3);
  const part2 = digits.slice(3, 6);
  const part3 = digits.slice(6, 8);
  const part4 = digits.slice(8, 10);
  return `${part1} ${part2} ${part3} ${part4}`.trim();
};

const formatUSANumber = (digits) => {
  const part1 = digits.slice(0, 3);
  const part2 = digits.slice(3, 6);
  const part3 = digits.slice(6, 10);
  return `(${part1}) ${part2}-${part3}`.trim();
};

const SmsCard = ({ onClose }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  const formatPhone = (val) => {
    let cleaned = val.replace(/[^\d+]/g, "");
    if (!cleaned.startsWith("+")) cleaned = "+" + cleaned;

    if (cleaned.startsWith("+998")) {
      const digits = cleaned.slice(4).replace(/\D/g, "").slice(0, 9);
      return "+998 " + formatUzbekNumber(digits);
    }
    if (cleaned.startsWith("+7")) {
      const digits = cleaned.slice(2).replace(/\D/g, "").slice(0, 10);
      return "+7 " + formatRussianNumber(digits);
    }
    if (cleaned.startsWith("+1")) {
      const digits = cleaned.slice(2).replace(/\D/g, "").slice(0, 10);
      return "+1 " + formatUSANumber(digits);
    }

    return cleaned.slice(0, 16); // fallback
  };

  const handleChange = (e) => {
    const raw = e.target.value.replace(/[^\d+]/g, "");
    let formatted = raw;
    let digitsOnly = raw.replace(/\D/g, "");

    if (raw.startsWith("+998")) {
      const limited = digitsOnly.slice(3, 12);
      formatted = "+998 " + formatUzbekNumber(limited);
    } else if (raw.startsWith("+7")) {
      const limited = digitsOnly.slice(1, 11);
      formatted = "+7 " + formatRussianNumber(limited);
    } else if (raw.startsWith("+1")) {
      const limited = digitsOnly.slice(1, 11);
      formatted = "+1 " + formatUSANumber(limited);
    } else {
      formatted = raw.slice(0, 16);
    }

    setValue(formatted);
    console.log(raw);
    
  };

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
            className="cursor-pointer mb-5 mt-3"
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
          id="phone"
          type="tel"
          value={value}
          onChange={handleChange}
          ref={inputRef}
          placeholder="+998 00 000-00-00"
        />
        <button className="bg-[#7000FF] text-[16px] w-full py-2 text-white font-semibold rounded-xl my-6">
          Kodni olish
        </button>
        <p className="mt-16 text-[14px] font-medium tracking-wide leading-4 text-center">
          Avtotizatsiyadan o'tish orqali siz
          <a href="#" className="text-[#3377FF]">
            shaxsiy <br /> ma'lumotlarni qayta ishlash siyosatiga rozilik <br />
            bildirasiz
          </a>
        </p>
      </div>
    </>
  );
};

export default SmsCard;
