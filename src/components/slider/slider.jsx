import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import { images } from "../data/sliderData";

const Slider = () => {
  const [index, setIndex] = useState(2);

  const prevSlide = () => {
    return setIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const nextSlide = () => {
    return setIndex((next) => (next + 1) % images.length);
  };

  return (
    <div className="md:max-w-[1255px] max-w-full md:h-[420px] h-[200px] relative md:mx-auto md:my-0 my-2 mx-[10px] md:rounded-3xl rounded-xl overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={images[index]}
          src={images[index]}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="object-cover absolute w-full h-full cursor-pointer"
        />
      </AnimatePresence>
      <button
        className="absolute top-1/2 md:left-4 left-2 cursor-pointer p-2 rounded-full bg-[#ffffff92]"
        onClick={prevSlide}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute top-1/2 md:right-4 right-2 cursor-pointer p-2 rounded-full bg-[#ffffff92]"
        onClick={nextSlide}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Slider;
