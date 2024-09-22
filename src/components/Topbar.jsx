import React, { useState } from "react";
import Search from "./Search";
import Logo from "../assets/images/logo.svg";
import arrow from "../assets/images/arrow.svg";
import moon from "../assets/images/moon.svg";
import sun from "../assets/images/sun.png";
function Topbar() {
  const [font, setFont] = useState("serif");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [toggleTheme, setToggleTheme] = useState(false);

  console.log(font);
  const handleSelect = (fontName) => {
    setFont(fontName);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={` ${
        toggleTheme ? "bg-black text-white" : "bg-white text-black"
      } `}      style={{ fontFamily: font }}

    >
      <div className="flex justify-around items-center ">
        <div className="flex items-center gap-2 font-extrabold">
          <img className="bg-white p-3 rounded-lg" src={Logo} alt="Dicto" />
          <p className="text-red-500 hidden sm:block ">
            <span className="r text-purple-600 font-extrabold text-xl italic">
              Vocab_
            </span>
            Master....
          </p>
        </div>
        <div className="flex gap-3">
          <div className={`relative text-black`}>
            <div
              className="bg-white w-32 p-2 flex gap-3 items-center justify-center border-gray-300  rounded-md  cursor-pointer"
              onClick={toggleDropdown}
            >
              {font}
              <img src={arrow} alt="" onClick={toggleDropdown} />
            </div>

            {isDropdownOpen && (
              <div className="absolute top-full w-full mt-2 bg-white border border-gray-300 rounded-md shadow-md">
                <div
                  className="p-2  hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect("serif")}
                >
                  - Serif
                </div>
                <div
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect("Lora")}
                >
                  - Lora
                </div>
                <div
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect("Inconsolata")}
                >
                  - Inconsolata
                </div>
              </div>
            )}
          </div>
          <button onClick={() => setToggleTheme(!toggleTheme)}>
            {toggleTheme ? (
              <img className="h-9" src={sun} alt="" />
            ) : (
              <img src={moon} alt="" />
            )}
          </button>
        </div>
      </div>
      <Search />
    </div>
  );
}

export default Topbar;
