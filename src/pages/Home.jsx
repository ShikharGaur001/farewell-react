import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import SectionShare from "../components/SectionShare";
import DareToScan from "../components/DareToScan";
import Adventure from "../components/Adventure";
import Heads from "../components/Heads";
import SlideText from "../components/SlideText";
import NccSection from "../components/NccSection";

const Home = () => {
  const { isUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUser) {
      navigate("/");
    } else {
      // Ensure Shery.js is loaded before using it
      const checkShery = setInterval(() => {
        if (typeof Shery !== "undefined") {
          clearInterval(checkShery);
          Shery.textAnimate("#headings .o-h", {
            style: 1,
            y: 10,
            delay: 0.1,
            duration: 2,
            ease: "cubic-bezier(0.23, 1, 0.320, 1)",
            multiplier: 0.1,
          });
          setTimeout(() => {
            Shery.textAnimate("#headings .t-h", {
              style: 2,
              y: 10,
              delay: 0, // Delay is handled by setTimeout
              duration: 4,
              ease: "cubic-bezier(0.23, 1, 0.320, 1)",
              multiplier: 0.1,
            });
          }, 2800); // Set delay in milliseconds
        }
      }, 100);
    }
  }, [isUser, navigate]);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Section1 />
      <Section2 />
      <Heads />
      <DareToScan />
      <SlideText />
      <Adventure />
      <NccSection />
      <SectionShare />
    </div>
  );
};

export default Home;
