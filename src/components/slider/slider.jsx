import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const Slider = () => {
  const [index, setIndex] = useState();
  return (
    <div className='max-w-[1255px] mx-auto'>
      <AnimatePresence>
        <motion.img key={images[index]} />
      </AnimatePresence>
    </div>
  )
}

export default Slider