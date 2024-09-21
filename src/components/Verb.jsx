import React from "react";

function Verb({ verb, partOfSpeech }) {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <h3 className="font-bold italic">{partOfSpeech}</h3>
      {partOfSpeech && <h2 className="text-gray-500">Meaning</h2>}
      {verb.map((item, index) => (
        <div className="ml-5">
          <li key={index}>{item.definition}</li>

          <p className="text-gray-500">"{item.example}"</p>
        </div>
      ))}
    </div>
  );
}

export default Verb;
