import React from "react";
import logo from "../../assets/uzumLogo.svg";

const Navbar = () => {
  return (
    <div className="max-w-[1255px] mx-auto py-2 flex items-center justify-between">
      <a href="#">
        <img src={logo} className="w-[140px] h-[20px]" alt="logo" />
      </a>
      <div className=""></div>
    </div>
  );
};

export default Navbar;
