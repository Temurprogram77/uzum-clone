import React from 'react'
import dataCards from '../cardBox'


const CardBox = () => {
  return (
    <div className='max-w-[1255px] mx-auto flex justify-between items-center'>
        {dataCards.map((item)=>{
            return <div className="bg-[#EFEFEF] px-16 my-4 rounded-xl py-4 flex">
                <img src={item.image} className='w-[40px]' alt={item.title} />
                <p>{item.title}</p>
            </div>
        })}
    </div>
  )
}

export default CardBox