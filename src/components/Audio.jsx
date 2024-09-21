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
    if (audioRef.current) {
      audioRef.current.src = audioSrc;
      audioRef.current.play();
    }
  };

  return (
    <div className="mb-8">
      <h1 className="text-5xl font-Lora font-semibold text-black mb-4">
        {word}
      </h1>
      <div className="space-y-4">
        {phonetics.map(
          (phonetic, index) =>
            phonetic.audio && (
              <div
                key={index}
                className="flex justify-between items-center border border-purple-500 p-4 rounded-md shadow-md transition-transform hover:scale-105"
              >
                <p className="text-purple-700">{phonetic.text}</p>
                <img
                  className="h-12 cursor-pointer hover:scale-110 transition-transform"
                  src={play}
                  onClick={() => handlePlay(phonetic.audio)}
                  alt="phonetics audio"
                />
                <audio ref={audioRef}>
                  <source src={phonetic.audio} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Audio;
