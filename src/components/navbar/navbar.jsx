import React, { useState } from "react";
import logo from "../../assets/uzumLogo.svg";
import search from "../../assets/search.svg";
import user from "../../assets/user.svg";
import heart from "../../assets/heart.svg";
import savat from "../../assets/savat.svg";
import SmsCard from "../smsCard/smsCard";
import SearchModal from "../searchModal/searchModal";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const openModal = () => {
    return setModal(true);
  };

  const closeModal = () => {
    return setModal(false);
  };

  const openSearch = () => {
    document.body.style.overflow = "hidden";
    return setSearchModal(true);
  };

  const closeSearch = () => {
    document.body.style.overflow = '';
    return setSearchModal(false);
  };
  return (
    <>
      <div className="max-w-[1255px] mx-auto py-2 items-center justify-between md:flex hidden">
        <a href="#">
          <img src={logo} className="w-[200px] h-[30px]" alt="logo" />
        </a>
        <div className="flex px-7 py-2 bg-[#E5E5FF] text-[#8D4DFF] font-medium rounded-sm cursor-pointer">
          Katalog
        </div>
        <div
          onClick={openSearch}
          className="relative flex border-1 border-[#D7D7D9] rounded-sm"
        >
          <input
            id="inp"
            className=" pl-5 w-[450px] outline-none"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Mahsulotlar va turkumlar izlash"
          />
          <label for="inp" className="cursor-pointer py-2 px-6 bg-[#EDEFF2]">
            <img src={search} alt="search" />
          </label>
        </div>
        <div
          onClick={openModal}
          className="duration-150 flex items-center gap-2 p-2 cursor-pointer hover:bg-[#DEE0E5] rounded-sm"
        >
          <img src={user} alt="user" />
          <p>Kirish</p>
        </div>
        <div className="duration-150 flex items-center gap-2 p-2 cursor-pointer hover:bg-[#DEE0E5] rounded-sm">
          <img src={heart} alt="heart" />
          <p>Saralangan</p>
        </div>
        <div className="duration-150 flex items-center gap-2 p-2 cursor-pointer hover:bg-[#DEE0E5] rounded-sm">
          <img src={savat} alt="savat" />
          <p>Savat</p>
        </div>
      </div>
      {modal && <SmsCard onClose={closeModal} />}
      {searchModal && <SearchModal onClose={closeSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
    </>
  );
};

export default Navbar;
