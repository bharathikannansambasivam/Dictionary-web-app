import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Audio from "./Audio";
import Noun from "./Noun";
import Verb from "./Verb";

import searchAnimationGif from "../assets/images/searchGif.gif";

import icon_search from "../assets/images/icon-search.svg";
import FooterBar from "./FooterBar";

function Search({ font }) {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState(null);
  const [noun, setNoun] = useState([]);
  const [verb, setVerb] = useState([]);
  const [error, setError] = useState("");
  const fetchData = async () => {
    setMeaning(null);
    setError("");

    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      const data = response.data;
      console.log(data);
      setMeaning(data);
      const nounMeanings = data[0]?.meanings[0]?.definitions || [];
      setNoun(nounMeanings);

      const verbMeanings = data[0]?.meanings[1]?.definitions || [];
      setVerb(verbMeanings);
    } catch (e) {
      console.log(e.message);
      setError("No results found. Please try a different word.");
    }
  };

  return (
    <div className={`flex h-full  flex-col py-36 px-4 md:px-32 font-${font}`}>
      <div className="relative  mb-10">
        <input
          type="text"
          placeholder="Enter text"
          className="border-2 w-full border-gray-300  pl-5 bg-gray-100 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          onChange={(e) => setWord(e.target.value)}
        />
        <img
          className="absolute right-5 top-3 cursor-pointer"
          onClick={fetchData}
          src={icon_search}
          alt="Search"
        />
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {meaning ? (
        <div>
          <Audio
            phonetics={meaning[0]?.phonetics || []}
            word={meaning[0].word}
          />
          <Noun noun={noun} meaning={meaning[0]?.meanings[0]} />
          <Verb
            verb={verb}
            partOfSpeech={meaning[0]?.meanings[1]?.partOfSpeech}
          />
          <FooterBar sourceUrl={meaning[0].sourceUrls} />
        </div>
      ) : (
        !error && (
          <div className="flex items-center flex-col">
            <p className="animate-bounce">Search Something...</p>
            <img src={searchAnimationGif} />
          </div>
        )
      )}
    </div>
  );
}

export default Search;
