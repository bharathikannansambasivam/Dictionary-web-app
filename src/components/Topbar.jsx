import React, { useState } from "react";
import Search from "./Search";
import Logo from "../assets/images/logo.svg";
import arrow from "../assets/images/arrow.svg";

function Topbar() {
  const [font, setFont] = useState("Lora");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelect = (fontName) => {
    setFont(fontName);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="pt-10">
      <div className="flex justify-around items-center">
        <div className="flex items-center gap-2 font-extrabold">
          <img src={Logo} alt="Dicto" />
          <p className="text-red-500">
            <span className="text-purple-600 font-extrabold text-xl italic">
              Vocab
            </span>
            Master....
          </p>
        </div>
        <div className="relative">
          <div
            className="bg-white w-28 flex gap-3 items-center justify-center border-gray-300 rounded-md p-2 cursor-pointer"
            onClick={toggleDropdown}
          >
            {font}
            <img src={arrow} alt="" onClick={toggleDropdown} />
          </div>

          {isDropdownOpen && (
            <div className="absolute top-full mt-2 bg-white border border-gray-300 rounded-md shadow-md">
              <div
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect("Lora")}
              >
                Lora
              </div>
              <div
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect("Inconsolata")}
              >
                Inconsolata
              </div>
              <div
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect("Inter")}
              >
                Inter
              </div>
            </div>
          )}
        </div>
      </div>

      <Search font={font} />
    </div>
  );
}

export default Topbar;
