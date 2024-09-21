import React, { useState } from "react";
import Search from "./Search";
import Logo from "../assets/images/logo.svg";

function Topbar() {
  const [font, setFont] = useState("Lora");
  console.log(font);
  const handleChange = (e) => {
    setFont(e.target.value);
  };
  return (
    <div className="pt-10">
      <div className="flex justify-around">
        <div className="flex items-center gap-2 font-extrabold">
          <img className="" src={Logo} alt="Dicto" />
          <p>Dicto</p>
        </div>
        <select
          className=""
          name="font"
          value={font}
          id=""
          onChange={handleChange}
        >
          <option className="font-Lora border-2 " value="Lora">
            Lora
          </option>
          <option className="font-Inconsolata" value="Inconsolata">
            Inconsolata
          </option>
          <option className="font-Inter" value="Inter">
            Inter
          </option>
        </select>
      </div>

      <Search font={font} />
    </div>
  );
}

export default Topbar;
