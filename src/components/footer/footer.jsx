import React from "react";
import appStore from "../../assets/appStore.svg";
import playMarket from "../../assets/playMarket.svg";
import instagram from "../../assets/instagram.svg";
import telegram from "../../assets/telegram.svg";
import facebook from "../../assets/facebook.svg";
import youtube from "../../assets/youtube.svg";

const Footer = () => {
  return (
    <div>
      <div className="max-w-[1255px] mx-auto pt-5 mt-4">
        <div className="flex justify-between md:flex-row flex-col md:items-start items-center pt-5 pb-16">
          <div className="flex flex-col gap-2">
            <h5 className="text-[16px] font-semibold mb-2">Biz haqimizda</h5>
            <a href="#" className="text-[#8b8e99] text-[14px] font-semibold md:block hidden">
              Topshirish punktlari
            </a>
            <a href="#" className="text-[#8b8e99] text-[14px] font-semibold md:block hidden">
              Vakansiyalar
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-[16px] font-semibold mb-2">
              Foydalanuvchilarga
            </h5>
            <a href="#" className="text-[#8b8e99] text-[14px] font-semibold md:block hidden">
              Biz bilan bogʻlanish
            </a>
            <a href="#" className="text-[#8b8e99] text-[14px] font-semibold md:block hidden">
              Savol-Javob
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-[16px] font-semibold mb-2">Tadbirkorlarga</h5>
            <a href="#" className="text-[#8b8e99] text-[14px] font-semibold md:block hidden">
              Uzumda soting
            </a>
            <a href="#" className="text-[#8b8e99] text-[14px] font-semibold md:block hidden">
              Sotuvchi kabinetiga kirish
            </a>
            <a href="#" className="text-[#8b8e99] text-[14px] font-semibold md:block hidden">
              Topshirish punktini ochish
            </a>
          </div>
          <div className="flex flex-col">
            <h5 className="text-[16px] font-semibold mb-2">
              Ilovani yuklab olish
            </h5>
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
            <h5 className="text-[16px] font-semibold mt-10 mb-2">
              Uzum ijtimoiy tarmoqlarda
            </h5>
            <div className="flex gap-3">
              <a href="#">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="#">
                <img src={telegram} alt="telegram" />
              </a>
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#">
                <img src={youtube} alt="youtube" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center py-3 md:border-t border-none border-[#D7D7D9]">
          <div className="flex md:flex-row flex-col md:items-start items-center gap-3">
            <h4 className="text-[15px] font-semibold"> Maxfiylik kelishuvi </h4>
            <h4 className="text-[15px] font-semibold"> Foydalanuvchi kelishuvi </h4>
          </div>
          <p className="text-[#7e818c] text-[11px] text-center md:m-0 mt-4 font-semibold">
            «2025© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar
            himoyalangan»
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
