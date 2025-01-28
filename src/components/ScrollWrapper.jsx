import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import Locomotive Scroll CSS
import { useLocation } from "react-router-dom";

const ScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);
  const location = useLocation()

  useEffect(() => {
    const scrollInstance = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    scrollInstance.update()

    return () => {
      scrollInstance.destroy();
    };
  }, [location.pathname]);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default ScrollWrapper;
