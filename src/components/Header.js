import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex m-2 justify-between">
      <div className="flex">
        <RxHamburgerMenu className="w-10 h-6 mt-3 ml-4 mr-3" />
        <img src={Logo} alt="youtube-logo" className="w-28 h-12" />
      </div>
      <div className="flex mt-3">
        <input
          type="text"
          className="w-96 border border-gray-300 rounded-l-full p-2"
        />
        <button className="border border-gray-300 rounded-r-full bg-gray-100 py-3 px-5">
          <CiSearch />
        </button>
      </div>
      <div className="mt-3">
        <FaUser className="w-10 h-6" />
      </div>
    </div>
  );
};

export default Header;
