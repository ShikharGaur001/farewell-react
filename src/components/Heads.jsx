import React from "react";

const Heads = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center bg-gradient-to-b from-[#E0EAFC] to-[#CFDEF3] px-[3vw] py-[1vw]">
      <h1 className="text-[4vw] z-20 font-semibold mb-[1vw]">
        Representing Us, Inspiring All
      </h1>
      <div className="w-full h-[44vw] z-20 flex justify-around">
        <div className="h-full w-[30vw] flex flex-col items-center">
          <div className="bg-lime-200 w-full h-[38vw]"></div>
          <h2 className="text-[3.33vw] font-medium tracking-tighter">
            Pallavi Tyagi
          </h2>
          <h4 className="uppercase text-[1.6vw] leading-[1] tracking-tighter font-semibold bg-gradient-to-tr from-[#5f2c82] to-[#49a09d] bg-clip-text text-transparent">
            School Head Girl
          </h4>
        </div>
        <div className="h-full w-[30vw] flex flex-col items-center">
          <div className="bg-lime-200 w-full h-[38vw]"></div>
          <h2 className="text-[3.33vw] font-medium tracking-tighter">
            Harsh Tyagi
          </h2>
          <h4 className="uppercase text-[1.6vw] leading-[1] tracking-tighter font-semibold bg-gradient-to-tr from-[#5f2c82] to-[#49a09d] bg-clip-text text-transparent">
            School Head Boy
          </h4>
        </div>
      </div>
      <img src="/line2.svg" className="h-screen absolute z-10" alt="" />
    </section>
  );
};

export default Heads;
