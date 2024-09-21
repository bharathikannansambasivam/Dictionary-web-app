import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Audio from "./Audio";
import Noun from "./Noun";
import Verb from "./Verb";

import icon_search from "../assets/images/icon-search.svg";
import FooterBar from "./FooterBar";

function Search({ font }) {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState(null);
  const [noun, setNoun] = useState([]);
  const [verb, setVerb] = useState([]);
  const fetchData = async () => {
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
    }
  };

  return (
    <div
      className={` flex h-full justify-center items-center flex-col border-4 border-black  py-32  px-72 font-${font}`}
    >
      <div className=" flex relative    ">
        <input
          type="text"
          placeholder="Enter text "
          className="border-2  pl-5 bg-gray-300  border-none  p-2  rounded-xl "
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />

        <img
          className="absolute right-9 top-3 "
          onClick={fetchData}
          src={icon_search}
          alt=""
        />
      </div>

      {meaning ? (
        <div>
          <Audio
            phonetics={meaning[0]?.phonetics || []}
            word={meaning[0].word}
          />
          <Noun font={font} noun={noun} meaning={meaning[0]?.meanings[0]} />
          <Verb
            verb={verb}
            partOfSpeech={meaning[0]?.meanings[1]?.partOfSpeech}
          />
          <FooterBar sourceUrl={meaning[0].sourceUrls} />
        </div>
      ) : (
        "No data"
      )}
    </div>
  );
}

export default Search;
