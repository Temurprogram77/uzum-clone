import React, { useRef, useState } from "react";
import close from "../../assets/close.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputCode from "../InputCode/InputCode";

const formatUzbekNumber = (digits) => {
  const part1 = digits.slice(0, 2);
  const part2 = digits.slice(2, 5);
  const part3 = digits.slice(5, 7);
  const part4 = digits.slice(7, 9);
  return `${part1} ${part2} ${part3} ${part4}`.trim();
};

const SmsCard = ({ onClose }) => {
  const [value, setValue] = useState("");
  const [modal, setModal] = useState(true);
  const [modal2, setModal2] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");

  const inputRef = useRef(null);

  const handleChange = (e) => {
    let raw = e.target.value.replace(/[^\d+]/g, "");

    if (!raw.startsWith("+998")) {
      raw = "+998";
    }

    const digits = raw.slice(4).replace(/\D/g, "").slice(0, 9);
    const formatted = "+998 " + formatUzbekNumber(digits);
    setValue(formatted);
  };

  const handleSubmit = () => {
    const raw = value.replace(/[^\d]/g, "");
    const random = Math.floor(100000 + Math.random() * 900000);

    if (raw.length === 12) {
      console.log("Telefon raqami:", raw);
      toast.success("Telefon raqami muvaffaqiyatli qabul qilindi!");

      setTimeout(() => {
        toast.success(`Tasdiqlash kodi: ${random}`, { autoClose: 7000 });
      }, 2500);

      setGeneratedCode(random.toString());
      setModal(false);
      setModal2(true);
    } else {
      toast.error("Iltimos, to‘liq telefon raqamini kiriting!");
    }
  };

  return (
    <>
      {modal && (
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
            <h2 className="text-[24px] font-medium">
              Telefon raqamini kiriting
            </h2>
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
              maxLength={17}
            />
            <button
              onClick={handleSubmit}
              className="bg-[#7000FF] text-[16px] w-full py-2 text-white font-semibold rounded-xl my-6 cursor-pointer"
            >
              Kodni olish
            </button>
            <p className="mt-16 text-[14px] font-medium tracking-wide leading-4 text-center">
              Avtotizatsiyadan o'tish orqali siz
              <a href="#" className="text-[#3377FF] ml-1">
                shaxsiy <br /> ma'lumotlarni qayta ishlash siyosatiga rozilik{" "}
                <br />
                bildirasiz
              </a>
            </p>
          </div>
        </>
      )}

      {modal2 && (
        <InputCode
          onCloseAll={() => {
            setModal2(false);
            setModal(false);
            onClose();
          }}
          realCode={generatedCode}
        />
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default SmsCard;
