import React, { useEffect, useState } from "react";
import axios from "axios";
function ImageGenerator({ nameofImage }) {
  const [image, setImage] = useState("");
  const [heading, setHeading] = useState("");
  const key = "AyR5QxZConpsdVvR971sqMJyENaLTDMTTb-6iLkSWHc";
  useEffect(() => {
    const fetchImage = async () => {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${nameofImage}&client_id=${key}`
      );
      const data = response.data;
      setImage(data.results[0].links.download);
      setHeading(data.results[0].alt_description);
    };
    fetchImage();
  }, [setImage]);
  return (
    <div className="flex flex-col justify-center items-center ">
      <img
        className="h-48 w-48 border-2 hover:scale-110 transition-transform border-purple-700 rounded-xl "
        src={image}
        alt=""
      />
      <p className="text-xl font-semibold mt-2">{heading}</p>
    </div>
  );
}

export default ImageGenerator;
