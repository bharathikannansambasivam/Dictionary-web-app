import React, { useEffect, useRef, useState } from "react";
import play from "../assets/images/play.svg";
function Audio({ phonetics, word }) {
  const [currentAudio, setCurrentAudio] = useState("");

  const audioRef = useRef();
  useEffect(() => {
    if (audioRef.current && currentAudio) {
      audioRef.current.src = currentAudio;
    }
  }, [currentAudio]);
  const handlePlay = (audioSrc) => {
    setCurrentAudio(audioSrc);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      {" "}
      <h1 className="text-5xl font-Lora font-semibold text-black"> {word}</h1>
      <div className="  ">
        {phonetics.map(
          (phonetics) =>
            phonetics.audio && (
              <div className=" flex  ">
                {phonetics.audio ? (
                  <div className="flex  border-y border-y-purple-500 p-3   justify-between w-full items-center  ">
                    <p className="text-purple-700">{phonetics.text}</p>

                    <div className=" ">
                      <audio ref={audioRef}>
                        <source src={phonetics.audio} type="audio/mp3" />
                        Your browser does not support the audio element.
                      </audio>
                      <img
                        className="h-12 "
                        src={play}
                        onClick={() => handlePlay(phonetics.audio)}
                        alt="phonetics audio"
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            )
        )}
      </div>{" "}
    </div>
  );
}

export default Audio;
