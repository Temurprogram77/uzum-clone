import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { images } from '../sliderData';

const Slider = () => {
  const [index, setIndex] = useState();
  return (
    <div className='max-w-[1255px] mx-auto h-[300px] rounded-3xl'>
      <AnimatePresence>
        <motion.img key={images} src='' />
      </AnimatePresence>
    </div>
  )
}

export default Slider