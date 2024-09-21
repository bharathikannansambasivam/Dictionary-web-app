import React, { useState } from "react";

function Noun({ noun, meaning }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold italic">{meaning?.partOfSpeech}</p>
      {meaning.definitions ? <h2 className="text-gray-500">Meaning</h2> : ""}
      <div className="ml-5">
        {noun.map((item, index) => (
          <li key={index}>{item.definition}</li>
        ))}
      </div>
      <p className="text-gray-500">
        synonyms{" "}
        <span className="text-purple-600 font-semibold">
          {meaning.synonyms[0]}
        </span>
      </p>
    </div>
  );
}

export default Noun;
