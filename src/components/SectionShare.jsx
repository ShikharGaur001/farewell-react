import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";

const SectionShare = () => {
  const [showPopup, setShowPopup] = useState(false);

  const copyToClipboard = () => {
    const text = document.getElementById("share-link").innerText;
    navigator.clipboard.writeText(text);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <section className="w-full py-[2vw] flex flex-col items-center h-[53.542vw] bg-gradient-to-br from-[#11998e] to-[#38ef7d]">
      <h1 className="text-[5vw] font-bold bg-[url(https://res.cloudinary.com/djz9ifbzg/image/upload/v1738029066/text8_sfnrwc.jpg)] bg-bottom bg-clip-text bg-cover text-transparent">
        Share This Site
      </h1>
      <img src="/qr.png" className="h-[30vw]" alt="" />
      <div className="relative flex mt-[1vw] items-center gap-[2vw]">
        <h2
          id="share-link"
          className="bg-zinc-100 border-2 border-zinc-400 text-[1.4vw] px-[3vw] py-[1vw] rounded-xl"
        >
          https://www.google.com
        </h2>
        <button
          onClick={copyToClipboard}
          className="text-[1.6vw] p-[1.2vw] bg-zinc-100 border-2 border-zinc-400 text-zinc-600 rounded-xl flex items-center gap-[0.5vw]"
        >
          <FaCopy />
        </button>
        {showPopup && (
          <div className="text-[1vw] bg-zinc-100 rounded-full text-zinc-600 px-[0.8vw] py-[0.4vw] absolute right-0 mb-[8vw] -mr-[0.6vw]">
            Copied!
          </div>
        )}
      </div>
      <img src="/arrow1.svg" className="absolute h-[30vw] ml-[44vw] mt-[4vw] rotate-[50deg]" alt="" />
    </section>
  );
};

export default SectionShare;
