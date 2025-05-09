import React from "react";
import logo from "../../assets/uzumLogo.svg";

const Navbar = () => {
  return (
    <div className="max-w-[1255px] mx-auto py-2 flex items-center justify-between">
      <a href="#">
        <img src={logo} className="w-[140px] h-[20px]" alt="logo" />
      </a>
      <div className="flex px-3 py-1 bg-[#E5E5FF] text-[#8D4DFF]">Katalog</div>
    </div>
  );
};

export default Navbar;
