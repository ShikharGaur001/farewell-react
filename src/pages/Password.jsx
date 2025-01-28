import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Password = () => {
  const [password, setPassword] = useState("");
  const audioRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
        });
      }
    };

    document.addEventListener('click', playAudio);
    return () => {
      document.removeEventListener('click', playAudio);
    };
  }, []);

  const onChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === "2002") {
      navigate("/hosted");
    } else {
      toast.error("Password Invalid!");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[url(https://res.cloudinary.com/djz9ifbzg/image/upload/v1737994485/enter-bg_alrrhi.jpg)] bg-cover bg-center">
      <audio ref={audioRef} src="https://res.cloudinary.com/djz9ifbzg/video/upload/v1737994565/password-bg_enpfv5.mp3" autoPlay loop preload="auto" />
      <div className="w-[38vw] z-50 h-[12.6vw] bg-zinc-200 rounded-[1.1vw] p-[1.1vw] flex flex-col items-center shadow-xl">
        <span className="uppercase text-[1.4vw] leading-[1] text-zinc-600 font-semibold">
          Host the website
        </span>
        <h1 className="text-[3.2vw] leading-[1] font-extrabold bg-[url(https://res.cloudinary.com/djz9ifbzg/image/upload/v1737994619/text_mzivog.jpg)] bg-cover bg-center bg-clip-text text-transparent">
          Enter Password
        </h1>
        <form onSubmit={onSubmit} className="w-full mt-[1.8vw] flex justify-between">
          <input
            type="text"
            className="w-[26.667vw] h-[3.889vw] rounded-[0.833vw] border-[0.278vw] border-zinc-300 text-[1.667vw] leading-[2.222vw] text-center"
            onChange={onChange}
            value={password}
            required
          />
          <input
            value={"Enter"}
            type="submit"
            className="h-[3.889vw] rounded-[0.833vw] px-[2.222vw] bg-gradient-to-tr from-[#ff9580] to-[#dca7df] font-semibold text-white text-[1.389vw] leading-[1.944vw] text-center cursor-pointer"
          />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Password;
