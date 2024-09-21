import React from "react";
import icon_share from "../assets/images/icon-new-window.svg";

function FooterBar({ sourceUrl }) {
  return (
    <div>
      {" "}
      <div className=" gap-4 mt-3 border-t border-t-gray-600 items-center">
        <p className="text-gray-500 mt-5"> Source </p>
        <a
          className="underline flex  gap-2  p-4"
          target="_blank"
          href={sourceUrl}
        >
          {sourceUrl}
          <img src={icon_share} alt="" />{" "}
        </a>
      </div>{" "}
    </div>
  );
}
export default FooterBar;
