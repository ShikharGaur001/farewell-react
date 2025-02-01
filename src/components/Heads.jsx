import React from "react";

const Heads = () => {
  return (
    <section className="h-[53.542vw] w-full flex flex-col items-center bg-gradient-to-b from-[#E0EAFC] to-[#CFDEF3] px-[3vw] py-[1vw]">
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
          <div className="w-full h-[38vw] relative flex flex-col items-center">
            <div className="bg-lime-200 rounded-2xl w-[24vw] h-[30vw] mt-[6vw] z-0 absolute"></div>
            <img className="h-[40vw] z-10 mt-[-4vw]" src="https://res.cloudinary.com/djz9ifbzg/image/upload/v1738427332/WhatsApp_Image_2025-02-01_at_21.34.14_247c4bb2__1___1___1_-removebg-preview_dgjwdx.png" alt="" />
          </div>
          <h2 className="text-[3.33vw] font-medium tracking-tighter">
            Harsh Mittal
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
