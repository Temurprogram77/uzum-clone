import React from 'react'
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import Cards from './components/cards/cards'
import Nav from './components/nav/nav'
import Slider from './components/slider/slider'
import CardBox from './components/cardBox/cardBox'

const App = () => {
  return (
    <div className='bg-white'>
      <Nav/>
      <Navbar/>
      <CardBox/>
      <Slider/>
      <Cards/>
    </div>
  )
}

export default App