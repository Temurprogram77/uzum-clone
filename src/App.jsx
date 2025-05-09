import React from 'react'
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import Cards from './components/cards/cards'
import Nav from './components/nav/nav'
import Slider from './components/slider/slider'
import CardBox from './components/cardBox/cardBox'
import Pages from './components/pages/pages'

const App = () => {
  return (
    <div className='bg-white'>
      <Nav/>
      <Navbar/>
      <Slider/>
      <Cards/>
      <Pages/>
    </div>
  )
}

export default App