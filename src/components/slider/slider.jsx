import React, { useState } from "react";
import {FaChevronleft} from "react-icons/fa"
import { motion, AnimatePresence } from "motion/react";
import { images } from "../sliderData";

const Slider = () => {
  const [index, setIndex] = useState(2);
  return (
    <div className="max-w-[1255px] h-[420px] relative mx-auto rounded-3xl overflow-hidden">
      <AnimatePresence>
        <motion.img 
          key={images} 
          src={images[index]}
          initial={{opacity: 0, x: 100}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: -100}}
          transition={{duration: 0.5}}
          className="object-cover absolute w-full h-full"
        />
      </AnimatePresence>
      <button>
        <FaChevronleft/>
      </button>
    </div>
  );
};

export default Slider;
