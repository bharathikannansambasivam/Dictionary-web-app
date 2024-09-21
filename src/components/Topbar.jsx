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
    <div>
      <div className="flex">
        <img src={Logo} alt="" />
        <select name="font" value={font} id="" onChange={handleChange}>
          <option value="Lora">Lora</option>
          <option value="Inconsolata">Inconsolata</option>
          <option value="Inter">Inter</option>
        </select>
      </div>

      <Search font={font} />
    </div>
  );
}

export default Topbar;
