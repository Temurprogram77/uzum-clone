import React from 'react'
import dataCards from '../cardBox'


const CardBox = () => {
  return (
    <div className='max-w-[1255px] mx-auto'>
        {dataCards.map((item)=>{
            return <p>{item}</p>
        })}
    </div>
  )
}

export default CardBox