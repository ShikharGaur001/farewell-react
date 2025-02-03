import React from 'react';
import { motion } from 'framer-motion';

const AnimateText = ({ text, classes }) => {
  const halfValue = Math.floor(text.length / 2);

  return (
    <h1 className={`${classes} overflow-hidden`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className={index < halfValue ? 'a' : 'b'}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: [50, -10, 0], opacity: [0, 0.5, 1] }}
          transition={{
            delay: 0.5 + (index < halfValue ? index * 0.15 : (text.length - index) * 0.15),
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
};

export default AnimateText;
