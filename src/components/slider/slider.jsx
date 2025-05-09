import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import { images } from "../sliderData";

const Slider = () => {
  const [index, setIndex] = useState(2);

  const prevSlide = ()=>{
    return setIndex((prev)=>(prev-1+images.length)%images.length)
  }
  const nextSlide = ()=>{
    return setIndex((next)=>(next+1)%images.length)
  }

  return (
    <div className="max-w-[1255px] h-[420px] relative mx-auto rounded-3xl overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={images}
          src={images[index]}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="object-cover absolute w-full h-full"
        />
      </AnimatePresence>
      <button className="absolute top-1/2 left-4 cursor-pointer p-2 rounded-full bg-[#ffffff92]" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button className="absolute top-1/2 right-4 cursor-pointer p-2 rounded-full bg-[#ffffff92]" onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Slider;
