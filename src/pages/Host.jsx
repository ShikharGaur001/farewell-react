import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Host = () => {
  const videoRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleAutoplay = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.play().catch((error) => {
          console.error("Error attempting to play", error);
        });
      }
    };

    document.addEventListener("click", handleAutoplay);

    return () => {
      document.removeEventListener("click", handleAutoplay);
    };
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (videoRef.current) {
      videoRef.current.pause();
    }
    navigate("/");
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center relative">
      <video
        ref={videoRef}
        autoPlay
        loop
        className="absolute w-full h-full object-cover"
      >
        <source src="https://res.cloudinary.com/djz9ifbzg/video/upload/v1737994070/start-bg_hvgvuq.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-[38vw] z-50 h-[31.2vw] bg-zinc-200 rounded-[1.1vw] p-[1.1vw] flex flex-col items-center shadow-xl">
        <h1 className="text-[3.2vw] leading-[1.4] mb-[.6vw] font-extrabold bg-[url(https://res.cloudinary.com/djz9ifbzg/image/upload/v1737994619/text_mzivog.jpg)] bg-cover bg-center bg-clip-text text-transparent">
          Congratulations
        </h1>
        <span className="uppercase text-[2.2vw] tracking-tighter leading-[1] text-zinc-600 font-semibold mb-[2vw]">
          Website Hosted Successfully
        </span>
        <animated-icons
          src="https://animatedicons.co/get-icon?name=Success&style=minimalistic&token=2cb0da6b-0dad-4d02-8599-79b76c0333fb"
          trigger="loop"
          attributes='{"variationThumbColour":"#000000","variationName":"Dark","variationNumber":4,"numberOfGroups":2,"strokeWidth":2.5,"backgroundIsGroup":true,"defaultColours":{"group-1":"#E6E9EC","group-2":"#005400FF","background":"#56CE7BFF"}}'
          height="200"
          width="200"
        ></animated-icons>
        <form
          onSubmit={onSubmit}
          className="w-full mt-[1.8vw] flex justify-between"
        >
          <input
            value={"Continue"}
            type="submit"
            className="h-[3.889vw] rounded-[0.833vw] flex items-center w-full justify-center bg-gradient-to-tr from-[#ff9580] to-[#dca7df] font-semibold text-white text-[1.389vw] leading-[1.944vw] text-center cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Host;
