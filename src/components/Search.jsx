import React, { useState } from "react";
import axios from "axios";
import Audio from "./Audio";
import Noun from "./Noun";
import Verb from "./Verb";

import searchAnimationGif from "../assets/images/searchGif.gif";
import icon_search from "../assets/images/icon-search.svg";
import FooterBar from "./FooterBar";
import ImageGenerator from "./ImageGenerator";

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

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchData();
    }
  };

  return (
    <div className={`flex h-full pt-32  flex-col px-4 md:px-32 font-${font}`}>
      <div className="relative  mb-10 ">
        <input
          type="text"
          placeholder="Enter text"
          className="border-2 w-full text-black pl-5 bg-gray-100 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          onChange={(e) => setWord(e.target.value)}
          onKeyDown={handleKeyDown}
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

          <ImageGenerator nameofImage={word} />
          <Noun noun={noun} meaning={meaning[0]?.meanings[0]} />
          <Verb
            verb={verb}
            partOfSpeech={meaning[0]?.meanings[1]?.partOfSpeech}
          />
          <FooterBar sourceUrl={meaning[0].sourceUrls} />
        </div>
      ) : (
        !error && (
          <div className="errorStyle flex items-center flex-col">
            <p className="animate-bounce">Search Something...</p>
            <img src={searchAnimationGif} />
          </div>
        )
      )}
    </div>
  );
}

export default Search;
