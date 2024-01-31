import React, { useState } from "react";

const TextToSpeech = () => {
  const [message, setMessage] = useState("");
  const speech = new SpeechSynthesisUtterance();

  const play = () => {
    speech.lang = "en";
    speech.text = message;
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className=" grid grid-cols-1 mx-auto mx-10 my-10 ">
      <textarea
        className="mx-5 bg-gray-100 text-2xl rounded-lg shadow-lg "
        id="message"
        rows="10"
        cols="50"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <button
        className="rounded-lg shadow-lg grid grid-cols-1 bg-indigo-400 px-4 py-3 mx-auto text-center  shadow-lg font-sans font-semibold text-2xl"
        onClick={play}
      >
        Play Text
      </button>
    </div>
  );
};

export default TextToSpeech;
