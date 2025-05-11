import React from "react";
import appStore from "../../assets/appStore.svg";
import playMarket from "../../assets/playMarket.svg";

const Footer = () => {
  return (
    <div>
      <div className="max-w-[1255px] mx-auto py-5">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h5 className="text-[16px] font-semibold mb-2">Biz haqimizda</h5>
            <a href="#" className="text-[#8b8e99] text-[14px] font-semibold">
              Topshirish punktlari
            </a>
            <a href="#" className="text-[#8b8e99] text-[14px] font-semibold">
              Vakansiyalar
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-[16px] font-semibold mb-2">Foydalanuvchilarga</h5>
            <a href="#" className="text-[#8b8e99] text-[14px] font-semibold">
              Biz bilan bogʻlanish
            </a>
            <a href="#" className="text-[#8b8e99] text-[14px] font-semibold">
              Savol-Javob
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-[16px] font-semibold mb-2">Tadbirkorlarga</h5>
            <a href="#" className="text-[#8b8e99] text-[14px] font-semibold">
              Uzumda soting
            </a>
            <a href="#" className="text-[#8b8e99] text-[14px] font-semibold">
              Sotuvchi kabinetiga kirish
            </a>
            <a href="#" className="text-[#8b8e99] text-[14px] font-semibold">
              Topshirish punktini ochish
            </a>
          </div>
          <div className="flex flex-col">
            <h5 className="text-[16px] font-semibold mb-2">Ilovani yuklab olish</h5>
            <div className="flex gap-5">
              <a href="#" className="flex">
                <img src={appStore} alt="apple" />
                <p>AppStore</p>
              </a>
              <a href="#" className="flex">
                <img src={playMarket} alt="apple" />
                <p>PlayMarket</p>
              </a>
            </div>
            <h5>Uzum ijtimoiy tarmoqlarda</h5>
            <div className="flex">
              <a href="#">
                <img src={instagram} alt="instagram" />
                <img src={telegram} alt="telegram" />
                <img src={facebook} alt="facebook" />
                <img src={youtube} alt="youtube" />
              </a>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Footer;
