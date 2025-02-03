import React, { useState } from "react";
import { motion } from "framer-motion";

const SlideText = () => {
  const [directionIsLeft, setDirectionIsLeft] = useState(false);

  window.addEventListener("wheel", (dets) => {
    if (dets.deltaY > 0) {
      setDirectionIsLeft(true);
    } else {
      setDirectionIsLeft(false);
    }
  });

  return (
    <section className="bg-emerald-200 flex py-[1.5vw] overflow-hidden">
      {directionIsLeft ? (
        <>
          <motion.div
            animate={{
              x: "-68.472vw",
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="marque flex-shrink-0 flex items-center gap-[1vw] px-[1.5vw]"
          >
            <h1 className="text-[3vw] uppercase tracking-tighter font-semibold">AVM Stays Within</h1>
            <motion.img
              animate={{
                rotate: 180,
              }}
              className="h-[4vw]"
              src="/arrow-right-line.svg"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{
              x: "-68.472vw",
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="marque flex-shrink-0 flex items-center gap-[1vw] px-[1.5vw]"
          >
            <h1 className="text-[3vw] uppercase tracking-tighter font-semibold">AVM Stays Within</h1>
            <motion.img
              animate={{
                rotate: 180,
              }}
              className="h-[4vw]"
              src="/arrow-right-line.svg"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{
              x: "-68.472vw",
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="marque flex-shrink-0 flex items-center gap-[1vw] px-[1.5vw]"
          >
            <h1 className="text-[3vw] uppercase tracking-tighter font-semibold">AVM Stays Within</h1>
            <motion.img
              animate={{
                rotate: 180,
              }}
              className="h-[4vw]"
              src="/arrow-right-line.svg"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{
              x: "-68.472vw",
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="marque flex-shrink-0 flex items-center gap-[1vw] px-[1.5vw]"
          >
            <h1 className="text-[3vw] uppercase tracking-tighter font-semibold">AVM Stays Within</h1>
            <motion.img
              animate={{
                rotate: 180,
              }}
              className="h-[4vw]"
              src="/arrow-right-line.svg"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{
              x: "-68.472vw",
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="marque flex-shrink-0 flex items-center gap-[1vw] px-[1.5vw]"
          >
            <h1 className="text-[3vw] uppercase tracking-tighter font-semibold">AVM Stays Within</h1>
            <motion.img
              animate={{
                rotate: 180,
              }}
              className="h-[4vw]"
              src="/arrow-right-line.svg"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{
              x: "-68.472vw",
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="marque flex-shrink-0 flex items-center gap-[1vw] px-[1.5vw]"
          >
            <h1 className="text-[3vw] uppercase tracking-tighter font-semibold">AVM Stays Within</h1>
            <motion.img
              animate={{
                rotate: 180,
              }}
              className="h-[4vw]"
              src="/arrow-right-line.svg"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{
              x: "-68.472vw",
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="marque flex-shrink-0 flex items-center gap-[1vw] px-[1.5vw]"
          >
            <h1 className="text-[3vw] uppercase tracking-tighter font-semibold">AVM Stays Within</h1>
            <motion.img
              animate={{
                rotate: 180,
              }}
              className="h-[4vw]"
              src="/arrow-right-line.svg"
              alt=""
            />
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            animate={{
              x: "-3.236vw",
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="marque flex-shrink-0 flex items-center gap-[1vw] px-[1.5vw]"
          >
            <h1 className="text-[3vw] uppercase tracking-tighter font-semibold">AVM Stays Within</h1>
            <motion.img
              animate={{
                rotate: 0,
              }}
              className="h-[4vw]"
              src="/arrow-right-line.svg"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{
              x: "-3.236vw",
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="marque flex-shrink-0 flex items-center gap-[1vw] px-[1.5vw]"
          >
            <h1 className="text-[3vw] uppercase tracking-tighter font-semibold">AVM Stays Within</h1>
            <motion.img
              animate={{
                rotate: 0,
              }}
              className="h-[4vw]"
              src="/arrow-right-line.svg"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{
              x: "-3.236vw",
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="marque flex-shrink-0 flex items-center gap-[1vw] px-[1.5vw]"
          >
            <h1 className="text-[3vw] uppercase tracking-tighter font-semibold">AVM Stays Within</h1>
            <motion.img
              animate={{
                rotate: 0,
              }}
              className="h-[4vw]"
              src="/arrow-right-line.svg"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{
              x: "-3.236vw",
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="marque flex-shrink-0 flex items-center gap-[1vw] px-[1.5vw]"
          >
            <h1 className="text-[3vw] uppercase tracking-tighter font-semibold">AVM Stays Within</h1>
            <motion.img
              animate={{
                rotate: 0,
              }}
              className="h-[4vw]"
              src="/arrow-right-line.svg"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{
              x: "-3.236vw",
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="marque flex-shrink-0 flex items-center gap-[1vw] px-[1.5vw]"
          >
            <h1 className="text-[3vw] uppercase tracking-tighter font-semibold">AVM Stays Within</h1>
            <motion.img
              animate={{
                rotate: 0,
              }}
              className="h-[4vw]"
              src="/arrow-right-line.svg"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{
              x: "-3.236vw",
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="marque flex-shrink-0 flex items-center gap-[1vw] px-[1.5vw]"
          >
            <h1 className="text-[3vw] uppercase tracking-tighter font-semibold">AVM Stays Within</h1>
            <motion.img
              animate={{
                rotate: 0,
              }}
              className="h-[4vw]"
              src="/arrow-right-line.svg"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{
              x: "-3.236vw",
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="marque flex-shrink-0 flex items-center gap-[1vw] px-[1.5vw]"
          >
            <h1 className="text-[3vw] uppercase tracking-tighter font-semibold">AVM Stays Within</h1>
            <motion.img
              animate={{
                rotate: 0,
              }}
              className="h-[4vw]"
              src="/arrow-right-line.svg"
              alt=""
            />
          </motion.div>
        </>
      )}
    </section>
  );
};

export default SlideText;
