import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalContext } from "../context/GlobalContext";

const Start = () => {
  const [names, setNames] = useState(["Shikhar", "Alice"]);
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const { isUser, setIsUser } = useContext(GlobalContext);

  useEffect(() => {
    if (isUser) {
      navigate("/home");
    }
  }, [isUser, navigate]);

  const onChange = (e) => {
    setName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (names.includes(name)) {
      setIsUser(true);
      navigate("/home");
    } else {
      toast.error("Unauthorized!");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[url(https://res.cloudinary.com/djz9ifbzg/image/upload/v1737994770/start-bg_atkb7g.jpgcd)] bg-cover bg-center">
      <div className="w-[38vw] z-50 h-[12.6vw] bg-zinc-200 rounded-[1.1vw] p-[1.1vw] flex flex-col items-center shadow-xl">
        <span className="uppercase text-[1.4vw] leading-[1] text-zinc-600 font-semibold">
          Hello There
        </span>
        <h1 className="text-[3.2vw] leading-[1] font-extrabold bg-[url(https://res.cloudinary.com/djz9ifbzg/image/upload/v1737994619/text_mzivog.jpg)] bg-cover bg-center bg-clip-text text-transparent">
          What's your name?
        </h1>
        <form onSubmit={onSubmit} className="w-full mt-[1.8vw] flex justify-between">
          <input
            type="text"
            className="w-[26.667vw] h-[3.889vw] rounded-[0.833vw] border-[0.278vw] border-zinc-300 text-[1.667vw] leading-[2.222vw] text-center"
            onChange={onChange}
            value={name}
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

export default Start;
