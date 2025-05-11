import React from 'react'
import cooler from "../../assets/cooler.jpg";

const Cooler = () => {
  return (
    <div className='max-w-[1255px] mx-auto my-5 rounded-xl overflow-hidden'>
        <img className='bigImage duration-300 cursor-pointer' src={cooler} alt="cooler" />
    </div>
  )
}

export default Cooler