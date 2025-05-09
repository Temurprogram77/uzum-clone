import React from "react";
import star from "../../assets/star-pages.png";
import arrow from "../../assets/arrow.svg";

const pagesData = [
  " Elektronika ",
  " Maishiy texnika ",
  " Kiyim ",
  " Poyabzallar ",
  " Aksessuarlar ",
  " Goʻzallik va parvarish ",
  " Salomatlik ",
  " Uy-roʻzgʻor buyumlari ",
  " Qurilish va taʼmirlash ",
];

const Pages = () => {
  return (
    <div className="max-w-[1255px] mx-auto py-4 text-[15px] font-medium cursor-pointer flex items-center justify-between">
      <div className="flex items-center gap-1">
        <img className="w-[25px]" src={star} alt="star" />
        <p>Hafta tovarlari</p>
      </div>
      {pagesData.map((item) => {
        return <p className="pages-text py-2 hover:">{item}</p>;
      })}
      <div className="flex items-center gap-1">
        <p>Yana</p>
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default Pages;
