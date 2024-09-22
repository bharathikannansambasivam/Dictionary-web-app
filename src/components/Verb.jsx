import React from "react";

function Verb({ verb, partOfSpeech }) {
  return (
    <div className="flex flex-col gap-4 mt-4">
      {partOfSpeech && (
        <div className="flex">
          <h3 className="font-bold italic">{partOfSpeech}</h3>
          <span className="flex-grow border-b m-3 border-black"></span>
        </div>
      )}

      {partOfSpeech && <h2 className="text-gray-500">Meaning</h2>}
      {verb.map((item, index) => (
        <div className="ml-5" key={index}>
          <li className="mb-1">{item.definition}</li>

          <p className="text-gray-500">
            {item.example ? `''${item.example}''` : null}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Verb;
