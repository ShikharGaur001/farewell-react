import React from "react";
import {motion} from "framer-motion"

const Adventure = () => {
  return (
    <section className="w-full overflow-hidden flex flex-col items-center bg-gradient-to-br from-[#FFEEEE] to-[#DDEFBB]">
      <div className="flex w-full h-screen">
        <div className="pt-[2vw] w-[60vw] h-full pl-[2vw] flex flex-col">
          <h1 className="text-[7vw] tracking-tighter font-semibold mb-[2vw] bg-[url(https://res.cloudinary.com/djz9ifbzg/image/upload/v1738029063/text5_m22ldq.jpg)] bg-cover bg-center bg-clip-text text-transparent">Your Adventures</h1>
          <div className="bg-green-200 h-[30vw] w-full rounded-2xl"></div>
          <div className="w-full h-[5vw] mt-[2vw] flex gap-[2vw] px-[2vw]">
            <div className="bg-teal-200 h-full w-[5vw] rounded-xl"></div>
            <div className="bg-teal-200 h-full w-[5vw] rounded-xl"></div>
            <div className="bg-teal-200 h-full w-[5vw] rounded-xl"></div>
            <div className="bg-teal-200 h-full w-[5vw] rounded-xl"></div>
            <div className="bg-teal-200 h-full w-[5vw] rounded-xl"></div>
          </div>
        </div>
        <div className="w-[40vw] h-full flex justify-center gap-[2vw] px-[2vw]">
          <motion.div
            animate={{
              y: ["0vw", "-140vw"], // Adjust the value based on the total height of the content
            }}
            transition={{
              repeat: Infinity,
              duration: 8, // Adjust the duration as needed
              ease: "linear",
            }}
            className="h-[280vw] w-[18vw] flex flex-col gap-[2vw] overflow-hidden"
          >
            <div className="bg-red-200 w-full h-[26vw] rounded-2xl flex-shrink-0"></div>
            <div className="bg-pink-200 w-full h-[26vw] rounded-2xl flex-shrink-0"></div>
            <div className="bg-pink-200 w-full h-[26vw] rounded-2xl flex-shrink-0"></div>
            <div className="bg-pink-200 w-full h-[26vw] rounded-2xl flex-shrink-0"></div>
            <div className="bg-lime-200 w-full h-[26vw] rounded-2xl flex-shrink-0"></div>
            <div className="bg-red-200 w-full h-[26vw] rounded-2xl flex-shrink-0"></div>
            <div className="bg-pink-200 w-full h-[26vw] rounded-2xl flex-shrink-0"></div>
            <div className="bg-pink-200 w-full h-[26vw] rounded-2xl flex-shrink-0"></div>
            <div className="bg-pink-200 w-full h-[26vw] rounded-2xl flex-shrink-0"></div>
            <div className="bg-lime-200 w-full h-[26vw] rounded-2xl flex-shrink-0"></div>
          </motion.div>
          <motion.div
            animate={{
              y: ["-140vw", "0vw"], // Adjust the value based on the total height of the content
            }}
            transition={{
              repeat: Infinity,
              duration: 8, // Adjust the duration as needed
              ease: "linear",
            }}
            className="h-[280vw] w-[18vw] flex flex-col gap-[2vw] overflow-hidden"
          >
            <div className="bg-red-200 w-full h-[26vw] rounded-2xl flex-shrink-0"></div>
            <div className="bg-pink-200 w-full h-[26vw] rounded-2xl flex-shrink-0"></div>
            <div className="bg-pink-200 w-full h-[26vw] rounded-2xl flex-shrink-0"></div>
            <div className="bg-pink-200 w-full h-[26vw] rounded-2xl flex-shrink-0"></div>
            <div className="bg-lime-200 w-full h-[26vw] rounded-2xl flex-shrink-0"></div>
            <div className="bg-red-200 w-full h-[26vw] rounded-2xl flex-shrink-0"></div>
            <div className="bg-pink-200 w-full h-[26vw] rounded-2xl flex-shrink-0"></div>
            <div className="bg-pink-200 w-full h-[26vw] rounded-2xl flex-shrink-0"></div>
            <div className="bg-pink-200 w-full h-[26vw] rounded-2xl flex-shrink-0"></div>
            <div className="bg-lime-200 w-full h-[26vw] rounded-2xl flex-shrink-0"></div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Adventure;
